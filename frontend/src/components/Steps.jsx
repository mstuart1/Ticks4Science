import React from 'react'
import { BasicPage } from './GeneralStyles'
import { theme } from '../theme'
import styled from 'styled-components'
// import OutlineCard from './ui/outlineCard/OutlineCard'
import circle from '../images/slide 4.jpg'
import InternalLinkFloatButton from './ui/internalLinkFloatButton/InternalLinkFloatButton'

const StepStyles = {
  CardSpecial: styled.div`
  display: flex;
  gap: 1rem;
  div {
    margin: 1rem;
    width: 300px;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    div {
      width: 60vw;
    }
  }
  `,
  StepSpan: styled.span`
  display: inline-block;
  margin: 1rem;
  `,

  CenterCntr: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // flexWrap: wrap;
    // @media screen and (min-width: 1366px) {
    // //  max-width: 1000px;
    // }
    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
      // width: 100vw;
      // margin: 1rem;
      // flexWrap: wrap;
     }
    `,
}

const Steps = () => (

  <BasicPage.Text>
    <BasicPage.Title>Join NJ Ticks 4 Science!</BasicPage.Title>
    {/* <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap-reverse', justifyContent: 'center' }}> */}
    <StepStyles.CenterCntr>
      <div>
        <InternalLinkFloatButton width="30rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/tickOrInsect' text='Are you sure it is a tick?' />
        <InternalLinkFloatButton width="30rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/photo' text='Learn to take tick pics' />
      </div>
      <div >

        <p>Here's what to do:</p>
        <BasicPage.CardContainer >


          <InternalLinkFloatButton width="30rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/preSurvey' text='Step 1 - Fill out the form and upload your pics' />
          <InternalLinkFloatButton width="30rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/missingId' text='Step 2 - Write down tick identification number' />
          <InternalLinkFloatButton width="30rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/progress' text='Step 3 - Check our website for a tick request (usually 24hrs or less)' />
          <InternalLinkFloatButton width="30rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/progress' text='Step 4 - Mail tick in' />
          <InternalLinkFloatButton width="30rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/progress' text='Step 5 - Check our website for results in a few weeks' />
        </BasicPage.CardContainer>
      </div>

      <BasicPage.ImageCont>
        <figure>
          <img src={circle} alt='circle of ticks' />
          <figcaption>Multiple life stages of common ticks of New Jersey (photo credit Andrea Egizi, PhD).
          </figcaption>
        </figure>
      </BasicPage.ImageCont>
    </StepStyles.CenterCntr>
    {/* </div> */}
  </BasicPage.Text>

)

export default Steps;