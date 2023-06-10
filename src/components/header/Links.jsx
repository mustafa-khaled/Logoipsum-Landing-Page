import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Links = () => {
  const [activeLink, setActiveLink] = useState("aboutMe");
  const [menuActive, setMenuActive] = useState(false);

  const handleLinkClick = (linkText) => {
    setActiveLink(linkText);
  };

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <ul className={`${menuActive ? styles.active : ""}`}>
        <li>
          <Link
            to="/"
            className={activeLink === "aboutMe" ? styles.active : ""}
            onClick={() => handleLinkClick("aboutMe")}>
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={activeLink === "Services" ? styles.active : ""}
            onClick={() => handleLinkClick("Services")}>
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={activeLink === "Portfolio" ? styles.active : ""}
            onClick={() => handleLinkClick("Portfolio")}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/testimonials"
            className={activeLink === "Testimonials" ? styles.active : ""}
            onClick={() => handleLinkClick("Testimonials")}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            className={activeLink === "Shop" ? styles.active : ""}
            onClick={() => handleLinkClick("Shop")}>
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeLink === "Contact" ? styles.active : ""}
            onClick={() => handleLinkClick("Contact")}>
            Contact
          </Link>
        </li>
      </ul>

      <div
        className={`${styles.menu_icon} ${menuActive ? styles.active : ""}`}
        onClick={handleMenuClick}>
        <i
          className={`fas ${
            menuActive ? "fa-times" : "fa-bars"
          } open-list`}></i>
      </div>

      {/* Overlay Div */}
      <div
        className={`${styles.overlay} ${menuActive ? styles.active : ""}`}
        onClick={handleMenuClick}></div>
    </>
  );
};

export default Links;
