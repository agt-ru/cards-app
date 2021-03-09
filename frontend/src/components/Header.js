import React from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import "../styles/Header.css";

const Header = () => {
  const userList = useSelector((state) => state.userList);
  const { usersPerPage } = userList;

  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">
          <Link
            to={`/${
              usersPerPage && (usersPerPage !== 5 ? `size/${usersPerPage}` : "")
            }`}
          >
            Cards
          </Link>
        </h1>
        <Route
          render={({ history, location, match }) => (
            <SearchBox history={history} location={location} match={match} />
          )}
        />
      </div>
    </div>
  );
};

export default Header;
