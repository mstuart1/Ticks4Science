// from https://github.com/mstuart1/2021-react-nav-dropdowns.git


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";
// import "./Navbar.css";
import {
  NavbarStyled,
  NavbarLogo,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLink,
  ContentContainer,
} from "./navStyles";
import Dropdown from "./Dropdown";
// import {theme} from '../../theme'

// let mobileWidth = theme.mobile

const Navbar = ({ title = "", navItemArray = [] }) =>  {
  const [dropdownVis, setDropdownVis] = useState(0);
  const [mobileMenuVis, setMobileMenuVis] = useState(false)

  const handleClick = () => setMobileMenuVis(!mobileMenuVis);
  const closeMobileMenu = () => setMobileMenuVis(false);

  const onMouseEnter = (id) => {
    // if (window.innerWidth < mobileWidth) {
      // setDropdownVis(true);
    // } else {
      setDropdownVis(id);
    // }
  };

  const onMouseLeave = () => {
    // if (window.innerWidth < mobileWidth) {
      // setDropdownVis(false);
    // } else {
      setDropdownVis(0);
    // }
  };

  const navItemElements = navItemArray.map((item, i) => {
    if (item.menuItems) {
      return (
        <NavItem
          key={`${item.id}-navDrop`}
          onMouseEnter={() => onMouseEnter(item.id)}
          onMouseLeave={() => onMouseLeave(item.id)}
        >
        
          <NavLink onClick={() => setDropdownVis(!dropdownVis)}>
            {item.text}{!mobileMenuVis ? <FaCaretDown/> : null}
          </NavLink>
          
          {dropdownVis === item.id && <Dropdown menuItems={item.menuItems} handleClick={closeMobileMenu} menuState={mobileMenuVis} />}
        </NavItem>
      );
    } else {
      return (
        <NavItem key={`${item.id}-navItem-${i}`}>
          <NavLink>
            {item.internal 
            ? (<Link to={item.path} onClick={closeMobileMenu}>{item.text}
          </Link>)
          : (<a href={item.path}>{item.text}</a>)
          }
          </NavLink>
        </NavItem>
      );
    }
  });

  return (
    <NavbarStyled>
      <ContentContainer>
      <NavbarLogo to="/" onClick={closeMobileMenu}>
        {title}
      </NavbarLogo>
      <MenuIcon onClick={handleClick}>
        {mobileMenuVis ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavMenu active={mobileMenuVis}>{navItemElements}</NavMenu>
      </ContentContainer>
    </NavbarStyled>
  );
}

export default Navbar;
