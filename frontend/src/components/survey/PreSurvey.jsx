import React from "react";
import { theme } from "../../theme";
import { BasicPage } from "../GeneralStyles";
import styles from './Survey.module.css';

const PreSurvey = () => {
  return (
    
      <BasicPage.Text>
        <div>
        
        <p>You are participating in a citizen science project to characterize the distribution of New Jersey ticks and tick-borne pathogens. If you are seeking a tick-borne disease diagnosis, consult a medical professional.
        </p><p>
The pictures and tick submissions become the property of NJ Ticks 4 Science! and the Center for Vector Biology at Rutgers University and may be used in the website's photo gallery or other forms of publication.
</p>

<p>
By clicking “I UNDERSTAND,” you agree to these terms. 
</p>
       
        </div>
      

      <BasicPage.LinkButton.LinkSpec to={'/survey'} >
        <BasicPage.HoverCard bgColor={theme.colors.main}>
          <div className={styles.specCard}>
            <span >I UNDERSTAND, continue to form</span>
          </div>
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
