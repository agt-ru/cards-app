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
              render={({ history, location, match }) => (
                <SearchBox history={history} location={location} match={match} />
              )}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
