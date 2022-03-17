import React from "react";
import { ScreenContainer, PageContainer, TextDiv } from "./GeneralStyles";

const PreSurvey = () => {
  return (
    <ScreenContainer>
      <PageContainer>
      <TextDiv>
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
      <a href='https://arcg.is/1ODG9m0'><button>I UNDERSTAND, continue to form</button></a>
      </TextDiv>
      </PageContainer>
    </ScreenContainer>
  );
};

export default PreSurvey;
