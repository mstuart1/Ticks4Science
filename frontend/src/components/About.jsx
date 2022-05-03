import React from "react";
import { BasicPage } from "./GeneralStyles";
import tickIntro from '../images/slide 2.jpg'
import logo from '../images/Logo.jpg'
import styled from "styled-components";


const About = () => {
  return (
    <Styles.CenterCol >
    <BasicPage.Title>Welcome to NJ Ticks 4 Science!</BasicPage.Title>
    <BasicPage.ImageCont>
          <figure>
            <img src={logo} alt='logo' style={{ maxWidth: '350px', borderRadius: '1rem' }} />
          </figure>
        </BasicPage.ImageCont>
    <Styles.LeftAlignCont>
      
      <Styles.Para>
      This is a citizen science project where we enlist people to submit ticks they come across in their everyday lives while living, working, and visiting New Jersey!
      
      </Styles.Para>
     
      <Styles.Para>
      The goal is to understand the statewide risk of tick-borne pathogens to New Jersey communities. With your help, we can learn about the changing tick species and tick-borne pathogens in New Jersey and their specific locations.
      </Styles.Para>
      
      
      <Styles.Para>
      You don't have to be a trained scientist to help with our quest to participate in this project!
      </Styles.Para>
      <Styles.Para>
      If you love nature and exploring the outdoors…<br/>
If you are a hunter and spend time in tick habitat…<br/>
If you are a farmer or someone who handles animals routinely…<br/>
If you have a dog or cat…<br/>
      </Styles.Para>

      <Styles.Para>
      We encourage you to check out our website, which has resources on <BasicPage.InnieLink to='/checkMenu'><span>tick prevention</span></BasicPage.InnieLink>! If you happen to find a tick on you or your pet, we also provide resources on how to <BasicPage.InnieLink to='/removal'><span>remove the tick</span></BasicPage.InnieLink>. 
      </Styles.Para>

      <Styles.Para>
      Since you are here, we hope you are inspired to send us your ticks! <BasicPage.InnieLink to='/steps'><span>Start here</span></BasicPage.InnieLink> to begin a <BasicPage.InnieLink to='/preSurvey'><span>tick submission</span></BasicPage.InnieLink> and help all of us across New Jersey assess our risk from ticks and tick-borne diseases.

      </Styles.Para>
      <Styles.Para>
      If you have already submitted ticks, we thank you for your participation, and <BasicPage.InnieLink to='/progress'><span>click here to track your submission</span></BasicPage.InnieLink>. 

      </Styles.Para>

      <Styles.CenterCntr>
        
        
        <BasicPage.ImageCont>
          <figure>
            <img src={tickIntro} alt='ticks'  />
            <figcaption>Photo credit Jim Occi
            </figcaption>
          </figure>
        </BasicPage.ImageCont>
      </Styles.CenterCntr>
   
      
    </Styles.LeftAlignCont>
    <Styles.CenterCol>
      <Styles.Para>
      Want to learn more about New Jersey's tick species?
        </Styles.Para>
      <Styles.Para>
      View a list here at <BasicPage.InnieLink to='/ticks'><span>Ticks of NJ</span></BasicPage.InnieLink>
      </Styles.Para>
    
    {/* not a valid email address */}
{/* <ExternalLinkFloatButton colors={{ text: 'black', shadow: '#000000', bg: theme.colors.ruYellow }} to='mailto:njsciticks@rutgers.edu' text='Questions?  Contact Us' /> */}
    </Styles.CenterCol>

    </Styles.CenterCol>
  );
};

export default About;

const Styles = {
  CenterCntr: styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1366px) {
   width: 1000px;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 100vw;
    margin: 1rem;
   }
  `,

  CenterCol: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  `,
  RptLnkBtn: {
    LinkSpec: styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.ruTeal};
    
    `,
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
 
  
  },
  LeftAlignCont: styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  min-height: 80vh;
  max-width: 900px;
  `,
  Para: styled.p`
  font-size: 1.6rem;
  margin: 2rem;
  `
}
