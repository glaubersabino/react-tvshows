import React from "react";
import logo from "../../logo.png";
import "./styles.css";

const Header = () => (
  <header className="main-header">
    <img src={logo} className="main-logo" alt="React TVShows" />
    <ul className="main-menu">
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">TVShows</a>
      </li>
    </ul>
  </header>
);

export default Header;
