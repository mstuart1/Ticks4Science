import React from 'react'
import { BasicPage } from './GeneralStyles'
import {theme} from '../theme'
import styled from 'styled-components'
import OutlineCard from './ui/outlineCard/OutlineCard'
import circle from '../images/slide 4.jpg'

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
          <p>Heres what to do:</p>
          <BasicPage.CardContainer >

            <OutlineCard bgColor={theme.colors.ruTeal}>
              <StepStyles.CardSpecial  >
                <BasicPage.StepSpan>Step 1:</BasicPage.StepSpan>
                <div>
                  Are you sure it's a tick? 
                <BasicPage.InnieLink to='/tickOrInsect'><span>  Check here</span></BasicPage.InnieLink>.
                
                </div>
              </StepStyles.CardSpecial >
              </OutlineCard>
            <OutlineCard bgColor={theme.colors.ruTeal}>
              <StepStyles.CardSpecial>
                <BasicPage.StepSpan>Step 2:</BasicPage.StepSpan>
                <div>
                Take a picture (for tips on how to take good tick pics, ) <BasicPage.InnieLink to='/photo'><span>click here</span></BasicPage.InnieLink>.
                </div>
              </StepStyles.CardSpecial>
              </OutlineCard>
            <OutlineCard bgColor={theme.colors.ruTeal}>
              <StepStyles.CardSpecial>
                <BasicPage.StepSpan>Step 3:</BasicPage.StepSpan>
                <div>
                Enter information and submit photos in <BasicPage.InnieLink to='/preSurvey'><span>tick submission</span></BasicPage.InnieLink>.               
                </div>
              </StepStyles.CardSpecial>
              </OutlineCard>
            <OutlineCard bgColor={theme.colors.ruTeal}>
              <StepStyles.CardSpecial>
                <BasicPage.StepSpan>Step 4:</BasicPage.StepSpan>
                <div>
                After submitting the form, keep the tick in a sealed plastic bag. Safely place the tick in the refrigerator or freezer to preserve it. You will receive a personalized ID number based on your tick submission. Save that number for future reference!            
                </div>
              </StepStyles.CardSpecial>
              </OutlineCard>
            <OutlineCard bgColor={theme.colors.ruTeal}>
              <StepStyles.CardSpecial>
                <BasicPage.StepSpan>Step 5:</BasicPage.StepSpan>
                <div>
                Check back at your convenience <BasicPage.InnieLink to='/progress'><span>here</span></BasicPage.InnieLink> to track the status of any submitted ticks. You will receive instructions describing next steps on how to continue your participation with NJ Ticks 4 Science!
                </div>
              </StepStyles.CardSpecial>
              </OutlineCard>
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