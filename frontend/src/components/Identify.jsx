import React from "react";
import { PageContainer, ScreenContainer, TextDiv } from "./GeneralStyles";

const Identify = () => {
  return (
    <ScreenContainer>
      <PageContainer>
        <TextDiv>
          <h1>How to identify a tick</h1>
          <p>
            As a citizen scientist, we encourage you to verify your specimen
            before submission. Below are reference photos of sex/stage of some
            NJ ticks!
          </p>
          <h2>Tick Larvae</h2>
          {/* //TODO replace with real info */}
          <p>Lorem ipsum waiting for text and photos from group....</p>
          <h2>Tick Nymphs</h2>
          <p>Lorem ipsum waiting for text and photos from group....</p>
          <h2>Tick Adults</h2>
          <p>Lorem ipsum waiting for text and photos from group....</p>
          <h2>Sex Shape Difference</h2>
          <p>Lorem ipsum waiting for text and photos from group....</p>
          <h2>Engorged Ticks</h2>
          <p>Lorem ipsum waiting for text and photos from group....</p>
          <h2>There are 4 species that will constitute 99% of the submissions in NJ.</h2>
          <p>
         
          <ul>
            <li>Asian longhorned tick, Haemaphysalis longicornis</li>
            <li>blacklegged tick, Ixodes scapularis</li>
            <li>lone star tick, Amblyomma americanum</li>
            <li>American dog tick, Dermacentor variabilis</li>
          </ul>
          </p>
        </TextDiv>
      </PageContainer>
    </ScreenContainer>
  );
};

export default Identify;
