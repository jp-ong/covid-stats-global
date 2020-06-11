import React from "react";
import { Link } from "react-router-dom";
import Clock from "./Clock";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-brand">
        <Link to="/">
          <span>COVID-19</span>Global
        </Link>
      </div>
      <div className="nav-info">
        <div className="nav-info-author">
          By:
          <a
            href="https://github.com/jp-ong"
            target="_blank"
            rel="noopener noreferrer"
          >
            John Paul Ong
          </a>
        </div>
        <div className="nav-info-credit">John Hopkins COVID-19 Data</div>
        <div className="nav-info-clock">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
