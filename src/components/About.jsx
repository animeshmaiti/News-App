import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div style={this.props.myTheme}>
        <div className="container">
          <h1>About</h1>
          <p>
            This news website is created using react-js class base component it uses newsAPI | 
            <a href="https://newsapi.org/"target="_blank" rel="noopener noreferrer">https://newsapi.org/</a>| and pull the
            json format data and render the data in components
          </p>
          <h1>Category Used</h1>
          <ul>
            <li>All top-headlines country(in) wise(Home)</li>
            <li>News showcase used everything endpoint and query esports (q=esports)</li>
            <li>All top-headlines business category</li>
            <li>All top-headlines technology category</li>
            <li>All top-headlines sports category</li>
            <li>All top-headlines entertainment category</li>
            <li>All top-headlines health category</li>
            <li>All top-headlines science category</li>
            <li>Gaming used everything endpoint and query gaming</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
