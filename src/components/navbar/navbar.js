import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import Jenflip from "../jencoin/Jencoin.js";
class MyNav extends Component {
  // state = {  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Jenflip>
                 {({  isHeads }) => (
                    <>
                      {isHeads ? (
                          <div className= "coinFace" id=
                          "funjen">
                            <img src= '../images/eviljen.jpg' alt='funjen' />
                          </div>
                        ) : (
                          <div className= "coinFace" id="projen">
                            <img src='../images/projen.jpg' alt='seriousjen' />
                          </div>
                        )}
                      </>
                    )}
              </Jenflip>
              <p>Click me.</p>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <Link className="navbar-brand navbar-default" to="/bizwebsite">
              "jack-of-all-codes"
            </Link>
            <ul className="navbar-nav navbar-default">
              <li className="nav-item active">
                <Link
                  className={
                    window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/about"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className={
                    window.location.pathname === "/portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/portfolio"
                >
                  My Portfolio
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className={
                    window.location.pathname === "/blog"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/blog"
                
                >
                  Wordpress Blog
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className={
                    window.location.pathname === "/github"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/github"
                 
                >
                  Github
                </Link>
              </li>
              {/* <li className="nav-item active">
          <Link
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            to="/about">About</Link>                             
        </li> */}
            </ul>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MyNav;
