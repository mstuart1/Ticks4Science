import React from "react";
import { BoxInset, PageContainer, ScreenContainer, TextDiv } from "./GeneralStyles";

const Photo = () => {
  return (
    <ScreenContainer>
      <PageContainer>
        <TextDiv>
          <div>
            <h1>How to take Tick Pics</h1>
            <p>Submit a focused .JPG of the back side and head of the tick.</p><p> 
Place the tick on a light colored background.</p><p>
Place the tick next to a reference item like a ruler or coin.  </p><p>

Picture #1: Point the camera straight down and keep the camera in focus while getting as close to the tick as possible.</p></div>
    {/* // TODO replace this with real photo */}
Example #1
<div>
  <p>
Picture #2: Point the camera at the head, keeping the camera in focus while getting as close to the tick as possible. </p>
</div>


    {/* // TODO replace this with real photo */}
Example #2

<BoxInset >
<h2>
Reminder</h2>
<p>
Keep tick in a crush proof container for several days. We will be contacting you via email for the tick submission or additional photographs of the specimen.
</p>

</BoxInset>
        </TextDiv>
      </PageContainer>
    </ScreenContainer>
  );
};

export default Photo;
