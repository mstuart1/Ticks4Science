import React from "react";
import { PageContainer, ScreenContainer } from "../about/About.styled";

const SubmitTick = () => {
  return (
    <ScreenContainer>
      <PageContainer>
        <div>
          <h1>Submit a Tick</h1>
          <ul>
            <li>
              User name and email address will be collected when they are
              submitting
            </li>
            <li>
              Users will have the ability to submit photos - Users will be
              provided with tips for taking good photos of ticks and will be
              able to upload up to 3 photos of the tick specimen through the
              form
            </li>
            <li>
              Users will be provided with a mailing address to send the tick
              specimen for identification. The mailing address will contain a
              unique submission ID that will allow researchers to link mailed-in
              samples with electronic submissions.
            </li>

            <li>
              Interactive map to identify the general area where the tick was
              collected. Map will contain search feature to help users narrow
              down the map area and draw feature to indicate the area where the
              tick was found.
            </li>
          </ul>
        </div>
      </PageContainer>
    </ScreenContainer>
  );
};

export default SubmitTick;
