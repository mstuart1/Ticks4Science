import React from "react";
import { BasicPage } from "./GeneralStyles";

// TODO get rid of the header on the survey (the Michelle grey header)

const PreSurvey = () => {
  return (
    
      <BasicPage.Text>
        <div>
        <p>Here is where all the information about the person and tick will be submitted. </p>
        <p>Please note that this is a program designed to identify NJ ticks and
        tick-borne illnesses.</p>
        <p>
        This is not a program to diagnose tick-borne
        illnesses.
        </p><p>
        If you believe to have a tick-borne illness, seek medical
        attention.
        </p><p>
        The pictures and tick submissions become the property of NJ
        Ticks for Science! and the Center for Vector Biology at Rutgers
        University and may be used in the website's photo gallery or other forms
        of publication. 
        </p><p>
        By clicking “I UNDERSTAND”, you agree to these terms and
        can continue to the form.
        </p>
        </div>
      <a href='https://arcg.is/1ODG9m0'><BasicPage.StyledButton color="black">I UNDERSTAND, continue to form</BasicPage.StyledButton></a>
      </BasicPage.Text>
      
  );
};

export default PreSurvey;
