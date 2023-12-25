import React, { Component } from "react";
import NewsItem from "./NewsItem";
import noImage from "../no-image.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "",
    pageSize: 10,
    category: "",
    endpoints: "top-headlines",
    query: "",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    endpoints: PropTypes.string,
    query: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      pageSize: this.props.pageSize,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    let url = `https://newsapi.org/v2/${this.props.endpoints}?country=${this.props.country}&language=en&category=${this.props.category}&q=${this.props.query}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  handlePrev = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/${this.props.endpoints}?country=${
      this.props.country
    }&language=en&category=${this.props.category}&q=${
      this.props.query
    }&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=${
      this.state.pageSize
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  handleNext = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/${this.props.endpoints}?country=${
      this.props.country
    }&language=en&category=${this.props.category}&q=${
      this.props.query
    }&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${
      this.state.pageSize
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  render() {
    const itemStyle = this.props.myTheme;
    return (
      <>
        <div className="container">
          <h1>{this.props.heading}</h1>
          {this.state.loading && <Spinner />}
          <div className="d-flex">
            <div style={{ width: "100%" }}>
              {!this.state.loading &&
                this.state.articles.map((element) => {
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
                    Math.ceil(this.state.totalResults / this.state.pageSize)
                  }
                  type="button"
                  className={`btn btn-${itemStyle.btn_style}`}
                  onClick={this.handleNext}
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default News;
