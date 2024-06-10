import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SubmissionDataService from "../../services/submission";
import styles from './Survey.module.css'
import SubmitterInfo from "./SubmitterInfo";
import TickAttached from "./TickAttached";
import TickLocation from "./TickLocation";
import PhotoSection from "./PhotoSection"
import extractFromObj from "../../tools/extractFromObj";
import OutlineFloatButton from '../ui/outlineFloatButton/OutlineFloatButton'
import BorderlessFloatButton from '../ui/borderlessFloatButton/BorderlessFloatButton'

const Survey = () => {
  const navigate = useNavigate();

  let initialTick = { key: 0, userMuni: '', userZip: '', email: '', dateTickFound: '', foundOn: '', foundOnOther: '', tickAttached: '', animal: '', dateRemoved: null, locationDesc: '', locationDescOther: '', tickMuni: '', tickCounty: '', tickZip: '', activities: '', personBitten: '', submitterBitten: '', bittenMuni: '', bittenZip: '', bittenTraveledDom: '', bittenTraveledIntl: '', travelInfo: '', imageFront: '', imageBack: '', additionalInfo: '', blitzLoc: '', blitzZip: '', sampler: '', timeStart: '', timeEnd: '', timeBlock: '', distance: '', weather: '', weatherOther: '', blitzPhotos: '', blitzAddInfo: '' }

  let requiredFields = ['userMuni', 'userZip', 'dateTickFound', 'foundOn', 'locationDesc', 'tickMuni', 'tickCounty', 'tickZip', 'imageFront',]

  const [inProgress, setInProgress] = useState(false);
  const [error, setError] = useState('');
  const [numTicks, setNumTicks] = useState(1);
  const [ticks, setTicks] = useState([initialTick])
  const [showSurvey, setShowSurvey] = useState(false)

  const handleValidate = () => {
    let formIsValid = true;
    ticks.forEach(tick => {
      console.log('checking tick', tick.key + 1)
      let required = extractFromObj(tick, requiredFields)
      console.log('tick image', tick.imageFront)
      console.log('emptyFields', Object.entries(required).filter(item => (item[1] === undefined || item[1] === null || item[1].length === 0  )))
      
      // console.log('checking empty fields', emptyFields)
      let emptyFields = Object.entries(required).filter(item => (item[1] === undefined || item[1] === null || item[1].length === 0 ))
      if (emptyFields.length > 0) {
        alert(`Please fill out all of the fields with an asterisk for tick ${tick.key + 1}`)
        return formIsValid = false;
      }
      // console.log('checking tickAttached')
      if ((tick.foundOn === 'Person' || tick.foundOn === 'Animal') && tick.tickAttached.length === 0) {
        alert(`Please fill out the tick attached field for tick ${tick.key + 1}`)
        return formIsValid = false;
      }
      // console.log('checking personBitten')
      if ((tick.foundOn === 'Person' || tick.foundOn === 'Animal') && tick.personBitten.length === 0) {
        alert(`Please fill out if the subject was bitten tick ${tick.key + 1}`)
        return formIsValid = false;
      }
      // console.log('checking animal')
      if (tick.foundOn === 'Animal' && tick.animal === '') {
        alert(`Please fill out the tick kind of animal for tick ${tick.key}`)
        return formIsValid = false;
      }
      // console.log('checking dateRemoved')
      if (tick.tickAttached === 'yes' && tick.dateRemoved === null) {
        alert(`Please fill out the date removed field for tick ${tick.key + 1}`)
        return formIsValid = false;
      }
      // console.log('checking bittenMuni')
      if (tick.personBitten === 'yes' && tick.bittenMuni === '') {
        alert(`Please fill out city of bitten subject for tick ${tick.key + 1}`)
        return formIsValid = false;
      }
      // console.log('checking bittenZip')
      if (tick.personBitten === 'yes' && tick.bittenZip === '') {
        alert(`Please fill out zip code of bitten subject for tick ${tick.key + 1}`)
        return formIsValid = false;
      }
      // console.log('checking traveled')
      if (tick.personBitten === 'yes' && tick.bittenTraveledDom === '') {
        alert(`Please fill out if bitten subject has traveled for tick ${tick.key + 1}`)
        return formIsValid = false;
      }
      // console.log('checking photo', tick.key)
      if (!tick.imageFront.type.includes('image')) {
        alert(`Please check the file type for the first image of tick ${tick.key + 1}, it cannot be a file type other than an image file type.  A pdf is not an image file type.`)
        return formIsValid = false;
      }
      console.log('done checking tick', tick.key + 1)
    })
    return formIsValid
  }

  const handleFormData = ({ target: { name, value } }) => {
    let id = parseInt(name.split(',')[1]);
    let realName = name.split(',')[0];
    setTicks((prev) => prev.map((tick) => parseInt(tick.key) === parseInt(id) ? { ...tick, [realName]: value } : tick))
  }

  const handlePhoto = ({ target: { name, files } }) => {
    console.log('name', name)
    let id = parseInt(name.split(',')[1]);
    name = name.split(',')[0];
    let file = files[0];
    setTicks((prev) => prev.map((tick) => parseInt(tick.key) === parseInt(id) ? { ...tick, [name]: file } : tick))
  }

  const handleNumTicks = ({ target: { value } }) => {
    setNumTicks(value)
    if (value < ticks.length) {
      let freshTicks = ticks.filter(tick => tick.key < value)
    setTicks(freshTicks)

  } else {
      setTicks((prev) => [...prev, { ...initialTick, key: parseInt(value - 1) }])
  }
}
  const handleSubmit = async (evt) => {

    try {
      setInProgress(true);
      evt.preventDefault();
      const formIsValid = handleValidate()
      if (!formIsValid) {
        setInProgress(false)
        return
      }
      let response = await SubmissionDataService.submitBulkForm(ticks);
      let ids = response.data.data.map(item => item.id)
      // console.log('ids', ids)
      for await (let id of ids){
        let index = ids.indexOf(id)
        let tick = ticks.find(tick => tick.key === index)
        let photoFormData = new FormData();
        photoFormData.append("photos", tick.imageFront);
        photoFormData.append("photos", tick.imageBack);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        let response2 = await SubmissionDataService.submitImage(id, photoFormData, config).catch(err => { console.log(err) });
        // console.log('response', response2)

      }

      navigate('/thanks', { state: { id: ids } })
      // // alert(JSON.stringify(response.data))

    } catch (err) {
      setError(true)
    }
  };

  const handleCopyTick = (key) => {
    let copiedTick = ticks.find(tick => tick.key === key - 1)
    let freshTicks = ticks.map(tick => tick.key === key ? { ...copiedTick, key: key, imageFront: '', imageBack: '' } : tick)
    setTicks(freshTicks)
  }

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
        <p> Answer the questions below to the best of your ability; if you do not remember the exact dates or locations give your best estimate.</p>
        <p className={styles.specialText}> 
        
            *Note: Tick(s) must be in a sealed baggie or taped down with their tick ID number(s) before mailing in. DO NOT wrap ticks in tissues, paper towels, etc before mailing in. Wrapping ticks in tissue/paper towels make it more likely that the tick will get lost upon opening. Therefore, if you choose to send your tick in a plastic baggie do not include anything other than the tick inside the baggie. 
        </p><p className={styles.specialText}> You will get a tick ID number after submitting this form which must be included somewhere in/on your envelope. If you are submitting multiple ticks, you will be assigned multiple ID numbers and must label each tick with their corresponding number.  See examples of acceptable submissions <Link to='/multipleExample' target="_blank">here</Link>. 
          </p>
      <div className={styles.checkboxDiv}>
        <label>
      Click the box to acknowledge the message in red
      </label>
        <input className={styles.input} type="checkbox" onChange={(evt) => setShowSurvey(evt.target.checked)}/>
      </div>
      </div>
      {showSurvey && (
        <>
         <div className={styles.formSection}>
          How many ticks do you intend to mail in?
          <input className={styles.input} type="number" min="1" onChange={handleNumTicks} value={numTicks} />
          
        </div>
    
      <form>
        {ticks.map((currentTick, i) => {
          return (
            <details open={numTicks === 1} className={styles.details} key={i}>
            <summary className={styles.summary}>Tick {i + 1}<span style={{ color: '#c00300', marginLeft: '0.5rem' }}>ID# will generate when you submit the form</span> </summary>
            {i > 0 && <OutlineFloatButton colors={{ text: '#00626d', shadow: '#00626d', bg: '#ebb600' }} handleClick={() => handleCopyTick(i)} text='Use previous tick info' />}
            <SubmitterInfo id={i} data={currentTick} handleChange={handleFormData} />
            {numTicks > 1 ? <p style={{ padding: '0 10rem' }}>Click each tick to answer questions.</p> : null}
            <TickAttached id={i} data={currentTick} handleData={handleFormData} />
            <TickLocation id={i} handleData={handleFormData} data={currentTick} />
            <PhotoSection id={i} handleData={handlePhoto} />
          </details>
          )
        }
      )}
      </form>
      <div className={styles.btnDiv}>
        <OutlineFloatButton width='200px' colors={{ text: '#00626d', shadow: '#00626d', bg: '#00626d' }} handleClick={handleSubmit} text='Submit Form' />
        <BorderlessFloatButton width='200px' colors={{ text: '#00626d', shadow: '#00626d' }} handleClick={() => navigate('/steps')} text='Cancel' />
      </div>
      </>
      )}
       

    </div>
  );
};
export default Survey;

