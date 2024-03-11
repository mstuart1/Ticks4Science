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
// import { theme } from "../../theme";

const Survey = () => {
  const navigate = useNavigate();

  const [inProgress, setInProgress] = useState(false);
  const [numTicks, setNumTicks] = useState(1);
  const [formValues, setFormValues] = useState({});

  const handleSubmit = async (evt) => {

    try {
      setInProgress(true);
      evt.preventDefault();
      const {  data } = getFormValues(evt.currentTarget);
      
      let id = 0
      let idArray = []
      for (let i = 1; i <= numTicks; i++) {
        let allTicksKeys = Object.keys(data).filter((key) => !key.includes(`tick`));
        let oneTickKeys = Object.keys(data).filter((key) => key.includes(`tick${i}`));
        const allTickData = extractFromObj(data, allTicksKeys)
        const oneTickData = extractFromObj(data, oneTickKeys)
        const renamedData = renameKeys(oneTickData, `tick${i}.`, '')
        const mergedData = { ...allTickData, ...renamedData }

        let photoFormData = new FormData();
        photoFormData.append("photos", data[`tick${i}.imageFront`]);
        photoFormData.append("photos", data[`tick${i}.imageBack`]);

        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        let response = await SubmissionDataService.submitForm(mergedData);
        id = response.data.data.id;
        idArray.push(id)
        console.log("sent form, now sending photos");
        response = await SubmissionDataService.submitImage(id, photoFormData, config);
        
      }
      if (numTicks > 1) {
        navigate('/thanks', {state: {id: idArray}})
      } else {
        navigate(`/thanks`, {state: {id: id}});
      }




      // // alert(JSON.stringify(response.data))

    } catch (err) {
     
    }
  };

  const generateForm = () => {
    let form = [];
    for (let i = 1; i <= numTicks; i++) {
      // let tickNum = i + 1;
      form.push(
        <details open={numTicks === 1} className={styles.details} key={i}>
          <summary className={styles.summary}>Tick {i}</summary>
          <TickAttached id={i} />
          <TickLocation id={i} />
          <PhotoSection id={i} />
        </details>
      );
    }
    return form;
  }

  let formElems = generateForm();

  if (inProgress) {
    return (<div style={{ width: '100vw', height: '100vh' }}><h1>Submitting form...</h1></div>)
  }

  return (
    <div className={styles.text}>
      <h2 className={styles.title}>Tick Submission Form</h2>

     
      <div className={styles.form}>
        <div className={styles.formSection}>
          How many ticks do you intend to mail in?
          <input className={styles.input} type="number" min="1" onChange={(evt) => setNumTicks(evt.target.value)} value={numTicks} />
          {numTicks > 1 ? (<p> <span className={styles.specialText}>*Note: Before mailing ticks in, they must be labeled with the corresponding number you assign them below (i.e Tick 1, Tick 2, etc). You must also label somewhere in/on the envelope the tick ID number you receive after submitting this form. See example of acceptable submissions <Link to='/multipleExample' target="_blank">here</Link>. </span> </p>) : null}
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <SubmitterInfo data={formValues} handleChange={setFormValues} />
       {numTicks > 1 ?  <p style={{ padding: '0 10rem' }}>Click each tick to answer questions.</p> : null}
        {formElems}
        <AdditionalInfo />
        

  {numTicks > 1 ? <p style={{padding: '0 10rem'}}>If the form will not submit, click each tick (for example "Tick 1") to open the question section.  If the section is open when submitting, it will display which question is preventing the form from submitting.</p> : null}
        
<div className={styles.btnDiv}>
        <button className={styles.submitBtn}>
          Submit
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
      
    </div>
  );
};
export default Survey;

