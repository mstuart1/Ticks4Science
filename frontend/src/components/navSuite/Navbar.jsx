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
  const [dropdownVis, setDropdownVis] = useState(false);
  const [mobileMenuVis, setMobileMenuVis] = useState(false)

  const handleClick = () => setMobileMenuVis(!mobileMenuVis);
  const closeMobileMenu = () => setMobileMenuVis(false);

  const onMouseEnter = () => {
    // if (window.innerWidth < mobileWidth) {
      // setDropdownVis(true);
    // } else {
      setDropdownVis(true);
    // }
  };

  const onMouseLeave = () => {
    // if (window.innerWidth < mobileWidth) {
      // setDropdownVis(false);
    // } else {
      setDropdownVis(false);
    // }
  };

  const navItemElements = navItemArray.map((item, i) => {
    if (item.menuItems) {
      return (
        <NavItem
          key={`${item.id}-navDrop`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
        
          <NavLink onClick={() => setDropdownVis(!dropdownVis)}>
            {item.text}{!mobileMenuVis ? <FaCaretDown/> : null}
          </NavLink>
          
          {dropdownVis && <Dropdown menuItems={item.menuItems} handleClick={closeMobileMenu} menuState={mobileMenuVis} />}
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
