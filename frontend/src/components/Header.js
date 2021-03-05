import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">
          <Link to="/">Cards</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="!#">
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
