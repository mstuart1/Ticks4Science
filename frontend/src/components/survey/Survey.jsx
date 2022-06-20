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
  const [imageFront, setImageFront] = useState([])
  const [imageBack, setImageBack] = useState([])

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    // console.log(name, value, type, checked);
    setInput((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFront = evt => {
    let file = evt.target.files[0]
    console.log(file)
    if(file.size > 4000000 ) {
      alert(`Please reduce file size before uploading`)
      return
    }
    if(file.size < 200000 ) {
      alert(`Please check your image quality, image may be too small to view tick`)
      return
    }
    setImageFront(file)
    
    
  }
  const handleBack = evt => {
    let file = evt.target.files[0]
    if(file.size > 4000000) {
      alert(`Please reduce file size before uploading`)
      return
    }
    if(file.size < 200000 ) {
      alert(`Please check your image quality, image may be too small to view tick`)
      return
    }
    setImageBack(file)
  }
  // const handleOther = evt => {
  //   setImageOther(evt.target.files[0])
  // }
  
  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      let data = input;
      const formData = new FormData();
      formData.append('photos', imageFront)
      formData.append('photos', imageBack)
      // formData.append('photos', imageOther)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }

      let response = await SubmissionDataService.submitForm(data);
      let id = response.data.data.id
     console.log('sent form, now seding photos')
      response = await SubmissionDataService.submitImage(id, formData, config)
      // alert(JSON.stringify(response.data))
      setInput({});
      navigate(`/thanks?id=${id}`);
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
    <BasicPage.Text >
      <BasicPage.Title>Tick Submission Form</BasicPage.Title>
      <form onSubmit={handleSubmit}>
        <BasicPage.Form >
          <div style={{backgroundColor: '#f2f2f2', borderRadius: '1rem'}}>
            <h4 style={{padding: '1rem'}}>Submitter Information</h4>
          {inputElem1}
          </div>
          <div style={{backgroundColor: '#f2f2f2', borderRadius: '1rem'}}>
            <div>
            <h4>Tick Information</h4>
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
            <p>
            Please submit up to two photos of the tick that are between 2kb and 4Mb in size.
              </p>
            <div>
              <label htmlFor='front'>Photo 1</label>
              <input type='file' accept='image/*' onChange={handleFront} required id='front' /><br />
              <label htmlFor='back'>Photo 2</label>
              <input type='file' accept='image/*' onChange={handleBack}  id='back' /><br />

            </div>
            <p>Reminder: Review <BasicPage.InnieLink to='/photo'><span>How to Take a Tick Pic</span></BasicPage.InnieLink></p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='additionalInfo'>Any additional information about the environment, tick(s), and or person/pet:</label>
            <textarea id='additionalInfo' name='additionalInfo' value={input.additionalInfo || ''} onChange={handleChange}></textarea>
          </div>
          </div>

          <BasicPage.HoverCard bgColor={theme.colors.main} onClick={handleSubmit}>
            <BasicPage.LinkButton.CardSpecial >
              <span >Submit</span>
            </BasicPage.LinkButton.CardSpecial>
          </BasicPage.HoverCard>

          <BasicPage.LinkButton.LinkSpec to={'/steps'}>
            <BasicPage.HoverCard>
              <BasicPage.LinkButton.CardSpecial>
                <span>Cancel</span>
              </BasicPage.LinkButton.CardSpecial>
            </BasicPage.HoverCard>
          </BasicPage.LinkButton.LinkSpec>

        </BasicPage.Form>





      </form>
    </BasicPage.Text>
  )
}

export default Survey



