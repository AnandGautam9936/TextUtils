import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";


//use rfc for react function based components
export default function Navbar(props) {
  return (
    <div>
        {/* below we use backtick ` ie below escape key so the synax {``} will show that we are writting JS inside it */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.home}
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.about}
                </a>
              </li> */}
            </ul>
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"} mx-3 `}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable DarkMode</label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.protTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
    title:"Set Title Here",
    Home:"Home Page Here",
    About:"About Page here"
  };