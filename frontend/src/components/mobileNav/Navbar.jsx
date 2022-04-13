import React, { useEffect, useState } from "react";
import styled from 'styled-components'
// import { FaHome, FaRegBookmark, FaRegUser } from 'react-icons/fa'
import navMenuItems from "./navMenuItems";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  const [windowDimension, setWindowDimension] = useState(null)

  useEffect(() => {
    setWindowDimension(window.innerWidth)
  }, [])

  // for production, debounce handleResize
  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  const isMobile = windowDimension <= 640;

  let mobileElements = navMenuItems.map(item => (
    <MobileNavbar.Item key={`${item.id}-mobile`} >  <Link to={item.path}>
      <MobileNavbar.Icon>
        {item.icon}
      </MobileNavbar.Icon><br />
      {item.title}
    </Link>
    </MobileNavbar.Item>
  ))

  let deskElements = navMenuItems.map(item => (
    <Navbar.Item key={`${item.id}-desk`}>
      <Link to={item.path}>
        {item.title}
      </Link>
    </Navbar.Item>
  ))

  let logoElement = (<Navbar.Logo>Ticks 4 Science!</Navbar.Logo>)

  return (

    <>

      {isMobile ? (
        
          <MobileNavbar.Wrapper>
            <MobileNavbar.Items>
              {mobileElements}
            </MobileNavbar.Items>
          </MobileNavbar.Wrapper>
        
      ) : (
        <Navbar.Wrapper>
          {logoElement}
          <Navbar.Items>
            {deskElements}
          </Navbar.Items>
        </Navbar.Wrapper>
      )}

    </>
  );

}

export default NavbarComp





const Navbar = {
  Wrapper: styled.nav`
  flex: 1;
  align-self: flex-start;
  padding: 1rem 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color:${({ theme }) => theme.colors.main};
  `,
  Logo: styled.h1`
    // border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled.li`
    padding: 1rem;
    cursor: pointer;
    border-radius: 3px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.main};
  filter: brightness(1.1);      
  };

    a {
        text-decoration: none;
        &:visited, &:hover, &:active {
            color: black;
        };
       
        &:focus {
            border-bottom: 2px solid ${({ theme }) => theme.colors.main};
        };
    }
  `,
}

const MobileNavbar = {
 
  Wrapper: styled(Navbar.Wrapper)`
  background-color: ${({ theme }) => theme.colors.main};
    position: fixed;
    width: 100vw;
    bottom: 0;
    justify-content: center;
    z-index: 1;
  `,
  Items: styled(Navbar.Items)`
    flex: 1;
    padding: 0 2rem;

    justify-content: space-around;
  `,
  Item: styled(Navbar.Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  a {
      text-align: center;
  }
  `,
  Icon: styled.span`

    `,
}

