import React from "react";
import headerLogo from "./NJAESCVB_RED_GRAY.png";
import styled from 'styled-components'
import logo from '../../images/Logo.jpg'


const Styles = {
  Header: styled.div`
  display: flex;
  justify-content: center;
  
  font-family: 'Poppins', sans-serif;
  
  width: 100%;
  padding: 0.25em 0.75em;
  background: #fff;
  a:link,
  a:visited,
  a:hover {
      color: black;
      text-decoration: none;
      font-size: 1em;
  }
  a:hover {
      text-decoration: underline;
  }
  `,
  WidthContainer: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  @media screen and (min-width:${({theme}) => theme.mobile}) {
      max-width: 1920px;
  }
  `,
  RULogo: styled.img`
  min-width: 150px;
  width: 18rem;  
  max-width: 464px; 
  `,
  Logo: styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  @media screen and (max-width:${({theme}) => theme.mobile}) {
    justify-content: space-between;
   }
   margin-left: 1rem;
`,
Menu: styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
li {
    display: inline;
    margin-right: 2rem;
    font-size: 1rem;
}
@media screen and (max-width:${({theme}) => theme.mobile}) {
 display: none;
}
`,
OtherLogo: styled.img`
display: none;
@media screen and (max-width:${({theme}) => theme.mobile}) {
  display: flex;
  max-width: 10rem;
 }
`,
}

const RutgersHeader = () => (
    <Styles.Header>
      <Styles.WidthContainer className='width-cont'>
      <Styles.Logo>
        <a href="https://www.rutgers.edu">
          <Styles.RULogo src={headerLogo} alt="Rutgers Logo"  />
        </a>
        <Styles.OtherLogo src={logo} alt="Rutgers Logo"  />
        
        
      </Styles.Logo>
     
      <Styles.Menu>
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
      </Styles.Menu>
      </Styles.WidthContainer>
    </Styles.Header>
  );


export default RutgersHeader;
