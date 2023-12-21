import React, { Component } from "react";

export class NewsItem2 extends Component {
  render() {
    const cardStyle = this.props.myTheme;
    return (
        <div className={`card text-bg-${cardStyle.nav_style} border-${cardStyle.border_style}`} style={{width: "90%"}}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
    );
  }
}

export default NewsItem2;
