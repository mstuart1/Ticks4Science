import styled from "styled-components";
import React from "react";
import footerLogo from "./RutgersFooterLogo.svg";


const RutgersFooter = () => {

  return (
    
      <Styles.FooterContainer>
        <Styles.WidthContainer>
          <Styles.Header>
          <Styles.Logo>
            <a href="https://www.rutgers.edu">
              <img src={footerLogo} alt="Rutgers Logo" />
            </a>
          </Styles.Logo>
          <Styles.Menu>
            <ul>
              <li>
                <a href="https://newbrunswick.rutgers.edu/">New Brunswick</a>
              </li>
              <li>
                <a href="https://academichealth.rutgers.edu/">RBHS/Health</a>
              </li>
              <li>
                <a href="https://newark.rutgers.edu/">Newark</a>
              </li>
              <li>
                <a href="https://www.camden.rutgers.edu/">Camden</a>
              </li>
            </ul>
          </Styles.Menu>
        </Styles.Header>
        
        <Styles.Disclaimer>
        <p>Rutgers is an equal access/equal opportunity institution. Individuals with disabilities are encouraged to direct suggestions, comments, or complaints concerning any accessibility issues with Rutgers websites to&nbsp;<a href="mailto:accessibility@rutgers.edu">accessibility@rutgers.edu</a>&nbsp;or complete the&nbsp;<a href="https://it.rutgers.edu/it-accessibility-initiative/barrierform/" target="_blank" rel="noreferrer">Report Accessibility Barrier / Provide Feedback</a>&nbsp;form.</p>

        <p><a href="/copyright-information" target="_blank" rel="noreferrer">Copyright ©{new Date().getFullYear()}</a>, Rutgers, The State University of New Jersey. All rights reserved.&nbsp;<br/><a href="https://rutgers.ca1.qualtrics.com/jfe/form/SV_cMZTiDLz0sftzhP" target="_blank" rel="noreferrer">Contact webmaster</a></p>
        </Styles.Disclaimer>
        </Styles.WidthContainer>
      </Styles.FooterContainer>
    
  );
};

export default RutgersFooter;


const Styles = {
  FooterContainer: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #000;
  height: 15rem; // room for mobile nav bar
  a:link,
  a:visited,
  a:hover {
    color: white;
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
Header: styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 3em 0.75em 1em 0.75em;
  
  @media screen and (max-width:${({theme}) => theme.mobile}) {
    display: none;
}
`,
Logo: styled.div`
  img {
    width: 13em;
  }
  @media screen and (max-width:${({theme}) => theme.mobile}) {
    display: none;
}
`,
Menu: styled.div`
  li {
    display: inline;
    margin-right: 2em;
    font-size: 0.75em;
    padding-right: 2em;
    border-right: 0.25px solid grey;
  }
  @media screen and (max-width:${({theme}) => theme.mobile}) {
    display: none;
}
`,
FooterMenuContainer: styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 0.25px solid grey;
  justify-content: space-evenly;
`,
SingleMenu: styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  color: white;
  font-size: 0.75em;
  font-weight: 200;
  line-height: 4em;
//   height: 400px;
//   flex-wrap: wrap;
`, 
Disclaimer: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.75em;
p {
    text-align: center;
}
`
}





