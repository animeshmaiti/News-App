import React, { Component } from "react";
import noImage from "../no-image.png";

export class NewsItem extends Component {
  render() {
    let title = this.props.title;
    let description = this.props.desc;
    let imgUrl = this.props.imgUrl;
    let newsUrl = this.props.newsUrl;
    let author=this.props.author;
    let date = this.props.date;
    let source = this.props.source;
    return (
      <div
        className={`card mb-3`}
        style={{ width: "95%" }}
      >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'98%'}}>{source}</span>
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={imgUrl}
              onError={(e) => {
                e.preventDefault();
                e.target.onerror = null;
                e.target.src = noImage;
              }}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {description}
                <a href={newsUrl} target="_blank" rel="noopener noreferrer">
                  full news
                </a>
              </p>
              <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
