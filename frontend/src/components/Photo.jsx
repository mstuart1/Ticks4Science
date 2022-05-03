import React from "react";
import { BasicPage } from "./GeneralStyles";
import styled from "styled-components";
// import tickMouth from '../images/Slide9.jpg'
// import festoons from '../images/slide 10 diagram.png'
import unfed1 from '../images/slide 10.jpg'
import unfed2 from '../images/slide 10(1).jpg'
import comp from '../images/slide 11(2).jpg'
// import unfed3 from '../images/IMG-7104.jpg'
// import unfed4 from '../images/IMG-7105.jpg'
// import unfed5 from '../images/IMG-7106.jpg'
// import unfed6 from '../images/Slide 13.jpg'
import engorged1 from '../images/slide 11.jpg'
import engorged2 from '../images/slide 11(1).jpg'
import bad1 from '../images/slide 12.jpg'
import bad2 from '../images/slide 12(1).jpg'
// import bad3 from '../images/IMG-7112.jpg'
import { theme } from "../theme";
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
            <img src={bad2} alt='bad tick'  />
            <figcaption style={{fontSize: '1.4rem'}} > This tick is not in a light-colored background so it’s hard to identify its features.Photo credits Kayla Vuoso
            </figcaption>
          </figure>  </BasicPage.ImageCont>
        <BasicPage.ImageCont>
          <figure>
            <img src={bad1} alt='bad tick'  />
            <figcaption style={{fontSize: '1.4rem'}} > The subject is too far away to recognize clearly as a tick. Photo credits Kayla Vuoso
            </figcaption>
          </figure>
        </BasicPage.ImageCont>
      </PhotoStyles.CenterCntr>


      {/* // TODO waiting for photos to make this section active */}
      {/* <BasicPage.CardContainer>
        <BasicPage.HoverCard>
          Coin Example
          <img src='' alt='example next to coin' />
          <img src='' alt='example next to coin' />
        </BasicPage.HoverCard>
        <BasicPage.HoverCard>
          Nail Example
          <img src='' alt='example next to nail' />
          <img src='' alt='example next to nail' />
        </BasicPage.HoverCard>
        <BasicPage.HoverCard>
          Ruler Example
          <img src='' alt='example next to ruler' />
          <img src='' alt='example next to ruler' />
        </BasicPage.HoverCard>
      </BasicPage.CardContainer> */}


      {/* <p>Before we deep dive into tick pics… */}
      {/* </p>
      <BasicPage.SectionTitle>Tick-ionary</BasicPage.SectionTitle>
      <BasicPage.SectionSubtitle>
        What is the cephalothorax?
      </BasicPage.SectionSubtitle>
      <p>
        For a tick, the cephalothorax contains many body parts including the mouthparts, eyes, legs, and stomach.
        The other body segment is the abdomen which contains primary organs.

      </p>
      <BasicPage.SectionSubtitle>
        What and where are mouthparts?
      </BasicPage.SectionSubtitle>
      <p>
        The mouthparts include structures called the chelicaria, hyposomes, and palps. The palps do not enter the body when feeds, appearing sideways when attached to something.
      </p>
      <BasicPage.ImageCont>
        <figure>
          <img src={tickMouth} alt='tick mouth parts' />
          <figcaption>Image provided by Andrea Egizi, PhD
          </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <BasicPage.SectionSubtitle>
        What and where is the scutum?
      </BasicPage.SectionSubtitle>
      <p>
        The scutum is a hardened plate on the dorsal or back of the tick. This is useful when identifying different species of ticks.
      </p>
      <BasicPage.SectionSubtitle>
        What and where are festoons?
      </BasicPage.SectionSubtitle>
      <p>
        Festoons are grooves on the inferior or bottom part of the tick. This is also useful when identifying different species of ticks.
      </p>
      <BasicPage.ImageCont>
        <figure>
          <img src={festoons} alt='tick festoons' />
          <figcaption>Image provided by Andrea Egizi, PhD
          </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <BasicPage.SectionTitle>Unfed Ticks</BasicPage.SectionTitle>
      <BasicPage.SectionSubtitle>
        Picture #1: Unfed Tick
      </BasicPage.SectionSubtitle>
      <p>
        Point the camera straight down and keep the camera in focus while getting as close to the tick as possible. Concentrate on capturing the <span  style={{fontWeight: 'bold'}}>markings</span> on the top side of the tick.
      </p>
      
      <BasicPage.SectionSubtitle>
        Picture #2: Unfed Tick
      </BasicPage.SectionSubtitle>
      <p>
        Point the camera at the head, keeping the camera in focus while getting as close to the tick as possible.
      </p>
      <BasicPage.ImageCont>
        <figure>
          <img src={unfed2} alt='unfed tick' />
          <figcaption>Image provided by Kayla Vuoso, Andrea Egizi, PhD
              </figcaption>
        </figure>
        <figure>
          <img src={unfed4} alt='unfed tick' />
          <figcaption>Image provided by Kayla Vuoso, Andrea Egizi, PhD
              </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <BasicPage.SectionSubtitle>
        Additional Photos of Unfed Ticks:
      </BasicPage.SectionSubtitle>
      <p>
        Feel free to send us additional angles of the tick if you need to capture more of the tick's anatomy to help us identify your submission. For unfed ticks, the mouthparts, the scutum, and the festoons are the keys to a successful ID!
      </p>
      <BasicPage.ImageCont>
        <figure>
          <img src={unfed6} alt='unfed tick' />
          <figcaption>Image provided by Kayla Vuoso, Andrea Egizi, PhD
              </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <BasicPage.ImageCont>
        <figure>
          <img src={unfed5} alt='unfed tick' />
          <figcaption>Image provided by Kayla Vuoso, Andrea Egizi, PhD
              </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <BasicPage.SectionTitle>Engorged Ticks</BasicPage.SectionTitle>
      <p>
        Ticks comes in many shapes and sizes! When they just had a meal or are feed, they become swollen and look very different than their usual 
      {/* // TODO this section has been deactivated because of missing photos */}
      {/* <BasicPage.InnieLink to='/identify'><span>seed-like shapes</span></BasicPage.InnieLink> */}
      {/* {" "}seed-like shapes. Ticks can become swollen depending on how long they have taken their blood meal, and when making a <BasicPage.InnieLink to='/preSurvey'><span>Tick Submission</span></BasicPage.InnieLink>, it will also determine what types of pictures should be taken.
      </p>
      <BasicPage.SectionSubtitle>
        Here are instructions for taking an engorged tick pic for the <BasicPage.InnieLink to='/preSurvey'><span>Tick Submission</span></BasicPage.InnieLink>:
      </BasicPage.SectionSubtitle>
      <p>Reminder: Keep tick in a plastic container after submission until you receive an identification notification with next steps. Place in the refrigerator to preserve.</p>
      <p>Submit a focused .JPG of the scutum and mouthparts of the tick.
      </p>
      <p>Place the tick on a light colored background.
      </p>
      <BasicPage.ImageCont>
        <figure>
          <img src={engorged1} alt='engorged tick' />
          <figcaption>Image provided by Kayla Vuoso, Andrea Egizi, PhD
              </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <BasicPage.ImageCont>
        <figure>
          <img src={engorged2} alt='engorged tick' />
          <figcaption>Image provided by Kayla Vuoso, Andrea Egizi, PhD
              </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <BasicPage.SectionTitle>Bad Photo Gallery</BasicPage.SectionTitle>
      <p>Below are examples of photos that should try to be avoided as submissions.</p>
      <BasicPage.ImageCont>
        <figure>
          <img src={bad1} alt='bad example' />
          <figcaption>Image provided by Kayla Vuoso, Andrea Egizi, PhD
              </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <p>
      The tick is upside down, showing no features to help identify it.
      </p>
      <BasicPage.ImageCont>
        <figure>
          <img src={bad2} alt='bad example' />
          <figcaption>Image provided by Kayla Vuoso, Andrea Egizi, PhD
              </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <p>
      This tick is not in a light-colored background, which makes identifying the markings and outline of the tick easier. 
      </p>
      <BasicPage.ImageCont>
        <figure>
          <img src={bad3} alt='bad example' />
          <figcaption>Image provided by Kayla Vuoso, Andrea Egizi, PhD
              </figcaption>
        </figure>
      </BasicPage.ImageCont>
      <p>
      This tick is too far away. While this photo has an element we are looking for in the pictures (using an object as a reference), this photo doesn't capture features well enough to identify the tick.
      </p>
      <BasicPage.LinkButton.LinkSpec to={'/steps'}>
        <BasicPage.HoverCard>
          <BasicPage.LinkButton.CardSpecial>
            <span>Back to Steps</span>
          </BasicPage.LinkButton.CardSpecial>
        </BasicPage.HoverCard>
      </BasicPage.LinkButton.LinkSpec> */}
    </BasicPage.Text>

  );
};

export default Photo;
