import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubmissionDataService from '../../services/submission'
import { theme } from '../../theme'
import { createInputElems, createRadioElems } from '../../tools/createElemFunc'
import { BasicPage } from '../GeneralStyles'
import { attachedOptions, bittenInfoArray, foundOptions, inputElemArray1, inputElemArray2, locationOptions, yesNo } from './surveyFormData'
// import UploadImages from './UploadImages'


const Survey = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState({})
  const [imageFront, setImageFront] = useState([])
  const [imageBack, setImageBack] = useState([])
  const [imageOther, setImageOther] = useState([])
  // const [imageUrls, setImageUrls] = useState([])

  console.log(imageFront)
  // useEffect(() => {
  //   const newImageUrls = [];
  //   newImageUrls.push(URL.createObjectURL(imageFront));
  //   newImageUrls.push(URL.createObjectURL(imageBack));
  //   newImageUrls.push(URL.createObjectURL(imageOther));
  //   imageBack.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
  //   imageOther.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
  //   setImageUrls(newImageUrls)

  // }, [imageFront, imageBack, imageOther]);

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    // console.log(name, value, type, checked);
    setInput((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFront = evt => {
    setImageFront(evt.target.files[0])
    // console.log(imageFront)
  }
  const handleBack = evt => {
    setImageBack(evt.target.files[0])
  }
  const handleOther = evt => {
    setImageOther(evt.target.files[0])
  }
  
  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      let data = input;
      const formData = new FormData();
      formData.append('photos', imageFront)
      formData.append('photos', imageBack)
      formData.append('photos', imageOther)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }

      let response = await SubmissionDataService.submitForm(data);
      let id = response.data.data.id
     
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
            <p>Please include a photo of the top side of the tick and a photo of the head of the tick.  You may include one additional photo.</p>
            <div>
              <label htmlFor='front'>Photo of top side</label>
              <input type='file' accept='image/*' onChange={handleFront} required id='front' /><br />
              <label htmlFor='back'>Photo of head</label>
              <input type='file' accept='image/*' onChange={handleBack} required id='back' /><br />
              <label htmlFor='other'>Any additional photo of tick</label>
              <input type='file' accept='image/*' onChange={handleOther} required id='other' />
              {/* {imageUrls.map((imageSrc, i) => <img key={i} src={imageSrc} style={{ maxWidth: '300px', margin: '1rem' }} />)} */}


            </div>
            <p>Reminder: Review <BasicPage.InnieLink to='/photo'><span>How to Take a Tick Pic</span></BasicPage.InnieLink></p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='additionalInfo'>Any additional information about the environment, tick(s), and or person/pet:</label>
            <textarea id='additionalInfo' name='additionalInfo' value={input.additionalInfo || ''} onChange={handleChange}></textarea>
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



