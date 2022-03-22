import React from 'react'
import { BasicPage } from './GeneralStyles'
import { Link } from 'react-router-dom'

const Steps = () => {
  return (
    <BasicPage.ScreenContainer >
      <BasicPage.PageContainer>
        <BasicPage.Text>
          <h1>Steps to Participate</h1>
          <ol>
            <li>Verify that your submission is a tick using the information from <Link to='/identify'>How to Identify a Tick</Link>.</li>
            <li>Take a picture that follows the guidelines within <Link to='/photo'>How to Take Tick Pics</Link>.</li>
            <li>Enter information and submit photos in <Link to='/preSurvey'>Tick Submission</Link>.</li>
            <li>Keep tick in a crush proof container. You will receive a notification once your tick has been.</li>
            <li>Once you have received a notification describing next steps, follow the instructions on how to send the tick to NJ Ticks for Science!</li>
          </ol>
         
        </BasicPage.Text>
      </BasicPage.PageContainer>
    </BasicPage.ScreenContainer>
  )
}

export default Steps