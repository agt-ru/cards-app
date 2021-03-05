import React from "react";
import { Link, Route } from "react-router-dom";

import SearchBox from "../components/SearchBox";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="container flex">
        <ul>
          <li>
            <h1 className="logo">
              <Link to="/">Cards</Link>
            </h1>
          </li>
          <li>
            <Route
              render={({ history, location }) => (
                <SearchBox history={history} location={location} />
              )}
            />
          </li>
        </ul>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-id-card"></i>
              </Link>
            </li>
            <li>
              {/* <Link to="https://github.com/agt-ru">
                <i className="fab fa-github"></i>
              </Link> */}
              <a href="https://github.com/agt-ru">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
