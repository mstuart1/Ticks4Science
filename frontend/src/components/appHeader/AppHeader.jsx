import React from "react";
import { HeaderContainer, ScreenContainer, StyledMenu } from "./AppHeader.styled";
import {Link} from 'react-router-dom'

const AppHeader = () => {
  return (
    <ScreenContainer>
      <HeaderContainer>
        <Link to='/'><h1>Project Name Here</h1></Link>        
        <StyledMenu>
        <ul>
          <li>
           <Link to='/submit'> What is this tick</Link>
          </li>
          <li>
            
            <Link to='/submit'>Submit a photo</Link>
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
