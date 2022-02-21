import React from "react";
import FooterMenu from "./FooterMenu";
import {
  Disclaimer,
  FooterContainer,
  FooterMenuContainer,
  ScreenContainer,
  SingleMenu,
  StyledHeader,
  StyledLogo,
  StyledMenu,
} from "./RutgersFooter.styled";
import footerLogo from "./RutgersFooterLogo.svg";
import { footerMenus } from "./footerMenus";

const RutgersFooter = () => {
  let footerMenuElements = footerMenus.map((menu) => (
    <FooterMenu menu={menu} />
  ));

  return (
    <ScreenContainer>
      <FooterContainer>
        <StyledHeader>
          <StyledLogo>
            <a href="https://www.rutgers.edu">
              <img src={footerLogo} alt="Rutgers Logo" />
            </a>
          </StyledLogo>
          <StyledMenu>
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
          </StyledMenu>
        </StyledHeader>
        <FooterMenuContainer>{footerMenuElements}</FooterMenuContainer>
        <Disclaimer>
        <p>Rutgers is an equal access/equal opportunity institution. Individuals with disabilities are encouraged to direct suggestions, comments, or complaints concerning any accessibility issues with Rutgers websites to&nbsp;<a href="mailto:accessibility@rutgers.edu">accessibility@rutgers.edu</a>&nbsp;or complete the&nbsp;<a href="https://it.rutgers.edu/it-accessibility-initiative/barrierform/" target="_blank">Report Accessibility Barrier / Provide Feedback</a>&nbsp;form.</p>

        <p><a href="/copyright-information" target="_blank">Copyright ©{new Date().getFullYear()}</a>, Rutgers, The State University of New Jersey. All rights reserved.&nbsp;<a href="https://rutgers.ca1.qualtrics.com/jfe/form/SV_cMZTiDLz0sftzhP" target="_blank">Contact webmaster</a></p>
        </Disclaimer>
      </FooterContainer>
    </ScreenContainer>
  );
};

export default RutgersFooter;
