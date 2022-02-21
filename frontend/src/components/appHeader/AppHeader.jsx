import React from "react";
import { HeaderContainer, ScreenContainer, StyledMenu } from "./AppHeader.styled";
import {Link} from 'react-router-dom'

const AppHeader = () => {
  return (
    <ScreenContainer>
      <HeaderContainer>
        <Link><h1>Project Name Here</h1></Link>        
        <StyledMenu>
        <ul>
          <li>
           What is this tick (dropdown)
          </li>
          <li>
            Submit a photo
          </li>
          <li>
            <Link to='/'>About this project</Link>
          </li>
        </ul>
      </StyledMenu>
      </HeaderContainer>
    </ScreenContainer>
  );
};

export default AppHeader;
