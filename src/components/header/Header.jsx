import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import logo from "../../assets/Logo.png";
import Links from "./Links";

const Header = () => {
  //  Add fixed position to the header after 500px
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isHeaderFixed ? styles.fixed : ""}`}>
      <div className={`${styles.header_container} container`}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <Links />
      </div>
    </header>
  );
};

export default Header;
