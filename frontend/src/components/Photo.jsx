import React from "react";
import { BasicPage } from "./GeneralStyles";
import styled from "styled-components";

const PhotoStyles = {
  ULText: styled.span`
  display: inline-block;
  border-bottom: 2px solid black;
  `,
}

const Photo = () => {
  return (

    <BasicPage.Text>
      <BasicPage.Title>
        How to take Tick Pics
      </BasicPage.Title>
      <p>Here are instructions for taking an unfed tick pic for the <BasicPage.InnieLink to='/preSurvey'><span>Tick Submission</span></BasicPage.InnieLink>:
      </p>

      <p>Submit a focused .JPG of the <PhotoStyles.ULText>top side</PhotoStyles.ULText> and <PhotoStyles.ULText>head</PhotoStyles.ULText> of the tick.</p>
      <p>
        Place the tick on a light colored background.</p><p>
        Place the tick next to a reference item like a ruler, coin, or nail.</p>

      <BasicPage.CardContainer>
        <BasicPage.Card>
          Coin Example
          <img src='' alt='example next to coin' />
          <img src='' alt='example next to coin' />
        </BasicPage.Card>
        <BasicPage.Card>
          Nail Example
          <img src='' alt='example next to nail' />
          <img src='' alt='example next to nail' />
        </BasicPage.Card>
        <BasicPage.Card>
          Ruler Example
          <img src='' alt='example next to ruler' />
          <img src='' alt='example next to ruler' />
        </BasicPage.Card>
      </BasicPage.CardContainer>

      <p>
        We understand everyone will have different devices ranging with quality of cameras. Here, we demonstrate on an older generation iPhone how to take photos of the ticks you may find.
      </p>
      <p>Before we deep dive into tick pics…
</p>
      <BasicPage.SectionSubtitle>Tick-ionary</BasicPage.SectionSubtitle>
      


    </BasicPage.Text>

  );
};

export default Photo;
