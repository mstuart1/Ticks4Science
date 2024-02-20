import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SubmissionDataService from "../../services/submission";
import { theme } from "../../theme";
import { BasicPage } from "../GeneralStyles";
import FormSelectionBlocks from "../ui/FormSelectionBlocks/FormSelectionBlocks";
import styles from './survey.module.css'
import { locationOptions } from "./surveyFormData";
import GenericInput from "../ui/GenericInput";
import GenericRadio from "../ui/GenericRadio";
import GenericTextarea from "../ui/GenericTextarea";
import SubmitterInfo from "./SubmitterInfo";
import TickAttached from "./TickAttached";
import TickLocation from "./TickLocation";


const Styles = {
  FormSection: styled.div`
    background-color: ${({ theme }) => theme.colors.ruYellow + 40};
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
  `,
  Input: styled.input`
    border: 1px solid ${({ error }) => (error ? "red" : "black")};
  `,
  ErrMessage: styled.label`
    color: red;
    display: ${({ error }) => (error ? "initial" : "none")};
  `,
  TextCont: styled.div`
    display: flex;
    flex-direction: column;
  `,
  SubmitB: styled(BasicPage.LinkButton.CardSpecial)``,
  ResponsiveDiv: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      max-width: 80%;
    }
  `,
  FormDiv: styled.div`
    margin: 1rem;
  `,
  PhotoLabel: styled.label`
    border: 2px solid ${({ theme }) => theme.colors.ruTeal};
    border-radius: 0.5rem;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.ruYellow};
  `,
  PhotoInput: styled.input`
    display: none;
  `,
};

const AdditionalText = () => {
  return (
    <div>
    <p>Any additional information about the environment, tick(s), and or
        person / pet: (please keep character number below 200)</p> <br />
              Character count: { input.additionalInfo.length > 200 ? <span style={{ color: 'red' }}>{input.additionalInfo.length}</span> : (<span>{input.additionalInfo.length}</span>) }
    </div>
  )
}

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
  const [imageFront, setImageFront] = useState([]);
  const [imageBack, setImageBack] = useState([]);
  const [touched, setTouched] = useState(initialBlur);
  const [inProgress, setInProgress] = useState(false);

  const handleChange = (evt) => {
    console.log("handling change");
    const { name, value, type, checked } = evt.target;
    // console.log(name, value, type, checked);
    setInput((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "foundOn") {
      if (input.foundOn !== "Person" && input.foundOn !== "Animal")
        setInput((prevState) => ({ ...prevState, tickAttached: "" }));
    }
  };

  const handleFront = (evt) => {
    let file = evt.target.files[0];
    // console.log('handling front, file.type:', file.type)
    if (!file.type.includes('image')) {
      alert(`Please upload an image file`);
      return;
    }
    if (file.size > 8000000) {
      alert(`Please reduce file size before uploading`);
      return
    } else if (file.size < 200000) {
      alert(
        `Please check your image quality, image may be too small to view tick`
      );
      return
    } else {
      setImageFront(file);
    }
  };
  const handleBack = (evt) => {
    // console.log("handling back");
    let file = evt.target.files[0];
    if (file.size > 8000000) {
      alert(`Please reduce file size before uploading`);
      return;
    }
    if (file.size < 200000) {
      alert(
        `Please check your image quality, image may be too small to view tick`
      );
      return;
    }
    setImageBack(file);
  };

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
  const errors = validate(input);
  const handleBlur = (field) => {
    // console.log("handling blur");
    setTouched((prevState) => ({ ...prevState, [field]: true }));
  };

  const isEnabled =
    !Object.values(errors).some((x) => x === true) &&
    imageFront?.name?.length > 0;

  const shouldMarkError = (field) => {
    let hasError = errors[field];
    let shouldShow = touched[field];
    return hasError ? shouldShow : undefined;
  };

  // console.log(input.additionalInfo.length);

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
    console.log("handling submit",);
    try {
      setInProgress(true);
      evt.preventDefault();

      let errors = validate(input);
      // console.log(errors)

      if (Object.values(errors).some((x) => x === true)) {
        alert(
          "Please review the form and make sure all of the required fields have been completed."
        );
        return;
      }
      if (imageFront.name.length === 0) {
        alert("Please include at least one image of the tick.");
        return;
      }
      let data = Object.entries(input).reduce(
        (a, [k, v]) => (v ? ((a[k] = v), a) : a),
        {}
      );

      const formData = new FormData();
      formData.append("photos", imageFront);
      formData.append("photos", imageBack);
      // formData.append('photos', imageOther)
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      let response = await SubmissionDataService.submitForm(data);
      let id = response.data.data.id;
      console.log("sent form, now seding photos");
      response = await SubmissionDataService.submitImage(id, formData, config);
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
    <BasicPage.Text>
      <BasicPage.Title>Tick Submission Form</BasicPage.Title>

      <form onSubmit={handleSubmit} className={styles.form}>
        <SubmitterInfo />
        <TickAttached />
        <TickLocation />
        {/* photos */}
        <Styles.FormSection>
          <h3>
            Please submit at least one photo of the tick between 2kb and 8Mb in
            size.
          </h3>
          <Styles.FormDiv>
            <Styles.PhotoLabel htmlFor="front">Photo 1</Styles.PhotoLabel>
            <Styles.PhotoInput
              type="file"
              accept="image/*"
              onChange={handleFront}
              required
              id="front"
            />
            {imageFront.size && <p>Photo 1 has been added</p>}

            <Styles.PhotoLabel htmlFor="back">Photo 2</Styles.PhotoLabel>
            <Styles.PhotoInput
              type="file"
              accept="image/*"
              onChange={handleBack}
              id="back"
            />
            {imageBack.size && <p>Photo 2 has been added</p>}
          </Styles.FormDiv>
          <p>
            Reminder: Review{" "}
            <BasicPage.InnieLink to="/photo">
              <span>How to Take a Tick Pic</span>
            </BasicPage.InnieLink>
          </p>
        </Styles.FormSection>
        <Styles.FormSection>
          
          <Styles.TextCont>
            <label htmlFor="additionalInfo">
              Any additional information about the environment, tick(s), and or
              person/pet: (please keep character number below 200) <br />
              Character count: {input.additionalInfo.length > 200 ? <span style={{ color: 'red' }}>{input.additionalInfo.length}</span> : (<span>{input.additionalInfo.length}</span>)}

            </label>
            <textarea
              error={shouldMarkError("additionalInfo")}
              id="additionalInfo"
              name="additionalInfo"
              value={input.additionalInfo || ""}
              onChange={handleChange}
            ></textarea>
          </Styles.TextCont>
          <Styles.ErrMessage error={shouldMarkError("additionalInfo")}>
            Please reduce the number of characters in your description.
          </Styles.ErrMessage>
        </Styles.FormSection>
        {!isEnabled && (
          <h4>
            Please scan the form for missing information and complete the form
            in order to make the submit button active.
          </h4>
        )}
        <button
          onClick={handleSubmit}
          disabled={!isEnabled}
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
    </BasicPage.Text>
  );
};
export default Survey;




