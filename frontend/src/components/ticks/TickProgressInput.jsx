import React, { useState } from 'react'
import styled from 'styled-components'
import { BasicPage } from '../GeneralStyles'
import InternalLinkFloatButton from '../ui/internalLinkFloatButton/InternalLinkFloatButton'

const Styles = {
    Input: styled.input`
    font-size: 1.4rem;
    border: none;
    -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${({colors}) => colors.bg};
  color: ${({colors}) => colors.text};
  padding: 2rem 4rem;
  border-radius: 3px;
  margin: 2rem 0;
    `
}

const TickProgressInput = ({inputColors = {bg: '#f2f2f2', text: 'black'}, buttonColors={text: '#000000', shadow: '#000000', bg: '#ffffff'}}) => {

    const [input, setInput] = useState('')

    const handleChange = evt => {
        setInput(evt.target.value)
    }

  return (
    <BasicPage.Text>
        <Styles.Input type={'number'} placeholder='your id number here' value={input} onChange={handleChange} colors={inputColors}/>
        <InternalLinkFloatButton to={`/progress/${input}`} text='Check my progress' colors={buttonColors} />
        <p>Your id number was given to you when you submitted your photos.  If you have not yet submitted photos, please <BasicPage.InnieLink to='/preSurvey'><span>submit the form </span></BasicPage.InnieLink> before checking your progress.
        </p>
    </BasicPage.Text>
  )
}

export default TickProgressInput