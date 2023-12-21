import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    const navStyle = this.props.myTheme;
    const toggleBtn = this.props.toggleStyle;
    console.log(navStyle);
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme={navStyle.nav_style}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsApp
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    News Showcase
                  </a>
                </li>
                <li>
                  <div className="divider-vertical"></div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Tech
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="theme"
                  onChange={toggleBtn}
                />
                <label htmlFor="theme" style={{color:`${navStyle.color}`}}>
                  {navStyle.btnText}
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
