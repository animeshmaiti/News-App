import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NewsItem2 from "./NewsItem2";
import noImage from "../no-image.png";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=10`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page,
      totalResults: parseData.totalResults,
    });
  }
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      this.props.apiKey
    }&page=${this.state.page - 1}&pagesize=10`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, page: this.state.page - 1 });
  };
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      this.props.apiKey
    }&page=${this.state.page + 1}&pagesize=10`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page + 1,
    });
  };
  render() {
    const itemStyle = this.props.myTheme;
    return (
      <>
        <div className="container">
          <h1>Top Stories</h1>
          <div className="d-flex">
            <div style={{ width: "80%" }}>
              {this.state.articles.map((element) => {
                return (
                  <NewsItem
                    key={element.url}
                    myTheme={itemStyle}
                    title={element.title ? element.title : ""}
                    desc={element.description ? element.description : ""}
                    imgUrl={element.urlToImage ? element.urlToImage : noImage}
                    newsUrl={element.url}
                  />
                );
              })}
              <div className="container d-flex justify-content-between">
                <button
                  disabled={this.state.page <= 1}
                  type="button"
                  className={`btn btn-${itemStyle.btn_style}`}
                  onClick={this.handlePrev}
                >
                  &larr; Previous
                </button>
                <button
                  disabled={
                    this.state.page + 1 >
                    Math.ceil(this.state.totalResults / 10)
                  }
                  type="button"
                  className={`btn btn-${itemStyle.btn_style}`}
                  onClick={this.handleNext}
                >
                  Next &rarr;
                </button>
              </div>
            </div>

            <div style={{ width: "20%" }}>
              <NewsItem2
                myTheme={itemStyle}
                title="my title"
                desc="myDesc"
                imgUrl="https://static.toiimg.com/thumb/msid-106138405,width-1070,height-580,imgsize-55706,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default News;
