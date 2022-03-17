import React from "react";
import { PageContainer, ScreenContainer, TextDiv } from "./GeneralStyles";

const About = () => {
  return (
    <ScreenContainer>
      <PageContainer>
        <TextDiv>
          <h1>Welcome to NJ Ticks for Science!</h1>A citizen science project
          where we are enlisting the people in New Jersey to submit ticks they
          come across in their everyday lives! The goal is to understand the
          statewide risk of tick-borne pathogens to NJ communities. With your
          help, we can learn about the growing tick species and tick-borne
          pathogens in NJ and their specific locations. To begin a tick
          submission, utilize the tabs to the right of the screen. We encourage
          you to follow the steps on how to send a tick pic to begin the tick
          submission process!
        </TextDiv>
      </PageContainer>
    </ScreenContainer>
  );
};

export default About;
