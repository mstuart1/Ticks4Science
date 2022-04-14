import React from "react";
import { theme } from "../../theme";
import { BasicPage } from "../GeneralStyles";
import styled from "styled-components";

const PreSurvey = () => {
  return (
    
      <BasicPage.Text>
        <div>
        <p>All the information about the person and tick will be submitted here.</p>
        <p>This program is designed to identify New Jersey ticks and tick-borne illnesses. This is not a program to diagnose tick-borne diseases. If you believe you have a tick-borne disease, seek medical attention.
        </p><p>
        The pictures and tick submissions become the property of NJ Ticks for Science! and the Center for Vector Biology at Rutgers University and may be used in the website’s photo gallery or other forms of publication.
        </p><p>
        By clicking “I UNDERSTAND”, you agree to these terms and
        can continue to the form.
        </p>
        </div>
        {/* Survey123 version */}
      {/* <a href='https://arcg.is/1ODG9m0'><BasicPage.StyledButton color="black">I UNDERSTAND, continue to form</BasicPage.StyledButton></a> */}

      <BasicPage.LinkButton.LinkSpec to={'/survey'} >
        <BasicPage.HoverCard bgColor={theme.colors.main}>
          <Styles.CardSpecial >
            <span >I UNDERSTAND, continue to form</span>
          </Styles.CardSpecial>
        </BasicPage.HoverCard>
      </BasicPage.LinkButton.LinkSpec>
      
      <BasicPage.LinkButton.LinkSpec to={'/steps'}>
        <BasicPage.HoverCard>
          <BasicPage.LinkButton.CardSpecial>
            <span>Back to Steps</span>
          </BasicPage.LinkButton.CardSpecial>
        </BasicPage.HoverCard>
      </BasicPage.LinkButton.LinkSpec>
      </BasicPage.Text>
      
  );
};

export default PreSurvey;

const Styles = {
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
  }
