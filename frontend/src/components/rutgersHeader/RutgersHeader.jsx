import React from "react";
import headerLogo from "./RutgersHeaderLogo.svg";
import { StyledHeader, StyledLogo, StyledMenu, WidthContainer } from "./RutgersHeader.styled";

const RutgersHeader = () => {
  return (
    <StyledHeader>
      <WidthContainer>
      <StyledLogo>
        <a href="https://www.rutgers.edu">
          <img src={headerLogo} alt="Rutgers Logo"  />
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
      </WidthContainer>
    </StyledHeader>
  );
};

export default RutgersHeader;
