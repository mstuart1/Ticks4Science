import React from 'react'
import { PageContainer, ScreenContainer, TextDiv } from './GeneralStyles'
import { Link } from 'react-router-dom'

const Steps = () => {
  return (
    <ScreenContainer>
      <PageContainer>
        <TextDiv>
          <h1>Steps to Participate</h1>
          <ul>
            <li>Step 1: Verify that your submission is a tick using the information from <Link to='/identify'>How to Identify a Tick</Link>.</li>
            <li>Step 2: Take a picture that follows the guidelines within <Link to='/photo'>How to Take Tick Pics</Link>.</li>
            <li>Step 3: Enter information and submit photos in <Link to='/preSurvey'>Tick Submission</Link>.</li>
            <li>Step 4: Keep tick in a crush proof container. We will be providing you with instructions to mail in the tick or take additional photographs of the specimen.</li>
          </ul>
         
        </TextDiv>
      </PageContainer>
    </ScreenContainer>
  )
}

export default Steps