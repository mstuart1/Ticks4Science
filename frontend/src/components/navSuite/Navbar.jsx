// from https://github.com/mstuart1/2021-react-nav-dropdowns.git
/*
example navItemArray: const navItemArray = [
  { id: 1, text: "Home", path: "/" },
  {
    id: 2,
    text: "Services",
    path: "/services",
    menuItems: [
      {
        title: "Marketing",
        path: "/marketing",
        cName: "dropdown-link",
      },
      {
        title: "Consulting",
        path: "/consulting",
        cName: "dropdown-link",
      },
      {
        title: "Design",
        path: "/design",
        cName: "dropdown-link",
      },
      {
        title: "Development",
        path: "/development",
        cName: "dropdown-link",
      },
    ],
  },
  { id: 3, text: "Products", path: "/products" },
  { id: 4, text: "Contact Us", path: "/contact-us" },
  // { id: 5, text: "Sign Up", path: "/sign-up" },
];
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaTimes, FaBars} from 'react-icons/fa'
import "./Navbar.css";
import Dropdown from './Dropdown'


function Navbar({ title='', navItemArray = [] }) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };



  const navItemElements = navItemArray.map((item) => {
    if (item.menuItems) {
      
      return (
        <li
        key={item.id}
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="nav-links" onClick={closeMobileMenu}>
            {item.text} <i className="fas fa-caret-down" />
          </div>
          {dropdown && <Dropdown menuItems={item.menuItems} />}
        </li>
      );
    } else {
      return (
        <li key={item.id} className="nav-item">
          <Link to={item.path} className="nav-links" onClick={closeMobileMenu}>
            {item.text}
          </Link>
        </li>
      );
    }
  });

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        {title}
        {/* <i className="fab fa-firstdraft" /> */}
      </Link>
      <div className="menu-icon" onClick={handleClick}>
       {click ? <FaTimes/> : <FaBars/>}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {navItemElements}
      </ul>
      
    </nav>
  );
}

export default Navbar;
