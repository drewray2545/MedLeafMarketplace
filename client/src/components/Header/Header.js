import React from "react";
import logo from "./../../assets/medleafmarketplace_logo.png";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
