import React, { Component } from "react";
import noImage from "../no-image.png";

export class NewsItem2 extends Component {
  render() {
    let title = this.props.title;
    let description = this.props.desc;
    let imgUrl = this.props.imgUrl;
    let newsUrl = this.props.newsUrl;
    let author = this.props.author;
    let date = this.props.date;
    let source = this.props.source;
    return (
      <div className={`card mx-2 my-4`} style={{ width: "18rem" }}>
        <div>
          <span className="source badge rounded-pill bg-danger">{source}</span>
        </div>
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
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toTimeString()}
            </small>
          </p>
        </div>
      </div>
    );
  }
}

export default NewsItem2;
