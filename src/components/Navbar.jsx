import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    const navStyle = this.props.myTheme;
    const toggleBtn = this.props.toggleStyle;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsApp
            </Link>
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
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/newsShowCase">
                    News Showcase
                  </NavLink>
                </li>
                <li>
                  <div className="divider-vertical"></div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/business">
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tech">
                    Tech
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sports">
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/entertainment">
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/health">
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/science">
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/gaming">
                    Gaming
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
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
                <label htmlFor="theme">
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
