import React, { Component } from "react";
import NewsItem2 from "./NewsItem2";
import noImage from "../no-image.png";
import Spinner from "./Spinner";

export class NewsShowCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      pageSize: this.props.pageSize,
    };
  }
  async updateNews(){
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/${this.props.endpoints}?q=${this.props.query}&language=en&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePrev = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };
  handleNext = async () => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };

  render() {
    const btn_style = this.props.myTheme;
    return (
      <>
        <div className="container">
          <h1>{this.props.heading}</h1>
          {this.state.loading && <Spinner />}
          <div className="show-case">
            {!this.state.loading &&
              this.state.articles.map((element) => {
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
                disabled={this.state.page <= 1}
                type="button"
                className={`btn btn-${btn_style}`}
                onClick={this.handlePrev}
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.state.pageSize)
                }
                type="button"
                className={`btn btn-${btn_style}`}
                onClick={this.handleNext}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsShowCase;
