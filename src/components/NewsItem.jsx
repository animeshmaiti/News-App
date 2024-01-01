import React from "react";
import noImage from "../no-image.png";

function NewsItem(props) {
  let title = props.title;
  let description = props.desc;
  let imgUrl = props.imgUrl;
  let newsUrl = props.newsUrl;
  let author = props.author;
  let date = props.date;
  let source = props.source;
  return (
    <div className={`card mb-3`} style={{ width: "95%" }}>
      <div>
        <span className="source badge rounded-pill bg-danger">{source}</span>
      </div>
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
            <p className="card-text">
              <small className="text-body-secondary">
                By {author} on {date}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
