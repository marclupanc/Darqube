import React from "react";

import "./header.styles.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <header className="App-header">
        <div className="menu">
          <nav className="container main-nav">
            <Link className="button btn-news" to="/">
              News
            </Link>
            <Link className="button btn-bookmarks" to="/Bookmarks">
              Bookmarks
            </Link>
          </nav>

          <div className="search-div">
            <div className="search-1">
              <button className="btn-search">
                <svg
                  className="search-icn"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.17203 9.176L12.472 12.3L9.17203 9.176ZM1.52503 5.375C1.5272 4.51232 1.78502 3.66963 2.26591 2.9534C2.74679 2.23717 3.42917 1.67954 4.22684 1.35095C5.0245 1.02237 5.90166 0.93757 6.74749 1.10728C7.59333 1.27698 8.36989 1.69358 8.97906 2.30443C9.58824 2.91528 10.0027 3.69298 10.1701 4.53928C10.3375 5.38558 10.2503 6.2625 9.91949 7.05926C9.58871 7.85602 9.02921 8.53686 8.31166 9.01578C7.59411 9.4947 6.75072 9.7502 5.88803 9.75C5.31428 9.74922 4.74631 9.63543 4.21654 9.41514C3.68677 9.19485 3.20558 8.87237 2.80044 8.46611C2.39529 8.05986 2.07414 7.57778 1.8553 7.04741C1.63647 6.51703 1.52424 5.94875 1.52503 5.375V5.375Z"
                    stroke="white"
                  />
                </svg>
              </button>
              <input
                className="input-field"
                type="text"
                name="search "
                placeholder="Search"
              ></input>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
