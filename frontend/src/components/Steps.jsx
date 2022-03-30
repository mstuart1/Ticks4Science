import React from 'react'
import { BasicPage } from './GeneralStyles'
import { Link } from 'react-router-dom'

const Steps = () => {
  return (
    <BasicPage.ScreenContainer >
      <BasicPage.PageContainer>
        <BasicPage.Text>
          <BasicPage.Title>Steps to Participate</BasicPage.Title>
          <p>Below are detailed the steps participate in our tick submission program!</p>
          <ol>
            <li>
              <BasicPage.InnieLink to='/tickOrInsect'><span>Verify that your submission is a tick</span></BasicPage.InnieLink> . Also reference <BasicPage.InnieLink to='/identify'><span>How to Identify a Tick</span></BasicPage.InnieLink>.
            </li>

            <li>Take a picture that follows the guidelines within <BasicPage.InnieLink to='/photo'><span>How to Take Tick Pics</span></BasicPage.InnieLink>.</li>
            <li>Enter information and submit photos in <BasicPage.InnieLink to='/preSurvey'><span>Tick Submission</span></BasicPage.InnieLink>.</li>
            <li>After submitting the form, keep the tick in a plastic bag. Also, place in the refrigerator to preserve. You will receive a notification once your tick submission has been successfully reviewed.
            </li>
            <li>Once you have received a notification describing next steps, follow the instructions on how to send the tick to NJ Ticks for Science!</li>
          </ol>

        </BasicPage.Text>
      </BasicPage.PageContainer>
    </BasicPage.ScreenContainer>
  )
}

export default Steps