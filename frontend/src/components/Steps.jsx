import React from 'react'
import { BasicPage } from './GeneralStyles'
import {theme} from '../theme'
import styled from 'styled-components'

const StepStyles = {
  CardSpecial: styled.div`
  display: flex;
  gap: 1rem;
  div {
    margin: 1rem;
    width: 60vw;
  }
  `,
  StepSpan: styled.span`
  display: inline-block;
  margin: 1rem;
  `
}

const Steps = () => (
    <BasicPage.ScreenContainer >
      <BasicPage.PageContainer>
        <BasicPage.Text>
          <BasicPage.Title>Steps to Participate</BasicPage.Title>
          <p>Below are detailed the steps participate in our tick submission program!</p>
          <BasicPage.CardContainer>

            <BasicPage.OutlineCard bgColor={theme.colors.rutgersTeal}>
              <StepStyles.CardSpecial  >
                <BasicPage.StepSpan>Step 1:</BasicPage.StepSpan>
                <div>
                <BasicPage.InnieLink to='/tickOrInsect'><span> Verify that your submission is a tick</span></BasicPage.InnieLink>. 
                {/* // TODO - need photos */}
                {/* Also reference <BasicPage.InnieLink to='/identify'><span>How to Identify a Tick</span></BasicPage.InnieLink>. */}
                </div>
              </StepStyles.CardSpecial >
              </BasicPage.OutlineCard>
            <BasicPage.OutlineCard bgColor={theme.colors.rutgersTeal}>
              <BasicPage.CardSpecial>
                <BasicPage.StepSpan>Step 2:</BasicPage.StepSpan>
                <div>
                Take a picture that follows the guidelines within <BasicPage.InnieLink to='/photo'><span>How to Take Tick Pics</span></BasicPage.InnieLink>.
                </div>
              </BasicPage.CardSpecial>
              </BasicPage.OutlineCard>
            <BasicPage.OutlineCard bgColor={theme.colors.rutgersTeal}>
              <BasicPage.CardSpecial>
                <BasicPage.StepSpan>Step 3:</BasicPage.StepSpan>
                <div>
                Enter information and submit photos in <BasicPage.InnieLink to='/preSurvey'><span>Tick Submission</span></BasicPage.InnieLink>.               
                </div>
              </BasicPage.CardSpecial>
              </BasicPage.OutlineCard>
            <BasicPage.OutlineCard bgColor={theme.colors.rutgersTeal}>
              <BasicPage.CardSpecial>
                <BasicPage.StepSpan>Step 4:</BasicPage.StepSpan>
                <div>
                After submitting the form, keep the tick in a plastic bag. Also, place in the refrigerator to preserve. You will receive a notification once your tick submission has been successfully reviewed.             
                </div>
              </BasicPage.CardSpecial>
              </BasicPage.OutlineCard>
            <BasicPage.OutlineCard bgColor={theme.colors.rutgersTeal}>
              <BasicPage.CardSpecial>
                <BasicPage.StepSpan>Step 5:</BasicPage.StepSpan>
                <div>
                Once you have received a notification describing next steps, follow the instructions on how to send the tick to NJ Ticks for Science!            
                </div>
              </BasicPage.CardSpecial>
              </BasicPage.OutlineCard>
              </BasicPage.CardContainer>
          </BasicPage.Text>
      </BasicPage.PageContainer>
    </BasicPage.ScreenContainer>
  )


export default Steps