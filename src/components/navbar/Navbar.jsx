import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate(); // Using useNavigate properly

  const handleCategoryClick = (category) => {
    navigate("/categories", { state: { category } }); // navigate to the categories with the appropriate state
  };

  return (
    <ul className={styles.topUl}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <p>Categories</p>
        <ul className={styles.bottomUl}>
          <li onClick={() => handleCategoryClick("business")}>Business</li>
          <li onClick={() => handleCategoryClick("general")}>General</li>
          <li onClick={() => handleCategoryClick("health")}>Health</li>
          <li onClick={() => handleCategoryClick("science")}>Science</li>
          <li onClick={() => handleCategoryClick("sports")}>Sports</li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
