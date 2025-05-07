import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} onSkin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
