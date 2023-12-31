import React, { useState,useEffect} from "react";
import NewsItem from "./NewsItem";
import noImage from "../no-image.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [newsComp,setNewsComp]=useState({
    articles: [],
    page: 1,
    loading: true,
    pageSize: props.pageSize,
    totalResults: 0,
  }) 
  // document.title = `${capFirstLetter(props.category)} - News`;
  const updateNews=async()=> {
    setNewsComp({...newsComp,loading: true });
    props.setProgress(10);
    const url = `https://newsapi.org/v2/${props.endpoints}?country=${props.country}&language=en&category=${props.category}&q=${props.query}&apiKey=${props.apiKey}&page=${newsComp.page}&pagesize=${newsComp.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setNewsComp({
      ...newsComp,
      articles: parseData.articles,
      page: newsComp.page,
      totalResults: parseData.totalResults,
      loading: false,
    });
    props.setProgress(100);
  }

  useEffect(()=>{
    updateNews();
  },[])
  

  const fetchMoreData = async () => {
    const nextPage = newsComp.page + 1;
    const url = `https://newsapi.org/v2/${props.endpoints}?country=${props.country}&language=en&category=${props.category}&q=${props.query}&apiKey=${props.apiKey}&page=${nextPage}&pagesize=${newsComp.pageSize}`;

    try {
      let data = await fetch(url);
      let parseData = await data.json();

      if (parseData.articles && Array.isArray(parseData.articles)) {
        const newArticles = parseData.articles;
        const totalResults = parseData.totalResults;

        // Check if there are more results to fetch
        if (newsComp.articles.length < totalResults) {
          setNewsComp( prevNewsComp => ({
            ...newsComp,
            articles: [...prevNewsComp.articles, ...newArticles],
            page: nextPage,
            totalResults: totalResults,
          }));
        } else {
          console.log("No more results to fetch.");
        }
      } else {
        console.error(
          "Invalid or missing 'articles' property in API response:",
          parseData
        );
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
    // const btn_style = props.myTheme;
    console.log(newsComp.articles.length);
    console.log(newsComp.totalResults);
    return (
      <>
        <div className="container" style={{marginTop:"4.5rem"}}>
          <h1 className="m-4">{`Top ${capFirstLetter(
            props.category
          )} Headlines`}</h1>
          {newsComp.loading && <Spinner />}
          <div className="d-flex">
            <div className="min-vh-100 my-2" style={{ width: "100%" }}>
              <InfiniteScroll
                dataLength={newsComp.articles.length}
                next={fetchMoreData}
                hasMore={
                  newsComp.articles.length !== newsComp.totalResults &&
                  newsComp.articles.length < 100
                }
                loader={<Spinner />}
              >
                {newsComp.articles.map((element) => {
                  return (
                    <NewsItem
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
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </>
    );
  }
News.defaultProps = {
  country: "",
  pageSize: 10,
  category: "",
  endpoints: "top-headlines",
  query: "",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  endpoints: PropTypes.string,
  query: PropTypes.string,
};
export default News;
