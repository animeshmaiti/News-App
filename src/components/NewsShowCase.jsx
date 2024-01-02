import React, {useEffect, useState } from "react";
import NewsItem2 from "./NewsItem2";
import noImage from "../no-image.png";
import Spinner from "./Spinner";

function NewsShowCase(props) {
  const [showCaseComp, setShowCaseComp] = useState({
    articles: [],
    page: 1,
    loading: false,
    pageSize: props.pageSize,
    totalResults: 0,
  });

  const updateNews = async (fetchPage = showCaseComp.page) => {
    setShowCaseComp({ ...showCaseComp, loading: true });
    props.setProgress(10);
    const url = `https://newsapi.org/v2/${props.endpoints}?q=${props.query}&language=en&apiKey=${props.apiKey}&page=${fetchPage}&pagesize=${showCaseComp.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setShowCaseComp({
      ...showCaseComp,
      articles: parseData.articles,
      page: fetchPage,
      totalResults: parseData.totalResults,
      loading: false,
    });
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const handlePrev = async () => {
    let nextPage = showCaseComp.page - 1;
    updateNews(nextPage);
  };
  const handleNext = async () => {
    let prevPage = showCaseComp.page + 1;
    const totalResults = showCaseComp.totalResults;
    if (showCaseComp.articles.length < totalResults) {
      updateNews(prevPage);
    } else {
      console.log("No more results to fetch.");
    }
  };

  const btn_style = props.myTheme;
  return (
    <>
      <div className="container" style={{marginTop:"4.5rem"}}>
        <h1>{props.heading}</h1>
        {showCaseComp.loading && <Spinner />}
        <div className="show-case">
          {!showCaseComp.loading &&
            showCaseComp.articles.map((element) => {
              return (
                <NewsItem2
                  key={element.url}
                  source={element.source.name}
                  author={element.author}
                  title={element.title ? element.title : ""}
                  desc={element.description ? element.description : ""}
                  imgUrl={element.urlToImage ? element.urlToImage : noImage}
                  date={element.publishedAt}
                  newsUrl={element.url}
                />
              );
            })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={showCaseComp.page <= 1}
              type="button"
              className={`btn btn-${btn_style}`}
              onClick={handlePrev}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                showCaseComp.page + 1 >
                Math.ceil(showCaseComp.totalResults / showCaseComp.pageSize)
              }
              type="button"
              className={`btn btn-${btn_style}`}
              onClick={handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsShowCase;
