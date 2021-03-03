import React from "react";
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">
          <a href="!#">Cards</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="!#">
                <i className="fas fa-id-card"></i>
              </a>
            </li>
            <li>
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
