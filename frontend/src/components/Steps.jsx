import React from 'react'
import { BasicPage } from './GeneralStyles'
import styled  from 'styled-components'

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

            <BasicPage.Card>
              <StepStyles.CardSpecial>
                <StepStyles.StepSpan>Step 1:</StepStyles.StepSpan>
                <div>
                <BasicPage.InnieLink to='/tickOrInsect'><span> Verify that your submission is a tick</span></BasicPage.InnieLink>. Also reference <BasicPage.InnieLink to='/identify'><span>How to Identify a Tick</span></BasicPage.InnieLink>.</div>
              </StepStyles.CardSpecial>
              </BasicPage.Card>
            <BasicPage.Card>
              <StepStyles.CardSpecial>
                <StepStyles.StepSpan>Step 2:</StepStyles.StepSpan>
                <div>
                Take a picture that follows the guidelines within <BasicPage.InnieLink to='/photo'><span>How to Take Tick Pics</span></BasicPage.InnieLink>.
                </div>
              </StepStyles.CardSpecial>
              </BasicPage.Card>
            <BasicPage.Card>
              <StepStyles.CardSpecial>
                <StepStyles.StepSpan>Step 3:</StepStyles.StepSpan>
                <div>
                Enter information and submit photos in <BasicPage.InnieLink to='/preSurvey'><span>Tick Submission</span></BasicPage.InnieLink>.               
                </div>
              </StepStyles.CardSpecial>
              </BasicPage.Card>
            <BasicPage.Card>
              <StepStyles.CardSpecial>
                <StepStyles.StepSpan>Step 4:</StepStyles.StepSpan>
                <div>
                After submitting the form, keep the tick in a plastic bag. Also, place in the refrigerator to preserve. You will receive a notification once your tick submission has been successfully reviewed.             
                </div>
              </StepStyles.CardSpecial>
              </BasicPage.Card>
            <BasicPage.Card>
              <StepStyles.CardSpecial>
                <StepStyles.StepSpan>Step 5:</StepStyles.StepSpan>
                <div>
                Once you have received a notification describing next steps, follow the instructions on how to send the tick to NJ Ticks for Science!            
                </div>
              </StepStyles.CardSpecial>
              </BasicPage.Card>
              </BasicPage.CardContainer>
          </BasicPage.Text>
      </BasicPage.PageContainer>
    </BasicPage.ScreenContainer>
  )


export default Steps