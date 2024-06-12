import React from "react";
import { theme } from "../../theme";
import { BasicPage } from "../GeneralStyles";
import styles from './Survey.module.css';
import donateLink from "../../data/donateLink";

const PreSurvey = () => {
  return (

    <BasicPage.Text>
      <div>

        <p>You are participating in a citizen science project to characterize the distribution of New Jersey ticks that blood feed on us humans and our pets. If you are seeking a tick-borne disease diagnosis, please consult a medical professional.
        </p><p>
          Mailed-in ticks will be first identified to species and then tested for bacteria (including Lyme) and parasites known to be transmitted by that tick species in NJ. Alpha-gal is an allergic reaction associated with a sugar (Galactose-α-1,3-galactose) found in the saliva of lone star ticks, <i>Amblyomma americanum</i>, as well in red meat and meat products. All lone star ticks have that sugar and there is no point in testing them for that. It is unclear why some people develop red meat allergy, and some do not.  
        </p>
        <p>
          Our goal is to continue to optimize our program and keep <b>tick testing free</b>. Please consider making a <a className={styles.donateLink} href={donateLink} target="_blank" rel='noreferrer'>donation</a>. Donations will be solely used to support the NJTicks4Science! Program.
        </p>
<p>
          The pictures and tick submissions become the property of NJ Ticks 4 Science! and the Center for Vector Biology at Rutgers University and may be used in the website's photo gallery or other forms of publication.
</p>

        <p>
          By clicking “I UNDERSTAND,” you agree to these terms.
        </p>
        <p>
          Thank you for your participation!
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
