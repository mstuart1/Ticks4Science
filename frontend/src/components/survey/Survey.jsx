import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmissionDataService from "../../services/submission";
import { theme } from "../../theme";
import { BasicPage } from "../GeneralStyles";
import styles from './survey.module.css'
import SubmitterInfo from "./SubmitterInfo";
import TickAttached from "./TickAttached";
import TickLocation from "./TickLocation";
import PhotoSection from "./PhotoSection"
import AdditionalInfo from "./AdditionalInfo"
import getFormValues  from "./getFormValues";

const Survey = () => {
  const navigate = useNavigate();
  
  const [inProgress, setInProgress] = useState(false);
  const [numTicks, setNumTicks] = useState(1);
  const [formValues, setFormValues] = useState({});

  console.log('formValues', formValues) 


  const handleSubmit = async (evt) => {
    
    try {
      setInProgress(true);
      evt.preventDefault();
        const { isEmpty, data } = getFormValues(evt.currentTarget);
        console.log('form', 'empty', isEmpty, 'data', data)
      
      let photoFormData = new FormData();
      photoFormData.append("photos", data.imageFront);
      photoFormData.append("photos", data.imageBack);

      
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      let response = await SubmissionDataService.submitForm(data);
      let id = response.data.data.id;
      console.log("sent form, now sending photos");
      response = await SubmissionDataService.submitImage(id, photoFormData, config);
      // alert(JSON.stringify(response.data))
      
      navigate(`/thanks?id=${id}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  const generateForm = () => {
    let form = [];
    for (let i = 0; i < numTicks; i++) {
      let tickNum = i + 1;
      form.push(
        <details open={i === 0} className={styles.details} key={i}>
          <summary className={styles.summary}>Tick {tickNum}</summary>
          <TickAttached id={tickNum} />
          <TickLocation id={tickNum} />
          <PhotoSection id={tickNum}/>
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

<p>      <span className={styles.specialText}>If you intend to mail in more than one tick,</span> please fill out this form for each one, separate the ticks into different containers/bags,  and label each with the id numbers provided once you complete the forms.  Each tick will be tested separately so each tick needs an individual id number and data record.</p>
<div className={styles.form}>
<div className={styles.formSection}>
  How many ticks do you intend to mail in?
  <input className={styles.input} type="number" min="1" onChange={(evt) => setNumTicks(evt.target.value)} value={numTicks} />
</div>
</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <SubmitterInfo data={formValues} handleChange={setFormValues} />
      
       {formElems}
        <AdditionalInfo/>

        <button
        // onClick={handleSubmit}
          style={{
            borderRadius: "0.5rem",
            padding: "2rem",
            backgroundColor: theme.colors.ruYellow,
          }}
        >
          Submit
        </button>

        <BasicPage.LinkButton.LinkSpec to={"/steps"}>
          <BasicPage.HoverCard>
            <BasicPage.LinkButton.CardSpecial>
              <span>Cancel</span>
            </BasicPage.LinkButton.CardSpecial>
          </BasicPage.HoverCard>
        </BasicPage.LinkButton.LinkSpec>
      </form>
    </div>
  );
};
export default Survey;

