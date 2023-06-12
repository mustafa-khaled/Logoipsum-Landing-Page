import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Links = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <ul className={`${menuActive ? styles.active : ""}`}>
        <li>
          <Link to="Logoipsum-Landing-Page">About Me</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
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
