import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../theme'
import { BasicPage } from '../GeneralStyles'
import ImageInput from '../ui/imageInput/ImageInput'

const Styles = {
  
  FormSection: styled.div`
  background-color: #f2f2f2;
  border-radius: 1rem;
  padding: 1rem;
  `,
  Input: styled.input`
  border: 1px solid ${({ error }) => error ? 'red' : 'black'};
  `,
  ErrMessage: styled.label`
  color: red;
  display: ${({ error }) => error ? 'initial' : 'none'};
  `,
  TextCont: styled.div`
  display: flex;
  flex-direction: column;
  `,
  SubmitB: styled(BasicPage.LinkButton.CardSpecial)`
  
  `

}

const BlitzSurvey = () =>{

  const navigate = useNavigate()

  let initialState = {
    blitzLoc: '', // *
    blitzZip: '',
    sampler: '', //*
    timeStart: '',  // choose time of day or time sampled
    timeEnd: '',  // choose time of day or time sampled
    timeBlock: '',  // 30, less than 30, more than 30
    distance: '', // 100ft, less than 100, more than 100
    weather: '', // sun, clouds, wind, frost, rain, dew, fot, other, 
    weatherOther: '',
    envPhoto1: '', // *
    envPhoto2: '',
    additionalInfo: '',
  }

  let initialBlur = {
    blitzLoc: false,
    blitzZip: false,
    sampler: false,
    timeStart: false,
    timeEnd: false,
    timeBlock: false,
    distance: false,
    weather: false,
    weatherOther: false,
    envPhoto1: false,
    envPhoto2: false,
    additionalInfo: false,
  }
  
  const [input, setInput] = useState(initialState)
  const [photoArray, setPhotoArray] = useState([])
  const [touched, setTouched] = useState(initialBlur)

  const handleChange = (evt) => {
    
    const { name, value, type, checked } = evt.target;
    
    setInput((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
   
  };

  const handlePhoto = evt => {
    console.log('handling front')
    let file = evt.target.files[0]
    // console.log(file)
    if (file.size > 4000000) {
      alert(`Please reduce file size before uploading`)
      return
    }
    if (file.size < 200000) {
      alert(`Please check your image quality, image may be too small to view tick`)
      return
    }

    setPhotoArray(file)

  }
 

  const validate = (input, photoArray) => {
    // console.log('validating', input)
    return ({
      // true means invalid
    // blitzLoc: input.blitzLoc.length === 0,
    // blitzZip: input.blitzZip && Number.isNaN,
    // sampler: input.sampler.length === 0, 
    // timeStart: input.timeBlock === 0 && input.timeStart.length === 0,  
    // timeEnd: input.timeStart.length > 0 && input.timeEnd.length === 0,  
    // timeBlock: input.timeStart.length === 0 && input.timeBlock === 0,
    // distance: input.distance.length === 0,
    // weather: input.weather.length === 0,
    // weatherOther: input.weather === 'other' && input.weatherOther.length === 0,
    // envPhoto1: photoArray.length === 0,
    })
  }
  const errors = validate(input)
  const handleBlur = (field) => {
    // console.log('handling blur')
    setTouched(prevState => ({ ...prevState, [field]: true }))
  }

  const isEnabled = !Object.values(errors).some(x => x === true)

  const shouldMarkError = (field) => {
    // console.log('markingError')
    let hasError = errors[field]
    let shouldShow = touched[field]
    return hasError ? shouldShow : false
  }

// console.log(input.userZip.length < 5 || Number.isInteger(input.userZip))

  const handleSubmit = async (evt) => {
    // console.log('handling submit')
    try {
      evt.preventDefault();
      
      let errors = validate(input);
      // console.log(errors)
      
      if(Object.values(errors).some(x => x === true)) {
        alert('Please review the form and make sure all of the required fields have been completed.')
        return
      }
      // if(imageFront.name.length === 0){
      //   alert('Please include at least one image of the tick.')
      //   return
      // }
      let data = Object.entries(input).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})
     
      const formData = new FormData();
      // formData.append('photos', imageFront)
      // formData.append('photos', imageBack)
      // formData.append('photos', imageOther)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }

      // let response = await SubmissionDataService.submitForm(data);
      // let id = response.data.data.id
      // console.log('sent form, now seding photos')
      // response = await SubmissionDataService.submitImage(id, formData, config)
      // alert(JSON.stringify(response.data))
      setInput(initialState);
      // navigate(`/thanks?id=${id}`);
    }
    catch (err) {
      console.log(err.message)
    }
  }

  return (
    <BasicPage.Text >
      <BasicPage.Title>Tick Submission Form</BasicPage.Title>

      <BasicPage.Form >
        
        {/* submitter info */}
        <Styles.FormSection>

          {/* <h4>Submitter Information</h4> */}

          <label htmlFor={'blitzLoc'}>{'Blitz Location *'}</label>
          <Styles.Input error={shouldMarkError('blitzLoc')}
            onBlur={() => handleBlur('blitzLoc')}
            type={'text'}
            name={'blitzLoc'}
            id={'blitzLoc'}
            required
            placeholder={'Where did the Tick Blitz take place?'}
            value={input.blitzLoc}
            onChange={handleChange}
          />
          <Styles.ErrMessage error={shouldMarkError('blitzLoc')}>
            Please enter the city or town where the Tick Blitz occurred.
          </Styles.ErrMessage>

          <label htmlFor={'blitzZip'}>{'ZIP Code'}</label>
          <Styles.Input error={shouldMarkError('blitzZip')}
            onBlur={() => handleBlur('blitzZip')}
            type={'text'}
            name={'blitzZip'}
            id={'blitzZip'}
            placeholder={'Where did the Tick Blitz occur?'}
            value={input.blitzZip}
            onChange={handleChange}
          />

        </Styles.FormSection>
        {/* tick info */}
        <Styles.FormSection>
          {/* tick attached */}
          <div>
            {/* <h4>Tick Attachment Information</h4> */}
            <label htmlFor='sampler'>What type of sampler was used? *:</label>

            <Styles.ErrMessage error={shouldMarkError('sampler')}>
              Please make a selection.
            </Styles.ErrMessage>

            <BasicPage.RadioButtons>
              <input
                type='radio'
                name={'sampler'}
                value={'Drag'}
                checked={input.sampler === 'Drag'}
                id='sampler-Drag'
                onChange={handleChange}
                required
              />
              <label htmlFor='sampler-Drag'>Drag</label>

              <input
                type='radio'
                name={'sampler'}
                value={'Flag'}
                checked={input.sampler === 'Flag'}
                id='sampler-Flag'
                onChange={handleChange}
                required
              />
              <label htmlFor='sampler-Flag'>Flag</label>
              <input
                type='radio'
                name={'sampler'}
                value={'Sweep'}
                checked={input.sampler === 'Sweep'}
                id='sampler-Sweep'
                onChange={handleChange}
                required
              />
              <label htmlFor='sampler-Sweep'>Sweep</label>
            </BasicPage.RadioButtons>
          </div>
          {/* tick location info */}
          <div>
          <h4>Please either enter a start and stop time or choose a time block: *</h4>
          {/*           
    
    
    timeBlock: '',  // 30, less than 30, more than 30
    distance: '', // 100ft, less than 100, more than 100
    weather: '', // sun, clouds, wind, frost, rain, dew, fot, other, 
    weatherOther: '',
    envPhoto1: '', // *
    envPhoto2: '',
    additionalInfo: '',  */}
<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems:'center'}}>
          <label htmlFor={'timeStart'}>{'Start Time'}</label>
          <Styles.Input error={shouldMarkError('timeStart')}
            onBlur={() => handleBlur('timeStart')}
            type={'time'}
            name={'timeStart'}
            id={'timeStart'}
            required
            value={input.timeStart}
            onChange={handleChange}
            style={{maxWidth: '100px'}}
          />
          <Styles.ErrMessage error={shouldMarkError('timeStart')}>
            Please either enter a start and stop time or choose a time block.
          </Styles.ErrMessage>
          
          <label htmlFor={'timeEnd'}>{'End Time'}</label>
          <Styles.Input error={shouldMarkError('timeEnd')}
            onBlur={() => handleBlur('timeEnd')}
            type={'time'}
            name={'timeEnd'}
            id={'timeEnd'}
            required
            value={input.timeEnd}
            onChange={handleChange}
            style={{maxWidth: '100px'}}
          />
          <Styles.ErrMessage error={shouldMarkError('timeEnd')}>
            Please either enter a start and stop time or choose a time sampled.
          </Styles.ErrMessage>
          </div>
         
          
          {/* location buttons */}
          <div>
            <label htmlFor='timeBlock'>Time Sampled</label>
            <BasicPage.RadioButtons
              // style={{ flexWrap: 'wrap' }}
            >
              
               <input
                type='radio'
                name={'timeBlock'}
                value={'30Min'}
                checked={input.timeBlock === '30Min'}
                id='timeBlock-30Min'
                onChange={handleChange}
                required
              />
              <label htmlFor='timeBlock-30Min'>30 Minutes</label>

               <input
                type='radio'
                name={'timeBlock'}
                value={'less'}
                checked={input.timeBlock === 'less'}
                id='timeBlock-less'
                onChange={handleChange}
                required
              />
              <label htmlFor='timeBlock-less'>Less than 30 Minutes</label>

               <input
                type='radio'
                name={'timeBlock'}
                value={'more'}
                checked={input.timeBlock === 'more'}
                id='timeBlock-more'
                onChange={handleChange}
                required
              />
              <label htmlFor='timeBlock-more'>More than 30 Minutes</label>

              {/* {locationRadioElem} */}
            </BasicPage.RadioButtons>

          </div>
          <div>
            <label htmlFor='distance'>Distance Sampled</label>
            <BasicPage.RadioButtons>
              
               <input
                type='radio'
                name={'distance'}
                value={'100ft'}
                checked={input.distance === '100ft'}
                id='distance-100ft'
                onChange={handleChange}
                required
              />
              <label htmlFor='distance-100ft'>100 ft</label>

               <input
                type='radio'
                name={'distance'}
                value={'less'}
                checked={input.distance === 'less'}
                id='distance-less'
                onChange={handleChange}
                required
              />
              <label htmlFor='distance-less'>Less than 100 ft</label>

               <input
                type='radio'
                name={'distance'}
                value={'more'}
                checked={input.distance === 'more'}
                id='distance-more'
                onChange={handleChange}
                required
              />
              <label htmlFor='distance-more'>More than 100 ft</label>

              {/* {locationRadioElem} */}
            </BasicPage.RadioButtons>

          </div>

          <div>
            <label htmlFor='distance'>Distance Sampled</label>
            <BasicPage.RadioButtons>
              
               <input
                type='radio'
                name={'distance'}
                value={'100ft'}
                checked={input.distance === '100ft'}
                id='distance-100ft'
                onChange={handleChange}
                required
              />
              <label htmlFor='distance-100ft'>100 ft</label>

               <input
                type='radio'
                name={'distance'}
                value={'less'}
                checked={input.distance === 'less'}
                id='distance-less'
                onChange={handleChange}
                required
              />
              <label htmlFor='distance-less'>Less than 100 ft</label>

               <input
                type='radio'
                name={'distance'}
                value={'more'}
                checked={input.distance === 'more'}
                id='distance-more'
                onChange={handleChange}
                required
              />
              <label htmlFor='distance-more'>More than 100 ft</label>

              {/* {locationRadioElem} */}
            </BasicPage.RadioButtons>

          </div>
          <ImageInput maxNumImages={2}/>





          </div>
        {/* activities */}
          <Styles.TextCont>
            <label htmlFor='activities'>Describe activity/activities when tick(s) were acquired:</label>
            <textarea id='activities' name='activities' value={input.activities || ''} onChange={handleChange}></textarea>
          </Styles.TextCont>
           {/* photos */}
          <div>
            <p>
              Please submit at least one photo of the tick between 2kb and 4Mb in size.
            </p>
            <div>
              {/* <label htmlFor='front'>Photo 1</label>
              <input type='file' accept='image/*' onChange={handleFront} required id='front' /><br />
              <label htmlFor='back'>Photo 2</label>
              <input type='file' accept='image/*' onChange={handleBack} id='back' /><br /> */}
            </div>
            <p>Reminder: Review <BasicPage.InnieLink to='/photo'><span>How to Take a Tick Pic</span></BasicPage.InnieLink></p>
          </div>
          <Styles.TextCont>
            <label htmlFor='additionalInfo'>Any additional information about the environment, tick(s), and or person/pet:</label>
            <textarea id='additionalInfo' name='additionalInfo' value={input.additionalInfo || ''} onChange={handleChange}></textarea>
          </Styles.TextCont>
        </Styles.FormSection>
        
         <button onClick={handleSubmit} disabled={!isEnabled} style={{ borderRadius: '0.5rem', padding: '2rem', backgroundColor: theme.colors.ruYellow}}>Submit</button>

        <BasicPage.LinkButton.LinkSpec to={'/steps'}>
          <BasicPage.HoverCard>
            <BasicPage.LinkButton.CardSpecial>
              <span>Cancel</span>
            </BasicPage.LinkButton.CardSpecial>
          </BasicPage.HoverCard>
        </BasicPage.LinkButton.LinkSpec>

      </BasicPage.Form>
    </BasicPage.Text>
  )
}

export default BlitzSurvey