import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrap">
        <p>© 2023 MedLeafMarketplace</p>
        <div className="footer-social">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
