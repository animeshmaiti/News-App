import React, { Component } from "react";
import noImage from "../no-image.png";

export class NewsItem2 extends Component {
  render() {
    let cardStyle = this.props.myTheme;
    let title = this.props.title;
    let description = this.props.desc;
    let imgUrl = this.props.imgUrl;
    let newsUrl = this.props.newsUrl;
    return (
      <div
        className={`card text-bg-${cardStyle.nav_style} my-4 border-${cardStyle.border_style}`}
        style={{ width: "18rem" }}
      >
        <div className="d-flex justify-content-center">
          <img
            src={imgUrl}
            onError={(e) => {
              e.preventDefault();
              e.target.onerror = null;
              e.target.src = noImage;
            }}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
            <a href={newsUrl} target="_blank" rel="noopener noreferrer">
              full news
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default NewsItem2;
