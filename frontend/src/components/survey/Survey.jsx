import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import SubmissionDataService from '../../services/submission'
import { theme } from '../../theme'
// import { createInputElems, createRadioElems } from '../../tools/createElemFunc'
import { BasicPage } from '../GeneralStyles'
import FormSelectionBlocks from '../ui/formSelectionBlocks/FormSelectionBlocks'
// import { attachedOptions, bittenInfoArray, foundOptions, inputElemArray1, inputElemArray2, locationOptions, yesNo } from './surveyFormData'

const Styles = {
  FormSection: styled.div`
  background-color: ${({ theme }) => theme.colors.ruYellow+40};
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
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
  
  `,
  ResponsiveDiv: styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:${({ theme }) => theme.mobile}) {
    max-width: 80%;
    }
  `,
  FormDiv: styled.div`
  margin: 1rem;
  `,
  PhotoLabel: styled.label`
  border: 2px solid ${({theme}) => theme.colors.ruTeal};
   border-radius: 0.5rem;
   display: inline-block;
   padding: 6px 12px;
   cursor: pointer;
   background-color: ${({theme}) => theme.colors.ruYellow}
  `,
  PhotoInput: styled.input`
  display: none;
  `,
}



const Survey = () => {

  const navigate = useNavigate()

  let initialState = {
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
    bittenTraveledDom: '',
    bittenTraveledIntl: '',
    travelInfo: '',
    photoFrontUrl: '',
    photoBackUrl: '',
    photoOtherUrl: '',
    additionalInfo: '',
  }

  let initialBlur = {
    userMuni: false,
    userZip: false,
    foundOn: false,
    foundOnOther: false,
    dateTickFound: false,
    tickMuni: false,
    tickCounty: false,
    tickZip: false,
    bittenMuni: false,
    bittenZip: false,
    locationDescOther: false,
    imageFront: false,
  }

  const [input, setInput] = useState(initialState)
  const [imageFront, setImageFront] = useState([])
  const [imageBack, setImageBack] = useState([])
  const [touched, setTouched] = useState(initialBlur)

  const handleChange = (evt) => {
    console.log('handling change')
    const { name, value, type, checked } = evt.target;
    console.log(name, value, type, checked);
    setInput((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === 'foundOn') {
      if (input.foundOn !== 'Person' && input.foundOn !== 'Animal')
        setInput(prevState => ({ ...prevState, tickAttached: '' }))
    }
  };

  const handleFront = evt => {
    // console.log('handling front')
    let file = evt.target.files[0]
    // console.log(file)
    if (file.size > 8000000) {
      alert(`Please reduce file size before uploading`)

      
    }
    else if (file.size < 200000) {
      alert(`Please check your image quality, image may be too small to view tick`)
      
    } else {
      setImageFront(file)
    }

    

  }
  const handleBack = evt => {
    console.log('handling back')
    let file = evt.target.files[0]
    if (file.size > 8000000) {
      alert(`Please reduce file size before uploading`)
      return
    }
    if (file.size < 200000) {
      alert(`Please check your image quality, image may be too small to view tick`)
      return
    }
    setImageBack(file)
  }

  const validate = (input) => {
    console.log('validating', input)
    return ({
      // true means invalid
      userMuni: input.userMuni.length === 0,
      userZip: input.userZip.length < 5,
      foundOn: input.foundOn.length === 0,
      foundOnOther: input.foundOn === 'Other' && input.foundOnOther.length === 0,
      dateTickFound: input.dateTickFound.length === 0 || new Date(input.dateTickFound) > new Date(),
      tickMuni: input.tickMuni.length === 0,
      tickCounty: input.tickCounty.length === 0,
      tickZip: input.tickZip.length < 5,
      bittenMuni: input.submitterBitten === 'No' && input.bittenMuni.length === 0,
      bittenZip: input.submitterBitten === 'No' && input.bittenZip.length === 0,
      locationDescOther: input.locationDesc === 'Other' && input.locationDescOther.length === 0,
    })
  }
  const errors = validate(input)
  const handleBlur = (field) => {
    console.log('handling blur')
    setTouched(prevState => ({ ...prevState, [field]: true }))
  }

  const isEnabled = !Object.values(errors).some(x => x === true) && imageFront?.name?.length > 0

  const shouldMarkError = (field) => {
    // console.log('markingError')
    let hasError = errors[field]
    let shouldShow = touched[field]
    return hasError ? shouldShow : false
  }



  const handleSubmit = async (evt) => {
    console.log('handling submit')
    try {
      evt.preventDefault();

      let errors = validate(input);
      // console.log(errors)


      if (Object.values(errors).some(x => x === true)) {
        alert('Please review the form and make sure all of the required fields have been completed.')
        return
      }
      if (imageFront.name.length === 0) {
        alert('Please include at least one image of the tick.')
        return
      }
      let data = Object.entries(input).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {})

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
      setInput(initialState);
      navigate(`/thanks?id=${id}`);
    }
    catch (err) {
      console.log(err.message)
    }
  }

  const foundArray = [
    { value: 'Person', required: true, label: 'Person' },
    { value: 'Animal', required: true, label: 'Animal' },
    { value: 'Environment/Outside', required: true, label: 'Environment/Outside' },
    { value: 'Other', required: true, label: 'Other' },
  ]

  const yesNoArray = [
    { value: 'yes', required: true, label: 'Yes' },
    { value: 'no', required: true, label: 'No' },
    { value: 'unknown', required: true, label: 'Unknown/Believe So' },
  ]

  return (
    <BasicPage.Text >
      <BasicPage.Title>Tick Submission Form</BasicPage.Title>

      <BasicPage.Form >
        {/* submitter info */}
        <Styles.FormSection>

          <h4>Submitter Information</h4>
          <Styles.ResponsiveDiv>
            <Styles.FormDiv>
              <label htmlFor={'userMuni'}>{'Municipality *'}</label>
              <Styles.Input error={shouldMarkError('userMuni')}
                onBlur={() => handleBlur('userMuni')}
                type={'text'}
                name={'userMuni'}
                id={'userMuni'}
                required
                placeholder={'Where you live'}
                value={input.userMuni}
                onChange={handleChange}
              />
              <Styles.ErrMessage error={shouldMarkError('userMuni')}>
                Please enter the city or town where you live.
              </Styles.ErrMessage>
            </Styles.FormDiv>
            <Styles.FormDiv>
              <label htmlFor={'userZip'}>{'ZIP Code *'}</label>
              <Styles.Input error={shouldMarkError('userZip')}
                onBlur={() => handleBlur('userZip')}
                type={'text'}
                name={'userZip'}
                id={'userZip'}
                required
                placeholder={'Where you live'}
                value={input.userZip}
                onChange={handleChange}
              />
              <Styles.ErrMessage error={shouldMarkError('userZip')}>
                Please enter the ZIP code where you live.
              </Styles.ErrMessage>
            </Styles.FormDiv>
          </Styles.ResponsiveDiv>

        </Styles.FormSection>
        {/* tick attached */}
        <Styles.FormSection>
          {/* tick attached */}
          <div>
            <h4>Tick Attachment Information</h4>
            <Styles.ResponsiveDiv>
              <Styles.FormDiv>
                <label htmlFor='foundOn'>Indicate on who/what tick(s) were found *:</label>

                <Styles.ErrMessage error={shouldMarkError('foundOn')}>
                  Please make a selection.
                </Styles.ErrMessage>

                <BasicPage.RadioButtons width='90%'>
                  <FormSelectionBlocks input={input} handleChange={handleChange} fieldName='foundOn' valueArray={foundArray} />
                </BasicPage.RadioButtons>
              </Styles.FormDiv>
              {input.foundOn === 'Other' && (
                <Styles.FormDiv>
                  <Styles.Input error={shouldMarkError('foundOnOther')}
                    onBlur={() => handleBlur('foundOnOther')}
                    type='text'
                    name='foundOnOther'
                    id='foundOnOther'
                    required={input.foundOn === 'Other'}
                    placeholder='Describe the object where you found the tick'
                    value={input.foundOnOther}
                    onChange={handleChange}
                  />
                  <Styles.ErrMessage error={shouldMarkError('foundOnOther')}>
                    Please describe the object on which you found the tick.
                  </Styles.ErrMessage>
                </Styles.FormDiv>
              )}
              {input.foundOn === 'Animal' && (
                <Styles.FormDiv>
                  <Styles.Input error={shouldMarkError('animal')}
                    onBlur={() => handleBlur('animal')}
                    type='text'
                    name='animal'
                    id='animal'
                    required={input.foundOn === 'Animal'}
                    placeholder='Specify Animal'
                    value={input.animal}
                    onChange={handleChange}
                  />
                  <Styles.ErrMessage error={shouldMarkError('animal')}>
                    Please describe the object on which you found the tick.
                  </Styles.ErrMessage>
                </Styles.FormDiv>
              )}

              {(input.foundOn === 'Person' || input.foundOn === 'Animal') && (
                <Styles.FormDiv>

                  <label htmlFor='tickAttached'>If tick(s) were found on person/animal, was it attached *?</label>
                  <Styles.ErrMessage error={shouldMarkError('tickAttached')}>
                    Please make a selection.
                  </Styles.ErrMessage>
                  <BasicPage.RadioButtons>
                    <FormSelectionBlocks input={input} handleChange={handleChange} fieldName='tickAttached' valueArray={yesNoArray} />
                  </BasicPage.RadioButtons>
                </Styles.FormDiv>
              )}
              {input.tickAttached === 'yes' && (
                <>
                  <Styles.ResponsiveDiv>
                    <Styles.FormDiv>
                      <label htmlFor='dateRemoved'>Date Removed *</label>
                      <Styles.Input error={shouldMarkError('dateRemoved')}
                        onBlur={() => handleBlur('dateRemoved')}
                        type={'date'}
                        name={'dateRemoved'}
                        id={'dateRemoved'}
                        required
                        value={input.dateRemoved}
                        onChange={handleChange}
                      />
                      <Styles.ErrMessage error={shouldMarkError('dateRemoved')}>
                        Please enter the date the tick was removed.
                      </Styles.ErrMessage>
                    </Styles.FormDiv>
                  </Styles.ResponsiveDiv>
                  {input.foundOn === 'Person' && (
                    <Styles.ResponsiveDiv>
                      <Styles.FormDiv>
                        <label htmlFor='submitterBitten'>Was submitter bitten by the tick? *</label>
                        <Styles.ErrMessage error={shouldMarkError('submitterBitten')}>
                          Please make a selection.
                        </Styles.ErrMessage>

                        <BasicPage.RadioButtons>
                          <input
                            type='radio'
                            name={'submitterBitten'}
                            value={'Yes'}
                            checked={input.submitterBitten === 'Yes'}
                            id='submitterBitten-Yes'
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor='submitterBitten-Yes'>Yes</label>
                          <input
                            type='radio'
                            name={'submitterBitten'}
                            value={'No'}
                            checked={input.submitterBitten === 'No'}
                            id='submitterBitten-No'
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor='submitterBitten-No'>No</label>
                        </BasicPage.RadioButtons>
                      </Styles.FormDiv>
                      {input.submitterBitten === 'No' && (
                        <Styles.ResponsiveDiv>
                          <Styles.FormDiv>
                            <label htmlFor={'bittenMuni'}>{'Municipality of bitten person *'}</label>
                            <Styles.Input error={shouldMarkError('bittenMuni')}
                              onBlur={() => handleBlur('bittenMuni')}
                              type={'text'}
                              name={'bittenMuni'}
                              id={'bittenMuni'}
                              required
                              placeholder={'Where bitten person lives'}
                              value={input.bittenMuni}
                              onChange={handleChange}
                            />
                            <Styles.ErrMessage error={shouldMarkError('bittenMuni')}>
                              Please enter the city or town where the bitten person lives.
                            </Styles.ErrMessage>
                          </Styles.FormDiv><Styles.FormDiv>
                            <label htmlFor={'bittenZip'}>{'ZIP Code of bitten person *'}</label>
                            <Styles.Input error={shouldMarkError('bittenZip')}
                              onBlur={() => handleBlur('bittenZip')}
                              type={'text'}
                              name={'bittenZip'}
                              id={'bittenZip'}
                              required
                              placeholder={'Where bitten person lives'}
                              value={input.bittenZip}
                              onChange={handleChange}
                            />
                            <Styles.ErrMessage error={shouldMarkError('bittenZip')}>
                              Please enter the ZIP code where the bitten person lives.
                            </Styles.ErrMessage>
                          </Styles.FormDiv>
                        </Styles.ResponsiveDiv>)}


                      <Styles.FormDiv >
                        <label htmlFor='locationDesc'>Has the bitten person traveled outside of New Jersey within the past 10 days?</label>
                        <Styles.ErrMessage error={shouldMarkError('bittenTraveled')}>
                          Please make a selection.
                        </Styles.ErrMessage>

                        <BasicPage.RadioButtons>
                          <input
                            type='radio'
                            name={'bittenTraveled'}
                            value={'Yes'}
                            checked={input.bittenTraveled === 'Yes'}
                            id='bittenTraveled-Yes'
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor='bittenTraveled-Yes'>Yes</label>
                          <input
                            type='radio'
                            name={'bittenTraveled'}
                            value={'No'}
                            checked={input.bittenTraveled === 'No'}
                            id='bittenTraveled-No'
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor='bittenTraveled-No'>No</label>
                        </BasicPage.RadioButtons>
                      </Styles.FormDiv>

                      {input.bittenTraveled === 'Yes' && (
                        <Styles.FormDiv>
                          <Styles.TextCont>
                            <label htmlFor='travelInfo'>Where did the bitten person travel?</label>
                            <textarea rows={5} id='travelInfo' name='travelInfo' value={input.travelInfo} onChange={handleChange} placeholder='You can grab onto the lower right corner and drag to make this text area larger.'></textarea>
                          </Styles.TextCont>
                        </Styles.FormDiv>
                      )}


                    </Styles.ResponsiveDiv>

                  )}

                </>
              )}

            </Styles.ResponsiveDiv>
          </div>
        </Styles.FormSection>
        {/* tick location info */}
        <Styles.FormSection>

          <div>
            <h4>Tick Location Information</h4>
            <Styles.ResponsiveDiv>
              <Styles.FormDiv>
                <label htmlFor={'dateTickFound'}>{'Date tick was found *'}</label>
                <Styles.Input error={shouldMarkError('dateTickFound')}
                  onBlur={() => handleBlur('dateTickFound')}
                  type={'date'}
                  name={'dateTickFound'}
                  id={'dateTickFound'}
                  required
                  value={input.dateTickFound}
                  onChange={handleChange}
                />
                <Styles.ErrMessage error={shouldMarkError('dateTickFound')}>
                  Please enter the date the tick was found.  That date cannot be in the future.
                </Styles.ErrMessage>
              </Styles.FormDiv>
              <Styles.FormDiv>
                <label htmlFor={'tickMuni'}>{'Municipality where tick was found *'}</label>
                <Styles.Input error={shouldMarkError('tickMuni')}
                  onBlur={() => handleBlur('tickMuni')}
                  type={'text'}
                  name={'tickMuni'}
                  id={'tickMuni'}
                  required
                  value={input.tickMuni}
                  onChange={handleChange}
                />
                <Styles.ErrMessage error={shouldMarkError('tickMuni')}>
                  Please enter the city or town where the tick was found.
                </Styles.ErrMessage>
              </Styles.FormDiv>
              <Styles.FormDiv>
                <label htmlFor={'tickCounty'}>{'County where tick was found *'}</label>
                <Styles.Input error={shouldMarkError('tickCounty')}
                  onBlur={() => handleBlur('tickCounty')}
                  type={'text'}
                  name={'tickCounty'}
                  id={'tickCounty'}
                  required
                  value={input.tickCounty}
                  onChange={handleChange}
                />
                <Styles.ErrMessage error={shouldMarkError('tickCounty')}>
                  Please enter the county where the tick was found.
                </Styles.ErrMessage>
              </Styles.FormDiv>
              <Styles.FormDiv>
                <label htmlFor={'tickZip'}>{'ZIP code where tick was found *'}</label>
                <Styles.Input error={shouldMarkError('tickZip')}
                  onBlur={() => handleBlur('tickZip')}
                  type={'text'}
                  name={'tickZip'}
                  id={'tickZip'}
                  required
                  value={input.tickZip}
                  onChange={handleChange}
                />
                <Styles.ErrMessage error={shouldMarkError('tickZip')}>
                  Please enter the ZIP code where the tick was found.
                </Styles.ErrMessage>
              </Styles.FormDiv>
              <Styles.FormDiv>
                {/* location buttons */}

                <label htmlFor='locationDesc'>Descriptor of Location*</label>
                <BasicPage.RadioButtons
                // style={{ flexWrap: 'wrap' }}
                >

                  <input
                    type='radio'
                    name={'locationDesc'}
                    value={'Backyard'}
                    checked={input.locationDesc === 'Backyard'}
                    id='locationDesc-Backyard'
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='locationDesc-Backyard'>Backyard</label>

                  <input
                    type='radio'
                    name={'locationDesc'}
                    value={'Park/Playground'}
                    checked={input.locationDesc === 'Park/Playground'}
                    id='locationDesc-Park/Playground'
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='locationDesc-Park/Playground'>Park/Playground</label>

                  <input
                    type='radio'
                    name={'locationDesc'}
                    value={'Recreational area outside'}
                    checked={input.locationDesc === 'Recreational area outside'}
                    id='locationDesc-Recreational'
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='locationDesc-Recreational'>Recreational area outside</label>

                  <input
                    type='radio'
                    name={'locationDesc'}
                    value={'Forest/Wooded area'}
                    checked={input.locationDesc === 'Forest/Wooded area'}
                    id='locationDesc-Forest/Wooded area'
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='locationDesc-Forest/Wooded area'>Forest/Wooded area</label>

                  <input
                    type='radio'
                    name={'locationDesc'}
                    value={'Field/Grassy area'}
                    checked={input.locationDesc === 'Field/Grassy area'}
                    id='locationDesc-Field/Grassy area'
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='locationDesc-Field/Grassy area'>Field/Grassy area</label>

                  <input
                    type='radio'
                    name={'locationDesc'}
                    value={'Garden/Agriculture'}
                    checked={input.locationDesc === 'Garden/Agriculture'}
                    id='locationDesc-Garden/Agriculture'
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='locationDesc-Garden/Agriculture'>Garden/Agriculture</label>

                  <input
                    type='radio'
                    name={'locationDesc'}
                    value={'Other'}
                    checked={input.locationDesc === 'Other'}
                    id='locationDesc-Other'
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='locationDesc-Other'>Other</label>
                  {/* {locationRadioElem} */}
                </BasicPage.RadioButtons>
              </Styles.FormDiv>

              {input.locationDesc === 'Other' && (
                <Styles.FormDiv>
                  <Styles.Input error={shouldMarkError('locationDescOther')}
                    onBlur={() => handleBlur('locationDescOther')}
                    type={'text'}
                    name={'locationDescOther'}
                    id={'locationDescOther'}
                    required
                    placeholder={'Describe the location where you found the tick*'}
                    value={input.locationDescOther}
                    onChange={handleChange}
                  />
                  <Styles.ErrMessage error={shouldMarkError('locationDescOther')}>
                    Please describe the location where you found the tick.
                  </Styles.ErrMessage>
                </Styles.FormDiv>

              )}
          
        </Styles.ResponsiveDiv>
      </div>
      {/* activities */}
      <Styles.TextCont>
        <label htmlFor='activities'>Describe activity/activities when tick(s) were acquired:</label>
        <textarea id='activities' name='activities' value={input.activities || ''} onChange={handleChange} placeholder='You can grab onto the lower right corner and drag to make this text area larger.' ></textarea>
      </Styles.TextCont>
      </Styles.FormSection>
      {/* photos */}
      <Styles.FormSection>
        <h3>
          Please submit at least one photo of the tick between 2kb and 8Mb in size.
        </h3>
        <Styles.FormDiv>
          <Styles.PhotoLabel  htmlFor='front'>Photo 1</Styles.PhotoLabel>
          <Styles.PhotoInput type='file' accept='image/*' onChange={handleFront} required id='front'  />
          {imageFront.size && <p>Photo 1 has been added</p>}
          
         
          <Styles.PhotoLabel htmlFor='back'>Photo 2</Styles.PhotoLabel>
          <Styles.PhotoInput type='file' accept='image/*' onChange={handleBack} id='back'   />
          {imageBack.size && <p>Photo 2 has been added</p>}
          
        </Styles.FormDiv>
        <p>Reminder: Review <BasicPage.InnieLink to='/photo'><span>How to Take a Tick Pic</span></BasicPage.InnieLink></p>
      </Styles.FormSection>
      <Styles.FormSection>
            <Styles.TextCont>
        <label htmlFor='additionalInfo'>Any additional information about the environment, tick(s), and or person/pet:</label>
        <textarea id='additionalInfo' name='additionalInfo' value={input.additionalInfo || ''} onChange={handleChange} placeholder='You can grab onto the lower right corner and drag to make this text area larger.' ></textarea>
      </Styles.TextCont>
    </Styles.FormSection>
        { !isEnabled && <h4>Please scan the form for missing information and complete the form in order to make the submit button active.</h4> }
        <button onClick={handleSubmit} disabled={!isEnabled} style={{ borderRadius: '0.5rem', padding: '2rem', backgroundColor: theme.colors.ruYellow }}>Submit</button>

        <BasicPage.LinkButton.LinkSpec to={'/steps'}>
          <BasicPage.HoverCard>
            <BasicPage.LinkButton.CardSpecial>
              <span>Cancel</span>
            </BasicPage.LinkButton.CardSpecial>
          </BasicPage.HoverCard>
        </BasicPage.LinkButton.LinkSpec>

      </BasicPage.Form >
    </BasicPage.Text >
  )
}
export default Survey

