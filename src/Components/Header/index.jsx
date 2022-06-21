import React from "react";

import "./styles.css";
import { NavLink } from "react-router-dom";
import Search from "../Search";

const Header = () => {
  return (
    <div className="header-container">
      <header className="App-header">
        <div className="menu">
          <nav className="container main-nav">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "link")}
              to="/"
            >
              News
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "link")}
              to="/Bookmarks"
            >
              Bookmarks
            </NavLink>
          </nav>

          <Search />
        </div>
      </header>
    </div>
  );
};

export default Header;
