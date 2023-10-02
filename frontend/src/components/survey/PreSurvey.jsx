import React from "react";
import { theme } from "../../theme";
import { BasicPage } from "../GeneralStyles";
import styled from "styled-components";

const PreSurvey = () => {
  return (
    
      <BasicPage.Text>
        <div>
        
        <p>You are participating in a citizen science project to characterize the distribution of New Jersey ticks and tick-borne pathogens. If you are seeking a tick-borne disease diagnosis, consult a medical professional.
        </p><p>
The pictures and tick submissions become the property of NJ Ticks 4 Science! and the Center for Vector Biology at Rutgers University and may be used in the website's photo gallery or other forms of publication.
</p>
<p>
***Please submit one form for each tick you wish to receive pathogen-testing results for! We are working to create a new form that will allow multiple ticks to be submitted at once. Currently, however, if you fill out one form and send in multiple ticks, we will only be able to provide you with the pathogen-testing results for one of the ticks. One form per tick!***
</p><p>
By clicking “I UNDERSTAND,” you agree to these terms. 
</p>
       
        </div>
      

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
