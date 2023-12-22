import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NewsItem2 from "./NewsItem2";
import noImage from "../no-image (Custom).png";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }
  render() {
    const itemStyle = this.props.myTheme;
    // console.log(itemStyle);
    return (
      <>
        <div className="container">
          <h1>Top Stories</h1>
          <div className="d-flex">
            <div style={{ width: "70%" }}>
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
            </div>

            <div style={{ width: "30%" }}>
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
