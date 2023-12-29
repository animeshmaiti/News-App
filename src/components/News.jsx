import React, { Component } from "react";
import NewsItem from "./NewsItem";
import noImage from "../no-image.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
      loading: true,
      pageSize: this.props.pageSize,
      totalResults: 0,
    };
    document.title = `${this.capFirstLetter(this.props.category)} - News`;
  }
  async updateNews() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/${this.props.endpoints}?country=${this.props.country}&language=en&category=${this.props.category}&q=${this.props.query}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.state.pageSize}`;
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
  // handlePrev = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  // handleNext = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };
  // fetchMoreData = async () => {
  //   const nextPage = this.state.page+1
  //   console.log(this.state.page)
  //   const url = `https://newsapi.org/v2/${this.props.endpoints}?country=${this.props.country}&language=en&category=${this.props.category}&q=${this.props.query}&apiKey=${this.props.apiKey}&page=${nextPage}&pagesize=${this.state.pageSize}`;
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   this.setState((prevState) => ({
  //     articles: [...prevState.articles, ...parseData.articles],
  //     page: nextPage,
  //     totalResults: parseData.totalResults,
  //   }));
  // };
  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/${this.props.endpoints}?country=${this.props.country}&language=en&category=${this.props.category}&q=${this.props.query}&apiKey=${this.props.apiKey}&page=${nextPage}&pagesize=${this.state.pageSize}`;

    try {
      let data = await fetch(url);
      let parseData = await data.json();

      if (parseData.articles && Array.isArray(parseData.articles)) {
        const newArticles = parseData.articles;
        const totalResults = parseData.totalResults;

        // Check if there are more results to fetch
        if (this.state.articles.length < totalResults) {
          this.setState((prevState) => ({
            articles: [...prevState.articles, ...newArticles],
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

  capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  render() {
    // const btn_style = this.props.myTheme;
    console.log(this.state.articles.length);
    console.log(this.state.totalResults);
    return (
      <>
        <div className="container">
          <h1 className="m-4">{`Top ${this.capFirstLetter(
            this.props.category
          )} Headlines`}</h1>
          {this.state.loading && <Spinner />}
          <div className="d-flex">
            <div className="min-vh-100 my-2" style={{ width: "100%" }}>
              <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={
                  this.state.articles.length !== this.state.totalResults &&
                  this.state.articles.length < 100
                }
                loader={<Spinner />}
              >
                {this.state.articles.map((element) => {
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
}
export default News;
