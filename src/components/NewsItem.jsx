import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let cardStyle = this.props.myTheme;
    let title = this.props.title;
    let description = this.props.desc;
    let imgUrl = this.props.imgUrl;
    let newsUrl = this.props.newsUrl;
    // console.log(cardStyle);
    return (
        <div className={`card text-bg-${cardStyle.nav_style} border-${cardStyle.border_style} mb-3`} style={{width:"90%"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imgUrl} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {description}
                  <a href={newsUrl} target="_blank" rel="noopener noreferrer">full news</a>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default NewsItem;
