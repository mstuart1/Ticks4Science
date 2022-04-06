import React, { useState } from 'react'
import { createInputElems, createRadioElems } from '../../tools/createElemFunc'
import { BasicPage } from '../GeneralStyles'
import { attachedOptions, foundOptions, inputElemArray1 } from './surveyFormData'


const Survey = () => {

  const initialState = {
    dateSubmitted: new Date(),
    userMuni: '',
    userZip: '',
    dateTickFound: '',
    foundOn: '',
    foundOnOther: '',
    tickAttached: '',
    animal: '',
    dateRemoved: '',
    locationDesc: '',
    locationDescOther: '',
    tickMuni: '',
    tickCounty: '',
    tickZip: '',
    activities: '',
    personBitten: '',
    submitterBitten: '',
    bittenMuni: '',
    bittenZip: '',
    bittenTraveled: '',
    travelInfo: '',
    photo: [],
  }

  const [input, setInput] = useState(initialState)

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    // console.log(name, value, type, checked);
    setInput((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const inputElem1 = createInputElems(inputElemArray1, handleChange, input)
  const foundRadioElements = createRadioElems(foundOptions, 'foundOn', handleChange, input)
  const attachedRadioElem = createRadioElems(attachedOptions, 'tickAttached',handleChange, input)


  return (
    <BasicPage.Text>
      <BasicPage.Title>Tick Submission Form</BasicPage.Title>
      <BasicPage.Form>
        {inputElem1}
        <div>
          <label htmlFor='foundOn'>Indicate who/what tick(s) were found on:</label>
          <BasicPage.RadioButtons>
            {foundRadioElements}
          </BasicPage.RadioButtons>
          {input.foundOn === 'Other' && (
            <input
              type='text'
              name='foundOnOther'
              id='foundOnOther'
              required={true}
              placeholder='Describe where you found the tick'
              value={input.foundOnOther || ''}
              onChange={handleChange}

            />

          )}
          {(input.foundOn === 'Person' || input.foundOn === 'Animal') && (
            <>
            <label htmlFor='foundOn'>If tick(s) were found on person/animal, was it attached?</label>
            <BasicPage.RadioButtons>
              {attachedRadioElem}
            </BasicPage.RadioButtons>
            </>
          )}
        </div>

      </BasicPage.Form>
    </BasicPage.Text>
  )
}

export default Survey



