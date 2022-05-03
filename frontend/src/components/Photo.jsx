import React from "react";
import { BasicPage } from "./GeneralStyles";
import styled from "styled-components";
import unfed1 from '../images/slide 10.jpg'
import unfed2 from '../images/slide 10(1).jpg'
import comp from '../images/slide 11(2).jpg'
import engorged1 from '../images/slide 11.jpg'
import engorged2 from '../images/slide 11(1).jpg'
import bad1 from '../images/slide 12.jpg'
import bad2 from '../images/slide 12(1).jpg'
import dime from '../images/slide 9.jpg'
import nail from '../images/slide 9(1).jpg'

const PhotoStyles = {
  ULText: styled.span`
  display: inline-block;
  border-bottom: 2px solid black;
  `,
  CenterCntr: styled.div`
    display: flex;
    justify-content: center;
    // @media screen and (min-width: 1366px) {
    // //  max-width: 1000px;
    // }
    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
      // width: 100vw;
      margin: 1rem;
     }
    `,
}

const Photo = () => {
  return (

    <BasicPage.Text>
      <BasicPage.Title>
        How to Take Tick Pics
      </BasicPage.Title>
      <p>
        <strong>Reminder</strong>: Keep the tick in a plastic container after submission and place in the refrigerator to preserve. Once you submit your ticks, you can use your personalized Tick ID to conveniently track the status of your submission <BasicPage.InnieLink to='/progress'><span>here</span></BasicPage.InnieLink>.
      </p>
      <BasicPage.SectionSubtitle>Submit a focused .JPG of the <PhotoStyles.ULText>top side</PhotoStyles.ULText> and <PhotoStyles.ULText>head</PhotoStyles.ULText> of the tick.
      </BasicPage.SectionSubtitle>
      <BasicPage.SectionSubtitle>
        Place the tick on a light colored background.
      </BasicPage.SectionSubtitle>
      <BasicPage.SectionSubtitle>
        Place the tick next to a reference item like a ruler, coin, or pin.
      </BasicPage.SectionSubtitle>
      <p>
        Below are professional photographs of ticks to show examples of size reference. We do not expect your photographs to have this level of detail.</p>
      <PhotoStyles.CenterCntr>


        <BasicPage.ImageCont>
          <figure>
            <img src={dime} alt='tick next to dime' />
            <figcaption>Use of a coin as size reference (photo credit Jim Occi).</figcaption>
          </figure>
        </BasicPage.ImageCont>
        <BasicPage.ImageCont>
          <figure>
            <img src={nail} alt='tick next to nail' />
            <figcaption>Use of a pin and ruler as size reference (photo credit Jim Occi).</figcaption>
          </figure>
        </BasicPage.ImageCont>
      </PhotoStyles.CenterCntr>
      <p>We understand everyone will have different devices ranging in camera quality. Here, we demonstrate on an older generation iPhone how to take photos of the ticks you may find.</p>

      <BasicPage.SectionSubtitle>
        Unfed Tick
      </BasicPage.SectionSubtitle>

      <p>
        Point the camera straight down and keep the camera in focus while getting as close to the tick as possible. Concentrate on capturing the markings on the scutum and the mouthparts on the top side of the tick.
        Below are examples
      </p>
      <PhotoStyles.CenterCntr>
        <BasicPage.ImageCont>
          <figure>
            <img src={unfed1} alt='unfed tick' style={{ maxHeight: '400px' }} />
            <figcaption>Photo credits Kayla Vuoso
            </figcaption>
          </figure>  </BasicPage.ImageCont>
        <BasicPage.ImageCont>
          <figure>
            <img src={unfed2} alt='unfed tick' style={{ maxHeight: '400px' }} />
            <figcaption>Photo credits Kayla Vuoso
            </figcaption>
          </figure>
        </BasicPage.ImageCont>
      </PhotoStyles.CenterCntr>

      <BasicPage.SectionSubtitle>
        Blood-fed Tick
      </BasicPage.SectionSubtitle>

      <p>
        Ticks come in many shapes and sizes! When they just had a blood meal or are feeding, they become swollen. Their size depends on how long they have fed.
      </p>

      <BasicPage.ImageCont>
        <figure>
          <img src={comp} alt='unfed vs fed' />
          <figcaption style={{ fontSize: '1.4rem' }}>Unfed vs. blood-fed lone star ticks. Photo credit Jim Occi</figcaption>
        </figure>
      </BasicPage.ImageCont>
      <p>
      If the tick looks like the larger ones above, use the instructions below for taking an engorged tick pic for the <BasicPage.InnieLink to='/preSurvey' ><span>tick submission</span></BasicPage.InnieLink>:
      </p>
      <BasicPage.SectionSubtitle>
      Submit a focused .JPG of the scutum and mouthparts of the tick.
      </BasicPage.SectionSubtitle>
      <BasicPage.SectionSubtitle>
        Place the tick on a light colored background.
      </BasicPage.SectionSubtitle>
      <PhotoStyles.CenterCntr>
        <BasicPage.ImageCont>
          <figure>
            <img src={engorged2} alt='engorged tick' style={{ maxHeight: '400px' }} />
            <figcaption>Photo credits Kayla Vuoso
            </figcaption>
          </figure>  </BasicPage.ImageCont>
        <BasicPage.ImageCont>
          <figure>
            <img src={engorged1} alt='engorged tick' style={{ maxHeight: '400px' }} />
            <figcaption>Photo credits Kayla Vuoso
            </figcaption>
          </figure>
        </BasicPage.ImageCont>
      </PhotoStyles.CenterCntr>

      <BasicPage.SectionSubtitle>
        Bad Photo Gallery
      </BasicPage.SectionSubtitle>
      <p>
      Below are examples of photos that should be avoided as submissions.
      </p>
      <PhotoStyles.CenterCntr>
        <BasicPage.ImageCont>
          <figure>
            <img src={bad2} alt='bad tick' style={{ maxHeight: '400px' }} />
            <figcaption style={{fontSize: '1.4rem'}} > This tick is not in a light-colored background so it’s hard to identify its features.Photo credits Kayla Vuoso
            </figcaption>
          </figure>  </BasicPage.ImageCont>
        <BasicPage.ImageCont>
          <figure>
            <img src={bad1} alt='bad tick' style={{ maxHeight: '400px' }} />
            <figcaption style={{fontSize: '1.4rem'}} > The subject is too far away to recognize clearly as a tick. Photo credits Kayla Vuoso
            </figcaption>
          </figure>
        </BasicPage.ImageCont>
      </PhotoStyles.CenterCntr>
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

export default Photo;
