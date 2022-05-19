import React from 'react'
import { BasicPage } from './GeneralStyles'
import {theme} from '../theme'
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

const Steps = () => (

        <BasicPage.Text>
          <BasicPage.Title>Join NJ Ticks 4 Science!</BasicPage.Title>
          <StepStyles.CenterCntr >

          <div >
          <p>Here's what to do:</p>
          <BasicPage.CardContainer >
          <InternalLinkFloatButton width="30rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/tickOrInsect' text='Step 1 - Is it a tick?' />
          <InternalLinkFloatButton width="30rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/photo' text='Step 2 - Learn to take tick pics' />
          <InternalLinkFloatButton width="30rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/preSurvey' text='Step 3 - Fill out the form and upload your pics' />
          <InternalLinkFloatButton width="30rem" colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/progress' text='Step 4 - Check your progress' />
            
            {/* <OutlineCard bgColor={theme.colors.ruTeal}>
              <StepStyles.CardSpecial>
                <BasicPage.StepSpan>Step 4:</BasicPage.StepSpan>
                <div>
                After submitting the form, keep the tick in a sealed plastic bag. Safely place the tick in the refrigerator or freezer to preserve it. You will receive a personalized ID number based on your tick submission. Save that number for future reference!            
                </div>
              </StepStyles.CardSpecial>
              </OutlineCard> */}
           
              </BasicPage.CardContainer>
              </div>
              <BasicPage.ImageCont>
            <figure>
              <img src={circle} alt='circle of ticks' />
              <figcaption>Photo credit Andrea Egizi, PhD.
              </figcaption>
            </figure>
          </BasicPage.ImageCont>
              </StepStyles.CenterCntr>
          </BasicPage.Text>

  )


export default Steps