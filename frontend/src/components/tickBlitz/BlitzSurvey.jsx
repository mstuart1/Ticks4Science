import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../theme'
import { BasicPage } from '../GeneralStyles'
import ImageInput from '../ui/imageInput/ImageInput'
import FormSelectionBlocks from '../ui/formSelectionBlocks/FormSelectionBlocks'
import RenderIf from '../../tools/RenderIf'
import BorderlessFloatButton from '../ui/borderlessFloatButton/BorderlessFloatButton'

const Styles = {
  Label: styled.label`
  margin-right: 1rem;
  `,
  FormSection: styled.div`
  background-color: #f2f2f2;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
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

const BlitzSurvey = () => {

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
  const [touched, setTouched] = useState(initialBlur)
  const [images, setImages] = useState([]);

  const handleChange = (evt) => {

    const { name, value, type, checked } = evt.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));

  };

  const validate = (input, photoArray) => {
    // console.log('validating', input)
    return ({
      // true means invalid
      blitzLoc: input.blitzLoc.length === 0,
      blitzZip: input.blitzZip && Number.isNaN,
      sampler: input.sampler.length === 0, 
      timeStart: input.timeBlock === 0 && input.timeStart.length === 0,  
      timeEnd: input.timeStart.length > 0 && input.timeEnd.length === 0,  
      timeBlock: input.timeStart.length === 0 && input.timeBlock === 0,
      distance: input.distance.length === 0,
      weather: input.weather.length === 0,
      weatherOther: input.weather === 'other' && input.weatherOther.length === 0,
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

      if (Object.values(errors).some(x => x === true)) {
        alert('Please review the form and make sure all of the required fields have been completed.')
        return
      }
      if(images.length === 0){
        alert('Please include at least one image of the tick blitz.')
        return
      }
      let data = Object.entries(input).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {})

      const formData = new FormData();
      formData.append('photos', images)
      
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
      navigate(`/`);
    }
    catch (err) {
      console.log(err.message)
    }
  }

  const samplerArray = [
    { value: 'drag', required: true, label: 'Drag' },
    { value: 'flag', required: true, label: 'Flag' },
    { value: 'sweep', required: true, label: 'Sweep' },
  ]
  const timeBlockArray = [
    { value: '30Min', required: true, label: '30 minutes' },
    { value: 'less', required: true, label: 'Less than 30 minutes' },
    { value: 'more', required: true, label: 'More than 30 minutes' },

  ]
  const distanceArray = [
    { value: '100ft', required: true, label: '100 feet' },
    { value: 'less', required: true, label: 'Less than 100 feet' },
    { value: 'more', required: true, label: 'More than 100 feet' },
  ]
  const weatherArray = [
    { value: 'sun', required: true, label: 'Sun' },
    { value: 'clouds', required: true, label: 'Clouds' },
    { value: 'wind', required: true, label: 'Wind' },
    { value: 'frost', required: true, label: 'Frost' },
    { value: 'rain', required: true, label: 'Rain' },
    { value: 'dew', required: true, label: 'Dew' },
    { value: 'fog', required: true, label: 'Fog' },
    { value: 'other', required: true, label: 'Other' },
  ]

  return (
    <BasicPage.Text >
      <BasicPage.Title>Tick Blitz Submission Form</BasicPage.Title>

      <BasicPage.Form style={{ width: '80%' }} >
        <Styles.FormSection>
          <div>
            <Styles.Label htmlFor={'blitzLoc'}>{'Blitz Location *'}</Styles.Label>
            <Styles.Input error={shouldMarkError('blitzLoc')}
              onBlur={() => handleBlur('blitzLoc')}
              type={'text'}
              name={'blitzLoc'}
              id={'blitzLoc'}
              required
              placeholder={'Where did it take place?'}
              value={input.blitzLoc}
              onChange={handleChange}
            />
            <Styles.ErrMessage error={shouldMarkError('blitzLoc')}>
              Please enter the city or town where the Tick Blitz occurred.
            </Styles.ErrMessage>
          </div>
          <div>
            <Styles.Label htmlFor={'blitzZip'}>{'ZIP Code'}</Styles.Label>
            <Styles.Input error={shouldMarkError('blitzZip')}
              onBlur={() => handleBlur('blitzZip')}
              type={'text'}
              name={'blitzZip'}
              id={'blitzZip'}
              placeholder={'Where did it occur?'}
              value={input.blitzZip}
              onChange={handleChange}
            />
          </div>
        </Styles.FormSection>
        <Styles.FormSection>
          <Styles.Label htmlFor='sampler'>What type of sampler was used?*</Styles.Label>
          <Styles.ErrMessage error={shouldMarkError('sampler')}>
            Please make a selection.
          </Styles.ErrMessage>
          <BasicPage.RadioButtons>
            <FormSelectionBlocks input={input} handleChange={handleChange} fieldName='sampler' valueArray={samplerArray} />
          </BasicPage.RadioButtons>
        </Styles.FormSection>
        <Styles.FormSection>
          {/* tick location info */}

          <p>Time Sampled * </p>
          <Styles.TextCont>
            <h4>Please choose to enter a start and stop time or select a time block: </h4>
            <div style={{margin: '1rem 0'}}>
              <Styles.Label htmlFor={'timeStart'}>{'Start Time'}</Styles.Label>
              <Styles.Input error={shouldMarkError('timeStart')}
                onBlur={() => handleBlur('timeStart')}
                type={'time'}
                name={'timeStart'}
                id={'timeStart'}
                required
                value={input.timeStart}
                onChange={handleChange}
                style={{ maxWidth: '100px' }}
              />
              <Styles.ErrMessage error={shouldMarkError('timeStart')}>
                Please either enter a start and stop time or choose a time block.
              </Styles.ErrMessage>
              <br/>
              <Styles.Label htmlFor={'timeEnd'}>{'End Time'}</Styles.Label>
              <Styles.Input error={shouldMarkError('timeEnd')}
                onBlur={() => handleBlur('timeEnd')}
                type={'time'}
                name={'timeEnd'}
                id={'timeEnd'}
                required
                value={input.timeEnd}
                onChange={handleChange}
                style={{ maxWidth: '100px' }}
              />
              <Styles.ErrMessage error={shouldMarkError('timeEnd')}>
                Please either enter a start and stop time or choose a time sampled.
              </Styles.ErrMessage>
            </div>
            <BasicPage.RadioButtons>
              <FormSelectionBlocks input={input} handleChange={handleChange} fieldName='timeBlock' valueArray={timeBlockArray} />
            </BasicPage.RadioButtons>

          </Styles.TextCont>
        </Styles.FormSection>
        <Styles.FormSection>
          <Styles.Label htmlFor='distance'>Distance Sampled * </Styles.Label>
          <BasicPage.RadioButtons>
            <FormSelectionBlocks input={input} handleChange={handleChange} fieldName='distance' valueArray={distanceArray} />
          </BasicPage.RadioButtons>
        </Styles.FormSection>
        <Styles.FormSection style={{ justifyContent: 'flex-start' }}>
          <Styles.Label htmlFor='weather'>Weather * </Styles.Label>
          <BasicPage.RadioButtons>
            <FormSelectionBlocks input={input} handleChange={handleChange} fieldName='weather' valueArray={weatherArray} />
          </BasicPage.RadioButtons>
        </Styles.FormSection>
        

          <RenderIf isTrue={input.weather === 'other'}>
          <Styles.FormSection>
            <Styles.Input error={shouldMarkError('weatherOther')}
              onBlur={() => handleBlur('weatherOther')}
              type='text'
              name='weatherOther'
              id='weatherOther'
              required={input.foundOn === 'Other'}
              placeholder='Describe the weather'
              value={input.weatherOther}
              onChange={handleChange}
            />
            <Styles.ErrMessage error={shouldMarkError('weatherOther')}>
              Please describe the weather during the tick blitz.
            </Styles.ErrMessage>
            </Styles.FormSection>
          </RenderIf>
        
        <Styles.FormSection>
          <h4>Submit Pictures of Tick Blitz Sites * <br /> (choose 2 of the best environmental photos)</h4>
          <ImageInput maxNumImages={2} images={images} setImages={setImages} />
        </Styles.FormSection>
        <Styles.FormSection>
        <Styles.TextCont>
            <Styles.Label htmlFor='additionalInfo'>Any additional relevant information about the environment, collection activities, and sampling distance</Styles.Label>
            <textarea id='additionalInfo' name='additionalInfo' value={input.additionalInfo} onChange={handleChange}></textarea>
          </Styles.TextCont>
        </Styles.FormSection>
        <RenderIf isTrue={!isEnabled}>
          <p>The submit button will appear when you have completed the form. Please scroll up to view any error messages that may have occurred.</p>
        </RenderIf>
        <RenderIf isTrue={isEnabled}>
        <BorderlessFloatButton colors={{bg: theme.colors.ruYellow}} handleClick={handleSubmit} text='Submit' />
        </RenderIf>
        <BorderlessFloatButton colors={{text: theme.colors.ruTeal, shadow: theme.colors.ruTeal}} text='Cancel' handleClick={() => navigate('/tickBlitz')} />
      </BasicPage.Form>
    </BasicPage.Text>
  )
}

export default BlitzSurvey