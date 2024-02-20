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

  let initialState = {
    userMuni: "",
    userZip: "",
    dateTickFound: "",
    foundOn: "",
    foundOnOther: "",
    tickAttached: "",
    animal: "",
    dateRemoved: "",
    locationDesc: "",
    locationDescOther: "",
    tickMuni: "",
    tickCounty: "",
    tickZip: "",
    activities: "",
    personBitten: "",
    submitterBitten: "",
    bittenMuni: "",
    bittenZip: "",
    bittenTraveledDom: "",
    bittenTraveledIntl: "",
    travelInfo: "",
    photoFrontUrl: "",
    photoBackUrl: "",
    photoOtherUrl: "",
    additionalInfo: "",
  };

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
    additionalInfo: false,
  };

  const [input, setInput] = useState(initialState);
  const [touched, setTouched] = useState(initialBlur);
  const [inProgress, setInProgress] = useState(false);


  const validate = (input) => {
    // console.log("validating", input);
    return {
      // true means invalid
      userMuni: input.userMuni.length === 0,
      userZip: input.userZip.length < 4 || isNaN(input.userZip),
      foundOn: input.foundOn.length === 0,
      foundOnOther:
        input.foundOn === "Other" && input.foundOnOther.length === 0,
      dateTickFound:
        input.dateTickFound.length === 0 ||
        new Date(input.dateTickFound) > new Date(),
      tickMuni: input.tickMuni.length === 0,
      tickCounty: input.tickCounty.length === 0,
      tickZip: input.tickZip.length < 4 || isNaN(input.tickZip),
      bittenMuni:
        input.submitterBitten === "No" && input.bittenMuni.length === 0,
      bittenZip: input.submitterBitten === "No" && input.bittenZip.length === 0,
      locationDescOther:
        input.locationDesc === "Other" && input.locationDescOther.length === 0,
      additionalInfo: input.additionalInfo.length > 200,
    };
  };


  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const { isEmpty, data } = getFormValues(e.currentTarget);

  //   if (isEmpty) {
  //     console.log('please provide all values');
  //     return;
  //   }

  //   // do something
  //   console.log(data);

  //   // clear inputs
  //   e.currentTarget.reset();
  // };

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
      setInput(initialState);
      navigate(`/thanks?id=${id}`);
    } catch (err) {
      console.log(err.message);
    }
  };



  if (inProgress) {
    return (<div style={{ width: '100vw', height: '100vh' }}><h1>Submitting form...</h1></div>)
  }

  return (
    <div className={styles.text}>
      <h2 className={styles.title}>Tick Submission Form</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <SubmitterInfo />
        <TickAttached />
        <TickLocation />
        <PhotoSection/>
        <AdditionalInfo/>

       
       
        {/* {!isEnabled && (
          <h4>
            Please scan the form for missing information and complete the form
            in order to make the submit button active.
          </h4>
        )} */}
        <button
        type='submit'
          // onClick={handleSubmit}
          // disabled={!isEnabled}
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

