import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsShowCase from "./components/NewsShowCase";
import About from "./components/About";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      backgroundColor: "#212529",
      btnText: "Dark Mode",
      btn_style: "light",
      border_style: "secondary",
      svg_style: "rgba(222, 226, 230, 0.75)",
    };
    document.body.style.backgroundColor = "#212529";
    document.body.style.color = "white";
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  }
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  render() {
    const toggleStyle = () => {
      if (this.state.color === "white") {
        this.setState(
          //async
          {
            color: "#212529",
            backgroundColor: "white",
            btnText: "Light Mode",
            btn_style: "dark",
            svg_style: "rgba(67, 68, 68, 0.75)",
          },
          () => {
            document.body.style.backgroundColor = this.state.backgroundColor;
            document.body.style.color = this.state.color;
            document.documentElement.setAttribute('data-bs-theme', 'light')
          }
        );
      } else {
        this.setState(
          {
            color: "white",
            backgroundColor: "#212529",
            btnText: "Dark Mode",
            nav_bg: "navbar navbar-expand-lg bg-dark",
            btn_style: "light",
            svg_style: "rgba(222, 226, 230, 0.75)",
          },
          () => {
            document.body.style.backgroundColor = this.state.backgroundColor;
            document.body.style.color = this.state.color;
            document.documentElement.setAttribute('data-bs-theme', 'dark')
          }
        );
      }
    };
    return (
      <>
        <Router>
          <Navbar myTheme={this.state} toggleStyle={toggleStyle} />
          <Routes>
            <Route exact path="/" element={<News key="home" myTheme={this.state.btn_style} heading={"Top Stories"} endpoints={"top-headlines"} country={"in"} category={""} apiKey={this.apiKey} pageSize={10} />}/>
            <Route exact path="/newsShowCase" element={<NewsShowCase key="esports" myTheme={this.state.btn_style} heading={"News ShowCase"} endpoints={"everything"} query={"esports"} apiKey={this.apiKey} pageSize={20} />} />
            <Route exact path="/business" element={<News key="business" myTheme={this.state.btn_style} endpoints={"top-headlines"} category={"business"} apiKey={this.apiKey} pageSize={10} />}/>
            <Route exact path="/tech" element={<News key="technology" myTheme={this.state.btn_style} endpoints={"top-headlines"} category={"technology"} apiKey={this.apiKey} pageSize={10} />}/>
            <Route exact path="/sports" element={<News key="sports" myTheme={this.state.btn_style} endpoints={"top-headlines"} category={"sports"} apiKey={this.apiKey} pageSize={10} />}/>
            <Route exact path="/entertainment" element={<News key="entertainment" myTheme={this.state.btn_style} endpoints={"top-headlines"}  category={"entertainment"} apiKey={this.apiKey} pageSize={10} />}/>
            <Route exact path="/health" element={<News key="health" myTheme={this.state.btn_style} endpoints={"top-headlines"} category={"health"} apiKey={this.apiKey} pageSize={10} />}/>
            <Route exact path="/science" element={<News key="science" myTheme={this.state.btn_style} endpoints={"top-headlines"} category={"science"} apiKey={this.apiKey} pageSize={10} />}/>
            <Route exact path="/gaming" element={<News key="gaming" myTheme={this.state.btn_style} endpoints={"everything"} query={"gaming"} apiKey={this.apiKey} pageSize={10} />}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
          <Footer myTheme={this.state} />
        </Router>
      </>
    );
  }
}
