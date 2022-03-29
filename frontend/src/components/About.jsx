import React from "react";
import { BasicPage } from "./GeneralStyles";
import { Link } from 'react-router-dom'
import TickReportLink from "./TickReportLink";

const About = () => {
  return (
    
      
        <BasicPage.Text>
          <h1 style={{textAlign: "center"}}>Welcome to NJ Ticks 4 Science!</h1>
          <p>A citizen science project
          where we are enlisting the people in New Jersey to submit ticks they
          come across in their everyday lives! The goal is to understand the
          statewide risk of tick-borne pathogens to NJ communities. With your
          help, we can learn about the growing tick species and tick-borne
          pathogens in NJ and their specific locations. To begin a tick
          submission, utilize the tabs to the right of the screen. We encourage
          you to follow the steps on how to send a tick pic to begin the tick
          submission process!</p>
          
            <h2 style={{textAlign: "center"}}>View a report of the 11 ticks found throughout New Jersey.</h2>
          <p>
            <TickReportLink/><br/>
            Since this report, two more ticks have been discovered in NJ, which we review within <Link to='/ticks'>Ticks of NJ</Link>
          </p>
          <div>
            <a href='https://vectorbio.rutgers.edu/contact.php'>Visit Our Website</a>
          </div>
          
          <a href='mailto:cvb@rutgers.edu' target='_blank'><BasicPage.StyledButton color='black'>Contact Us</BasicPage.StyledButton></a>
        </BasicPage.Text>
    
    
  );
};

export default About;
