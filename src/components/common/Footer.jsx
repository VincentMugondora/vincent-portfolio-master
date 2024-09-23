import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { social } from "../data/dummydata";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        {social.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            aria-label={`Follow us on ${item.icon.type.displayName}`}
          >
            <i className="cursor-pointer">{item.icon}</i>
          </a>
        ))}
      </div>

      <div className="footer-links">
        <Link to="/" data-aos="zoom-in">
          Home
        </Link>
        <Link to="/about" data-aos="zoom-in">
          About Us
        </Link>
        <Link to="/services" data-aos="zoom-in">
          Services
        </Link>
        <Link to="/contact" data-aos="zoom-in">
          Contact
        </Link>
      </div>

      <p>All Rights Reserved 2024</p>
    </footer>
  );
};

export default Footer;
