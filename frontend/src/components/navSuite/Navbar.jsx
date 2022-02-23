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
import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";
import "./Navbar.css";
import {
  NavbarStyled,
  NavbarLogo,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./navStyles";
import Dropdown from "./Dropdown";

function Navbar({ title = "", navItemArray = [] }) {
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
        <NavItem
          key={item.id}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <NavLink onClick={closeMobileMenu}>
            {item.text}<FaCaretDown/>
          </NavLink>
          {dropdown && <Dropdown menuItems={item.menuItems} />}
        </NavItem>
      );
    } else {
      return (
        <NavItem key={item.id}>
          <NavLink>
          <Link to={item.path} onClick={closeMobileMenu}>
            {item.text}
          </Link>
          </NavLink>
        </NavItem>
      );
    }
  });

  return (
    <NavbarStyled>
      <NavbarLogo to="/" onClick={closeMobileMenu}>
        {title}
      </NavbarLogo>
      <MenuIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavMenu active={click}>{navItemElements}</NavMenu>
    </NavbarStyled>
  );
}

export default Navbar;
