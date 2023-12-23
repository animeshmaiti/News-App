import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      backgroundColor: "#212529",
      btnText: "Dark Mode",
      nav_style: "dark",
      btn_style:"light",
      border_style: "secondary",
      svg_style:"rgba(222, 226, 230, 0.75)"
    };
    document.body.style.backgroundColor = "#212529";
    document.body.style.color = "white";
  }
  apiKey=process.env.REACT_APP_NEWS_API_KEY;
  render() {
    const toggleStyle = () => {
      // const svgElements = document.querySelectorAll('svg'); // Select all SVG elements
      if (this.state.color === "white") {
        this.setState(//async
          {
            color: "#212529",
            backgroundColor: "white",
            btnText: "Light Mode",
            nav_style: "light",
            svg_style:"rgba(67, 68, 68, 0.75)"
          },
          () => {
            document.body.style.backgroundColor = this.state.backgroundColor;
            document.body.style.color = this.state.color;
          }
        );
        // showAlert("success", "Light mode is enabled");
        // svgElements.forEach((svg) => {
        //   svg.style.fill = '#212529'; // Change the fill color
        // });
      } else {
        this.setState(
          {
            color: "white",
            backgroundColor: "#212529",
            btnText: "Dark Mode",
            nav_bg: "navbar navbar-expand-lg bg-dark",
            nav_style: "dark",
            svg_style:"rgba(222, 226, 230, 0.75)"
          },
          () => {
            document.body.style.backgroundColor = this.state.backgroundColor;
            document.body.style.color = this.state.color;
          }
        );
        // showAlert("success", "Dark mode is enabled");
        // svgElements.forEach((svg) => {
        //   svg.style.fill = 'rgba(222, 226, 230, 0.75)'; // Change the fill color
        // });
      }
    };
    return (
      <div>
        <Navbar myTheme={this.state} toggleStyle={toggleStyle} />
        <News apiKey={this.apiKey} myTheme={this.state} />
        <Footer myTheme={this.state}/>
      </div>
    );
  }
}
