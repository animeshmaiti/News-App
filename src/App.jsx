import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsShowCase from "./components/NewsShowCase";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [myStyle, setMyStyle] = useState({
    progress: 0,
    color: "white",
    backgroundColor: "#212529",
    btnText: "Dark Mode",
    btn_style: "light",
    border_style: "secondary",
    svg_style: "rgba(222, 226, 230, 0.75)",
  });

  useEffect(() => {
    document.body.style.backgroundColor = myStyle.color === 'white' ? '#212529' : 'white';
    document.body.style.color = myStyle.color === 'white' ? 'white' : '#212529';
    document.documentElement.setAttribute("data-bs-theme", myStyle.color === 'white'? 'dark':'light');
  }, [myStyle.color]);

  // setProgress = (progress) => {
  //   setState({ progress: progress });
  // };
  const setProgress = (progress) => {
    setMyStyle({ ...myStyle, progress: progress });
  };
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle(
        //async
        {
          color: "#212529",
          backgroundColor: "white",
          btnText: "Light Mode",
          btn_style: "dark",
          svg_style: "rgba(67, 68, 68, 0.75)",
        });
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
        btnText: "Dark Mode",
        nav_bg: "navbar navbar-expand-lg bg-dark",
        btn_style: "light",
        svg_style: "rgba(222, 226, 230, 0.75)",
      });
    }
  };
  return (
    <>
      <Router>
        <LoadingBar color="#f11946" progress={myStyle.progress} />
        <Navbar myTheme={myStyle} toggleStyle={toggleStyle} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="home"
                heading={"Top Stories"}
                endpoints={"top-headlines"}
                country={"in"}
                category={""}
                apiKey={apiKey}
                pageSize={10}
              />
            }
          />
          <Route
            exact
            path="/newsShowCase"
            element={
              <NewsShowCase
                setProgress={setProgress}
                key="esports"
                myTheme={myStyle.btn_style}
                heading={"News ShowCase"}
                endpoints={"everything"}
                query={"esports"}
                apiKey={apiKey}
                pageSize={20}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                endpoints={"top-headlines"}
                category={"business"}
                apiKey={apiKey}
                pageSize={10}
              />
            }
          />
          <Route
            exact
            path="/tech"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                endpoints={"top-headlines"}
                category={"technology"}
                apiKey={apiKey}
                pageSize={10}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                endpoints={"top-headlines"}
                category={"sports"}
                apiKey={apiKey}
                pageSize={10}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                endpoints={"top-headlines"}
                category={"entertainment"}
                apiKey={apiKey}
                pageSize={10}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                endpoints={"top-headlines"}
                category={"health"}
                apiKey={apiKey}
                pageSize={10}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                endpoints={"top-headlines"}
                category={"science"}
                apiKey={apiKey}
                pageSize={10}
              />
            }
          />
          <Route
            exact
            path="/gaming"
            element={
              <News
                setProgress={setProgress}
                key="gaming"
                endpoints={"everything"}
                query={"gaming"}
                apiKey={apiKey}
                pageSize={10}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer myTheme={myStyle} />
      </Router>
    </>
  );
}
