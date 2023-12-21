import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NewsItem2 from "./NewsItem2";

export class News extends Component {
  render() {
    // console.log(this.props);
    const itemStyle=this.props.myTheme;
    return (
      <>
      Top Stories
        <div className="container d-flex ">
          <div style={{width:"70%"}}>
            <NewsItem myTheme={itemStyle} />
            <NewsItem myTheme={itemStyle} />
            <NewsItem myTheme={itemStyle} />
          </div>
          <div style={{width:"30%"}}>
            <NewsItem2 myTheme={itemStyle} />
          </div>
        </div>
      </>
    );
  }
}
export default News;
