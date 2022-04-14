import React from "react";
import headerLogo from "./RutgersHeaderLogo.svg";
import styled from 'styled-components'

const RutgersHeader = () => (
    <Styles.Header>
      <Styles.WidthContainer>
      <Styles.Logo>
        <a href="https://www.rutgers.edu">
          <img src={headerLogo} alt="Rutgers Logo"  />
        </a>
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
      max-width: 1366px;
  }
  `,
  Logo: styled.div`
img {
    width: 17em;  
    max-width: 464px; 
}
`,
Menu: styled.div`
li {
    display: inline;
    margin-right: 2em;
    font-size: 0.75em;
}
@media screen and (max-width:${({theme}) => theme.mobile}) {
 display: none;
}
`
}