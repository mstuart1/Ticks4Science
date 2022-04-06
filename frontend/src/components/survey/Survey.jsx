import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubmissionDataService from '../../services/submission'
import { theme } from '../../theme'
import { createInputElems, createRadioElems } from '../../tools/createElemFunc'
import { BasicPage } from '../GeneralStyles'
import { attachedOptions, bittenInfoArray, foundOptions, inputElemArray1, inputElemArray2, locationOptions, yesNo } from './surveyFormData'


const Survey = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState({})

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    // console.log(name, value, type, checked);
    setInput((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      let data = input;
      let response = await SubmissionDataService.submitForm(data);
      // console.log(response.data)
      setInput({});
      navigate(`/thanks?id=${response.data.data.id}`);
      }
      catch (err) {
        console.log(err.message)
      }
    
    
  }

  const inputElem1 = createInputElems(inputElemArray1, handleChange, input)
  const foundRadioElements = createRadioElems(foundOptions, 'foundOn', handleChange, input)
  const attachedRadioElem = createRadioElems(attachedOptions, 'tickAttached', handleChange, input)
  const inputElem2 = createInputElems(inputElemArray2, handleChange, input)
  const locationRadioElem = createRadioElems(locationOptions, 'locationDesc', handleChange, input)
  const subBiteElem = createRadioElems(yesNo, 'submitterBitten', handleChange, input)
  const bittenElem = createInputElems(bittenInfoArray, handleChange, input)
  const traveledElem = createRadioElems(yesNo, 'bittenTraveled', handleChange, input)

  return (
    <BasicPage.Text>
      <BasicPage.Title>Tick Submission Form</BasicPage.Title>
      <BasicPage.Form onSubmit={handleSubmit}>
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
              placeholder='Describe the object where you found the tick'
              value={input.foundOnOther || ''}
              onChange={handleChange}

            />

          )}
          {input.foundOn === 'Animal' && (
            <input
              type='text'
              name='animal'
              id='animal'
              required={true}
              placeholder='Specify Animal'
              value={input.animal || ''}
              onChange={handleChange}

            />

          )}
          {(input.foundOn === 'Person' || input.foundOn === 'Animal') && (
            <>
              <label htmlFor='tickAttached'>If tick(s) were found on person/animal, was it attached?</label>
              <BasicPage.RadioButtons>
                {attachedRadioElem}
              </BasicPage.RadioButtons>
            </>
          )}
          {input.tickAttached === 'Yes' && (
            <>
              <label htmlFor='dateRemoved'>Date Removed*</label>
              <input
                type='date'
                name='dateRemoved'
                id='dateRemoved'
                value={input.dateRemoved || null}
                onChange={handleChange}
              />
              {input.foundOn === 'Person' && (
                <>
                  <label htmlFor='submitterBitten'>Was submitter bitten by the tick?*</label>
                  <BasicPage.RadioButtons>
                    {subBiteElem}
                  </BasicPage.RadioButtons>
                  {input.submitterBitten === 'No' && (
                    <>{bittenElem}</>)}
                  <label htmlFor='locationDesc'>Have the bitten person traveled outside of New Jersey within the past 10 days?*</label>
                  <BasicPage.RadioButtons>
                    {traveledElem}
                  </BasicPage.RadioButtons>
                  {input.bittenTraveled === 'Yes' && (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor='travelInfo'>Provide relevant zip codes or community/city names:</label>
                      <textarea id='travelInfo' name='travelInfo' value={input.travelInfo || ''} onChange={handleChange}></textarea>
                    </div>
                  )}
                </>

              )}

            </>
          )}


        </div>
        {inputElem2}
        <div>
          <label htmlFor='locationDesc'>Descriptor of Location*</label>
          <BasicPage.RadioButtons
            style={{ flexWrap: 'wrap' }}
          >
            {locationRadioElem}
          </BasicPage.RadioButtons>

          {input.locationDesc === 'Other' && (
            <input
              type='text'
              name='locationDescOther'
              id='locationDescOther'
              required={true}
              placeholder='Describe the location where you found the tick'
              value={input.locationDescOther || ''}
              onChange={handleChange}

            />

          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='activities'>Describe activity/activities when tick(s) were acquired:</label>
          <textarea id='activities' name='activities' value={input.activities || ''} onChange={handleChange}></textarea>
        </div>
        <div>
          <h4>Section to upload photos</h4>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='additionalInfo'>Any additional information about the environment, tick(s), and or person/pet:</label>
          <textarea id='additionalInfo' name='additionalInfo' value={input.additionalInfo || ''} onChange={handleChange}></textarea>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <BasicPage.StyledButton onClick={() => navigate('/preSurvey')} bgColor='white' color={theme.colors.greyFont}>Cancel</BasicPage.StyledButton>
        <BasicPage.StyledButton 
        // onClick={handleSubmit}
         color='black'>Submit</BasicPage.StyledButton>
      </div>
      </BasicPage.Form>
     
    </BasicPage.Text>
  )
}

export default Survey



