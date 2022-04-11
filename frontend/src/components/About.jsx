import React from "react";
import { BasicPage } from "./GeneralStyles";
import TickReportLink from "./ticks/TickReportLink";
import tickCircle from '../images/Image017.jpg'




const About = () => {
  return (


    <BasicPage.Text>
      <BasicPage.Title>Welcome to NJ Ticks 4 Science!</BasicPage.Title>
      <p>
        Welcome to NJ Ticks for Science! A citizen science project where we are enlisting the people in New Jersey to submit ticks they come across in their everyday lives!
      </p>
      <p>
      The goal is to understand the statewide risk of tick-borne pathogens to NJ communities. With your help, we can learn about the growing tick species and tick-borne pathogens in NJ and their specific locations.

      </p><p>
      To begin a tick submission, we encourage you to follow the <BasicPage.InnieLink to='/steps'><span>Steps to Participate</span></BasicPage.InnieLink> in <BasicPage.InnieLink to='/photo'>
      <span>How to Send a Tick Pic</span>
      </BasicPage.InnieLink> to begin the <BasicPage.InnieLink to='/preSurvey'>
         <span>Tick Submission</span>
       </BasicPage.InnieLink> process!
      </p>

      <BasicPage.SectionTitle>Before sending us your ticks, view a report of the 11 ticks found throughout New Jersey.</BasicPage.SectionTitle>
      
        <p><TickReportLink /></p>
        <p>
        Since this report, two more ticks have been discovered in NJ, which we review in <BasicPage.InnieLink  to='/ticks'><span>Ticks of NJ</span></BasicPage.InnieLink>
      </p>
      <BasicPage.ImageCont>
        <figure>
          <img src={tickCircle} alt='ticks' />
          <figcaption>Image provided by Andrea Egizi, PhD
              </figcaption>
        </figure>
      </BasicPage.ImageCont>
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
