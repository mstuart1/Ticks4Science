import React from "react";
import { BasicPage } from "./GeneralStyles";
import tickIntro from '../images/scap2.jpg'
import styled from "styled-components";
import InternalLinkFloatButton from './ui/internalLinkFloatButton/InternalLinkFloatButton'
import ExternalLinkFloatButton from './ui/externalLinkFloatButton/ExternalLinkFloatButton'
import {theme} from '../theme'
import logo from '../images/Logo.svg'

const About = () => {
  return (
    <Styles.CenterCol >
    <Styles.CenterCntr>

        <Styles.LeftAlignCont>
         
          <Styles.Title>  <Styles.Logo> <img src={logo} alt='NJ ticks for science logo'/></Styles.Logo>
          <h1>Welcome to NJ Ticks 4 Science!</h1></Styles.Title>
          {/* <Styles.LeftAlignCont> */}
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
        {/* </Styles.LeftAlignCont> */}
        </Styles.LeftAlignCont>
       
      </Styles.CenterCntr>  
    
   <Styles.CenterCntr>
   <Styles.CenterCol>
      <BasicPage.SectionTitle>Get Started</BasicPage.SectionTitle>

      {/* // todo add info buttons to supply the extra text? */}

<InternalLinkFloatButton width="25rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/checkMenu' text='Tick Prevention' />
<InternalLinkFloatButton width="25rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/removal' text='Tick Removal' />
<InternalLinkFloatButton width="25rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/steps' text='Send us your ticks!' /> 


            <BasicPage.SectionTitle>If you have already submitted ticks </BasicPage.SectionTitle>
            <InternalLinkFloatButton width="25rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/progress' 
            text='Track your progress'
            // text='under construction'
             />
            </Styles.CenterCol>

<BasicPage.ImageCont>
          <figure>
            <img src={tickIntro} alt='ticks'  />
            <figcaption>Photo credit Jim Occi
            </figcaption>
          </figure>
        </BasicPage.ImageCont>

   </Styles.CenterCntr>
 

   <Styles.CenterCol>
      <Styles.Para>
      Want to learn more about New Jersey's tick species?
        </Styles.Para>
      <Styles.Para>
      View a list here at <BasicPage.InnieLink to='/ticks'><span>Ticks of NJ</span></BasicPage.InnieLink>
      </Styles.Para>
      
<ExternalLinkFloatButton colors={{ text: 'black', shadow: '#000000', bg: theme.colors.ruYellow }} to='mailto:cvbquestions@rutgers.edu' text='Questions?  Contact Us' />
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
  // justify-content: space-between;

  // min-height: 80vh;
  max-width: 900px;
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    
   }
  `,
  Para: styled.p`
  font-size: 1.6rem;
  margin: 2rem;
  `,
  Logo: styled.span`
  img {
    display: inline;
    max-width: 10rem;
    margin: 1rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
    
   }
  `,
  Title: styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `,
}
