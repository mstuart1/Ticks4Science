import React from "react";
import logo from "../../img/RUTGERS_REVWHITE.png";
import { StyledHeader, StyledLogo, StyledMenu } from "./RutgersHeader.styled";

const RutgersHeader = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <a href="https://www.rutgers.edu">
          <img src={logo} alt="Rutgers Logo"  />
        </a>
      </StyledLogo>
      <StyledMenu>
        <ul>
          <li>
            <a href="https://newbrunswick.rutgers.edu/">
              Rutgers–New Brunswick
            </a>
          </li>
          <li>
            <a href="https://my.rutgers.edu">myRutgers</a>
          </li>
          <li>
            <a href="https://search.rutgers.edu/web.html">Search Rutgers</a>
          </li>
        </ul>
      </StyledMenu>
    </StyledHeader>
  );
};

export default RutgersHeader;
