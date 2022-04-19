import React from "react";
import { BasicPage } from "./GeneralStyles";
import TickReportLink from "./ticks/TickReportLink";
import tickCircle from '../images/Image017.jpg'
import styled from "styled-components";

const About = () => {
  return (
    <BasicPage.Text >
      <BasicPage.Title>Welcome to NJ Ticks 4 Science!</BasicPage.Title>
      <p>
        Welcome to NJ Ticks for Science! A citizen science project where we are enlisting the people in New Jersey to submit ticks they come across in their everyday lives!
      </p>
      <p>
        The goal is to understand the statewide risk of tick-borne pathogens to NJ communities. With your help, we can learn about the growing tick species and tick-borne pathogens in NJ and their specific locations.

      </p>
      <Styles.CenterCntr>
        <div>
        <div style={{margin: '1rem 0'}}>
      <BasicPage.SectionTitle>Get Started</BasicPage.SectionTitle>

      <BasicPage.LinkButton.LinkSpec to={'/steps'}>
        <BasicPage.HoverCard>
          <BasicPage.LinkButton.CardSpecial>
            <span style={{ fontWeight: "bold", textAlign: "center" }}> Follow the steps to participate</span>

          </BasicPage.LinkButton.CardSpecial>

        </BasicPage.HoverCard>
      </BasicPage.LinkButton.LinkSpec>


      <BasicPage.LinkButton.LinkSpec to={'/photo'}>
        <BasicPage.HoverCard>
          <BasicPage.LinkButton.CardSpecial>
            <span style={{ fontWeight: "bold", textAlign: "center" }}> How to take a tick pic</span>
          </BasicPage.LinkButton.CardSpecial>

        </BasicPage.HoverCard>
      </BasicPage.LinkButton.LinkSpec>

      <BasicPage.LinkButton.LinkSpec to={'/preSurvey'}>
        <BasicPage.HoverCard>
          <BasicPage.LinkButton.CardSpecial>
            <span style={{ fontWeight: "bold", textAlign: "center" }}> Begin a submission</span>
          </BasicPage.LinkButton.CardSpecial>

        </BasicPage.HoverCard>
      </BasicPage.LinkButton.LinkSpec>
      {/* <p> 
       To begin a tick submission, we encourage you to follow the <BasicPage.InnieLink to='/steps'><span>Steps to Participate</span></BasicPage.InnieLink> in <BasicPage.InnieLink to='/photo'>
      <span>How to Send a Tick Pic</span>
      </BasicPage.InnieLink> to begin the <BasicPage.InnieLink to='/preSurvey'>
         <span>Tick Submission</span>
       </BasicPage.InnieLink> process!
      </p> */}
      </div>
      <div style={{margin: '5rem 0'}}>
       <BasicPage.SectionTitle>If you have already submitted ticks </BasicPage.SectionTitle>
      <BasicPage.LinkButton.LinkSpec to={'/progress'}>
        <BasicPage.HoverCard>
          <BasicPage.LinkButton.CardSpecial>
            <span style={{ fontWeight: "bold", textAlign: "center" }}> Track your progress</span>
          </BasicPage.LinkButton.CardSpecial>

        </BasicPage.HoverCard>
      </BasicPage.LinkButton.LinkSpec>
      </div>
      {/* <div style={{margin: '1rem 0'}}>
      <BasicPage.SectionTitle>Before sending us your ticks</BasicPage.SectionTitle>
      <Styles.RptLnkBtn.LinkSpec href='https://vectorbio.rutgers.edu/outreach/Occi2019TickListNJ.pdf' target='_blank' rel='noreferrer'>
        <BasicPage.HoverCard>
          <Styles.RptLnkBtn.CardSpecial>
            <span style={{ fontWeight: "bold", textAlign: "center" }}> View a report of the 11 ticks found throughout New Jersey</span>
          </Styles.RptLnkBtn.CardSpecial>

        </BasicPage.HoverCard>
      </Styles.RptLnkBtn.LinkSpec>

      
      <p>
        Since this report, two more ticks have been discovered in NJ, which we review in <BasicPage.InnieLink to='/ticks'><span>Ticks of NJ</span></BasicPage.InnieLink>
      </p>
      </div> */}
      </div>
      <BasicPage.ImageCont>
        <figure>
          <img src={tickCircle} alt='ticks' style={{maxWidth: '350px'}} />
          <figcaption>Image provided by Andrea Egizi, PhD
          </figcaption>
        </figure>
      </BasicPage.ImageCont>
      </Styles.CenterCntr> 
      <div>
        <BasicPage.CenteredText>
          <BasicPage.OutieLink href='https://vectorbio.rutgers.edu/contact.php' target='_blank' rel='noreferrer'><span>Visit the Center for Vector Biology Website</span></BasicPage.OutieLink>
        </BasicPage.CenteredText>
      </div>

      <a href='mailto:cvb@rutgers.edu' target='_blank' rel='noreferrer'><BasicPage.StyledButton color='black'>Contact Us</BasicPage.StyledButton></a>
    </BasicPage.Text>


  );
};

export default About;

const Styles = {
  CenterCntr: styled.div`
  display: flex;
  @media screen and (min-width: 1366px) {
   width: 1000px;
  }
  @media screen and (max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    width: 100vw;
    margin: 1rem;
   }
  `,
  RptLnkBtn: {
    LinkSpec: styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.ruTeal};
    
    `,
    CardSpecial: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 2rem;
    span {
      padding: 1.6rem;
    }
  `,
  },
}
