import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SubmissionDataService from "../../services/submission";
import { BasicPage } from "../GeneralStyles";
import styles from './Survey.module.css'
import SubmitterInfo from "./SubmitterInfo";
import TickAttached from "./TickAttached";
import TickLocation from "./TickLocation";
import PhotoSection from "./PhotoSection"
import AdditionalInfo from "./AdditionalInfo"
import getFormValues from "./getFormValues";
import extractFromObj from "../../tools/extractFromObj";
import renameKeys from "../../tools/renameKeys";
import OutlineFloatButton from '../ui/outlineFloatButton/OutlineFloatButton'
import GenericInput from "../ui/GenericInput";
// import SurveyForm from "./SurveyForm";

const Survey = () => {
  const navigate = useNavigate();

  let initialTick = { key: 0, userMuni: '', userZip: '', email: '', dateTickFound: '', foundOn: '', foundOnOther: '', tickAttached: '', animal: '', dateRemoved: '', tickLocation: '', locationDesc: '', locationDescOther: '', tickMuni: '', tickCounty: '', tickZip: '', activities: '', personBitten: '', submitterBitten: '', bittenMuni: '', bittenZip: '', bittenTraveledDom: '', bittenTraveledIntl: '', travelInfo: '', photoFrontUrl: '', photoBackUrl: '', additionalInfo: '', blitzLoc: '', blitzZip: '', sampler: '', timeStart: '', timeEnd: '', timeBlock: '', distance: '', weather: '', weatherOther: '', blitzPhotos: '', blitzAddInfo: '' }


  const [inProgress, setInProgress] = useState(false);
  const [error, setError] = useState('');
  const [numTicks, setNumTicks] = useState(1);
  const [ticks, setTicks] = useState([initialTick])

  const handleFormData = ({target: {name, value}}) => {
    let id = parseInt(name.split(',')[1]);
    name = name.split(',')[0] ;
    setTicks((prev) => prev.map((tick) => parseInt(tick.key) === parseInt(id) ? { ...tick, [name]: value } : tick))
  }

  const handleNumTicks = ({ target: { value } }) => {
    setNumTicks(value)
    setTicks((prev) => [...prev, { ...initialTick, key: parseInt(value-1) }])

  }
  const handleSubmit = async (evt, index) => {

    try {
      // setInProgress(true);
      evt.preventDefault();
      console.log('index', index)
      const { data } = getFormValues(evt.currentTarget);
      console.log('data', data[`tick1.imageFront`].type)
      // let id = 0
      // let idArray = []
      // for (let i = 0; i <= numTicks; i++) {
      //   let allTicksKeys = Object.keys(data).filter((key) => !key.includes(`tick`));
      //   let oneTickKeys = Object.keys(data).filter((key) => key.includes(`tick${i}`));
      //   const allTickData = extractFromObj(data, allTicksKeys)
      //   const oneTickData = extractFromObj(data, oneTickKeys)
      //   const renamedData = renameKeys(oneTickData, `tick${i}.`, '')
      //   const mergedData = { ...allTickData, ...renamedData }

      //   if (!data[`tick${i}.imageFront`].type.includes('image') || (!!data[`tick${i}.imageBack`] && !data[`tick${i}.imageBack`].type.includes('image'))) {
      //     console.log('error')
      //     setError(`Tick ${i} has an invalid image file type. Please upload a valid image file type.`)
      //     return
      //   }
      //   let photoFormData = new FormData();
      //   console.log('photo data', data[`tick${i}.imageFront`.type])
      //   photoFormData.append("photos", data[`tick${i}.imageFront`]);
      //   photoFormData.append("photos", data[`tick${i}.imageBack`]);

      //   const config = {
      //     headers: {
      //       "content-type": "multipart/form-data",
      //     },
      //   };

      //   let response = await SubmissionDataService.submitForm(mergedData);
      //   id = response.data.data.id;
      //   idArray.push(id)
      //   console.log("sent form, now sending photos", response);
      //   let response2 = await SubmissionDataService.submitImage(id, photoFormData, config).catch(err => {setError(`Tick ${i} has an invalid image file type. Please upload a valid image file type.`); return null});
      //   console.log('response', response2)
      // }
      // if (numTicks > 1) {
      //   navigate('/thanks', {state: {id: idArray}})
      // } else {
      //   navigate(`/thanks`, {state: {id: id}});
      // }




      // // alert(JSON.stringify(response.data))

    } catch (err) {
      setError(true)
    }
  };

  const generateForm = () => {
    let form = [];
    for (let i = 0; i <= numTicks-1; i++) {
      let currentTick = ticks.find((tick) => tick.key === i)
      form.push(

        <details open={numTicks === 1} className={styles.details} key={i}>
          <summary className={styles.summary}>Tick {i+1}<span style={{ color: '#c00300', marginLeft: '0.5rem' }}>ID# will generate when you submit the form</span> </summary>
          {i > 1 && <OutlineFloatButton colors={{ text: '#00626d', shadow: '#00626d', bg: '#ebb600' }} handleClick={(evt) => handleSubmit(evt, i)} text='Use previous tick info' />}
          <form onSubmit={handleSubmit} className={styles.form}>
            <SubmitterInfo id={i} data={currentTick} handleChange={handleFormData} />
            {numTicks > 1 ? <p style={{ padding: '0 10rem' }}>Click each tick to answer questions.</p> : null}
               <TickAttached id={i} data={currentTick} handleData={handleFormData} />
             <TickLocation id={i} handleData={handleFormData} data={currentTick}/>
          <PhotoSection id={i} />
            <div className={styles.btnDiv}>
              <button className={styles.submitBtn}>
                <span className={styles.submitSpan}>Save this tick</span>
              </button>

              <BasicPage.LinkButton.LinkSpec to={"/steps"}>
                <BasicPage.HoverCard>
                  <BasicPage.LinkButton.CardSpecial>
                    <span>Cancel</span>
                  </BasicPage.LinkButton.CardSpecial>
                </BasicPage.HoverCard>
              </BasicPage.LinkButton.LinkSpec>
            </div>
          </form>
        </details>

      );
    }
    return form;
  }

  let formElems = generateForm();

  console.log('ticks', ticks)

  if (error.length) {
    return (<div className={styles.errorDiv}><h1>{error ?? 'There was an error processing your form.'}</h1>
      <OutlineFloatButton colors={{ text: '#00626d', shadow: '#00626d', bg: '#00626d' }} handleClick={() => navigate(0)} text='Return to Survey'
      />
    </div>)
  }

  if (inProgress) {
    return (<div style={{ width: '100vw', height: '100vh' }}><h1>Submitting form...</h1></div>)
  }


  return (
    <div className={styles.text}>
      <h2 className={styles.title}>Tick Submission Form</h2>


      <div className={styles.form}>
        <p>Answer the questions below to the best of your ability; if you do not remember the exact dates or locations give your best estimate.</p>
        <div className={styles.formSection}>
          How many ticks do you intend to mail in?
          <input className={styles.input} type="number" min="1" onChange={handleNumTicks} value={numTicks} />
          {numTicks > 1 ? (<p> <span className={styles.specialText}>*Note: Before mailing ticks in, they must be labeled with the corresponding number you assign them below (i.e Tick 1, Tick 2, etc). You must also label somewhere in/on the envelope the tick ID number you receive after submitting this form. See example of acceptable submissions <Link to='/multipleExample' target="_blank">here</Link>. </span> </p>) : null}
        </div>
      </div>

      {formElems}



      {/* {numTicks > 1 ? <p style={{padding: '0 10rem'}}>If the form will not submit, click each tick (for example "Tick 1") to open the question section.  If the section is open when submitting, it will display which question is preventing the form from submitting.</p> : null} */}



    </div>
  );
};
export default Survey;

