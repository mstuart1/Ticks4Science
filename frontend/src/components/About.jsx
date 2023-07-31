import React from "react";
import { BasicPage } from "./GeneralStyles";
import tickIntro from '../images/scap1.jpeg'
import styled from "styled-components";
import InternalLinkFloatButton from './ui/internalLinkFloatButton/InternalLinkFloatButton'
import { theme } from '../theme'
import logo from '../images/Logo2023.png'
import LearnMore from "./ui/learnMore/LearnMore";
import OutlineFloatButton from "./ui/outlineFloatButton/OutlineFloatButton";
import { useNavigate } from "react-router-dom";

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
  width: 95%;
  
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
  font-size: 2rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
  `,
  Logo: styled.span`
  img {
    display: inline;
    max-width: 40rem;
    // margin: 1rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
    
   }
  `,
  Title: styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
font-weight: 700;
text-align: center;
margin: 1rem;
  `,
}

const About = () => {
  const navigate = useNavigate()
  return (
    <Styles.CenterCol >
      <Styles.CenterCntr>

        <Styles.LeftAlignCont>

          <Styles.Title>
            Welcome to NJ Ticks 4 Science!
          </Styles.Title>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Styles.Logo>
              <img src={logo} alt='NJ ticks for science logo' />
            </Styles.Logo>
            <div>
              <Styles.Para>
                This is a citizen science project where we enlist people to submit ticks they come across in their everyday lives while living, working, and visiting New Jersey or as part of a Tick Blitz!

              </Styles.Para>

              <Styles.Para>
                The goal is to understand the changing distribution of ticks and tick-borne pathogens across New Jersey. With your help, we will learn where and when people are exposed to ticks and tick-borne diseases.
              </Styles.Para>
            </div>
          </div>
        </Styles.LeftAlignCont>

      </Styles.CenterCntr>

      <Styles.CenterCntr style={{ borderBottom: `2px solid ${theme.colors.grey3}` }}>
        <Styles.CenterCol>
          <BasicPage.SectionTitle>Get Started</BasicPage.SectionTitle>
          <InternalLinkFloatButton width="25rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/steps' text='Send us your ticks!' />
          <InternalLinkFloatButton width="25rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/checkMenu' text='Tick Prevention' />
          <InternalLinkFloatButton width="25rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/removal' text='Tick Removal' />


          <BasicPage.SectionTitle>If you have already submitted ticks </BasicPage.SectionTitle>
          <OutlineFloatButton colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal, bg: theme.colors.ruTeal }} handleClick={() => navigate('/progress')} text='Track your progress'
          />
        </Styles.CenterCol>

        <BasicPage.ImageCont>
          <figure>
            <img src={tickIntro} alt='ticks' />
            <figcaption>Photo of a female blacklegged tick (sometimes called “deer tick”), (photo credit Jim Occi, PhD).
            </figcaption>
          </figure>
        </BasicPage.ImageCont>

      </Styles.CenterCntr>
      <LearnMore />

    </Styles.CenterCol>
  );
};

export default About;


