import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { IoIosSearch } from "react-icons/io";

const NavBar = () => {
  const [focused, setFocused] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavItem}>
        <a href="#">HOME</a>
      </div>
      <div className={styles.NavItem}>
        <a href="#" onClick={() => scrollToSection("menu")}>MENU</a>
      </div>
      <div className={styles.NavItem}>
        <a href="#" onClick={() => scrollToSection("info")}>OUR STORY</a>
      </div>
      <div className={styles.NavItem}>
        <a href="#" onClick={() => scrollToSection("contact")}>CONTACT US</a>
      </div>

      <div className={`${styles.SearchBar} ${focused ? `${styles.focus}` : ''}`}>
        <input
          type="text"
          placeholder="Search.."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        ></input>
        <div>
          <IoIosSearch />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
