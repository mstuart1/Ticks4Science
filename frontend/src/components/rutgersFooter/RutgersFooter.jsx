import React from "react";
import footerLogo from "./RU_H_2LINE_WHITE.png";
import styles from './ruFooter.module.css'

const RutgersFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.widthCont}>
        <section className={styles.header}>
          <FooterLogo />
          <FooterNav />
        </section>
        <FooterDisclaimer />
      </div>
    </footer>

  );
};

export default RutgersFooter;

const FooterNav = () => (

  <nav className={styles.footerNav}>
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
  </nav>
)


const FooterLogo = () => (

  <div className={styles.logoCont}>
    <a href="https://www.rutgers.edu">
      {/* 150 X 45 | 0.3  - old logo*/}
      {/* 2447 X 626 | 0.26  - new logo*/}
      <img src={footerLogo} width={231} height={60} alt="Rutgers Logo" />
    </a>
  </div>
)


const FooterDisclaimer = () => (
  <section className={styles.disclaimer}>
    <p>Rutgers is an equal access/equal opportunity institution. Individuals with disabilities are encouraged to direct suggestions, comments, or complaints concerning any accessibility issues with Rutgers websites to&nbsp;<a href="mailto:accessibility@rutgers.edu">accessibility@rutgers.edu</a>&nbsp;or complete the&nbsp;<a href="https://it.rutgers.edu/it-accessibility-initiative/barrierform/" target="_blank" rel="noreferrer">Report Accessibility Barrier / Provide Feedback</a>&nbsp;form.</p>

    <p>
      {/* <a href="/copyright-information" target="_blank" rel="noreferrer"> */}
      Copyright ©{new Date().getFullYear()}
      {/* </a> */}
      , Rutgers, The State University of New Jersey. All rights reserved.&nbsp;<br /><a href="mailto:cupr-server-alert@ejb.rutgers.edu">Contact webmaster</a></p>
  </section>
)
