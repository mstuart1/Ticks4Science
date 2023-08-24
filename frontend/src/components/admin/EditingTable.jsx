import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BorderlessFloatButton from "../ui/borderlessFloatButton/BorderlessFloatButton";
import SubmissionDataService from "../../services/submission";
import OutlineFloatButton from "../ui/outlineFloatButton/OutlineFloatButton";
import { theme } from "../../theme";
import RenderIf from "../../tools/RenderIf";
import { BasicPage } from "../GeneralStyles"

const Styles = {
  Wrapper: styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
  `,
  ButtonCont: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  TableContainer: styled.div`
    table {
      font-family: sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    table td,
    table th {
      border: 1px solid #ddd;
      padding: 1rem;
    }

    table tr:nth-child(even) {
      background-color: #f5f3f2;
    }

    table tr:hover {
      background-color: #e5e2e0;
    }

    table th {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      text-align: center;
      background-color: #137b80;
      color: white;
    }
  `,
};

const updateSubReq = async (data, id) => {
  let response = await SubmissionDataService.updateSub(data, id);
  return response.data.updatedTick
}
const EditingTable = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let { tick } = location.state !== null ? location.state : { tick: {} };

  const [data, setData] = useState(tick);

  let pathogenResultsExist = !!data?.pathogens?.filter(item => item.submission_pathogen.result !== 'pending').length

  return (
    <BasicPage.Text>
      <Styles.Wrapper>
        <Styles.ButtonCont>
          <BorderlessFloatButton
            handleClick={() => navigate(-1)}
            text="Back"
          />
          {/* <OutlineFloatButton
            handleClick={() => updateSubReq(data, data.id)}
            colors={{ bg: theme.colors.ruTeal }}
            text="Save Changes"
          /> */}
        </Styles.ButtonCont>
        <div>
          <h2>Editing Submission: {data.id}</h2>
          <h3>The changes on this page are intended to undo mistakes made while processing ticks.  These changes undo the decision made on the process tick page so that you can go back to that page and make a different choice.</h3><br />
          <UndoDuplicate duplicate={data.duplicate} id={data.id} setData={setData} />
          <UndoPhotoReview setData={setData} photosReviewed={data.photosReviewed} specimenReceived={data.specimenReceived} id={data.id} />
          <UndoNotATick setData={setData} notATick={data.notATick} id={data.id} />
          <UndoSpecimenRequested setData={setData} specimenRequested={data.specimenRequested} specimenReceived={data.specimenReceived} id={data.id} />
          <UndoLifeStage setData={setData} lifeStage={data.lifeStage} id={data.id} />
          <UndoEngorged setData={setData} engorged={data.engorged} id={data.id} />
          <UndoPhotoId setData={setData} scientific={data.photo?.scientific} photoIdUser={data.photoIdUser} photoId={data.photoId} id={data.id} />
          <UndoSpecimenReceived setData={setData} specimenReceived={data.specimenReceived} pathogenResultsExist={pathogenResultsExist} id={data.id} />
          <UndoSpecimenId setData={setData} scientific={data.specimen?.scientific} specimenIdentified={data.specimenIdentified} pathogenResultsExist={pathogenResultsExist} specIdUser={data.specIdUser} id={data.id} />
          <UndoLabNumber setData={setData} labNumber={data.labNumber} id={data.id} />
        </div>
      </Styles.Wrapper>
    </BasicPage.Text>
  );
};

export default EditingTable;


const UndoDuplicate = ({ duplicate, id, setData }) => {


  const handleDuplicate = async () => {
    let response = await updateSubReq({ duplicate: null }, id);
    setData(response)
  }

  return (
    <>
      <span>Duplicate: {duplicate ?? 'this submission has not been marked as a duplicate'}</span><br />
      <RenderIf isTrue={duplicate}>
        <OutlineFloatButton
          handleClick={handleDuplicate}
          text="undo duplicate"
        />
      </RenderIf >
    </>
  )
}
const UndoPhotoReview = ({ photosReviewed, specimenReceived, id, setData }) => {
  const handleRemovePhotoReview = async () => {
    let freshData = {
      photosReviewed: null,
      specimenRequested: null,
      photoId: null,
      photo: null,
      photoIdUserId: null,
      photoIdUser: null,
      engorged: null,
      lifeStage: null,
      notATick: null,
    }
    let response = await updateSubReq(freshData, id);
    console.log('photo review response', response)
    setData(response)

  };
  return (
    <>
      <span>Photos Reviewed: {photosReviewed ?? 'Photos have not been reviewed'}</span><br />
      <RenderIf isTrue={photosReviewed && specimenReceived}>
        < h3 style={{ margin: '1rem' }
        }> You can only remove the photosReviewed dates from a specimen that has not been received.</ h3>
        <br />
      </RenderIf>
      <RenderIf isTrue={photosReviewed && !specimenReceived}>

        <div style={{ margin: '1rem' }}>
          <h3 style={{ color: theme.colors.ruRed }}>
            Warning: removing the photo review also removes the specimen
            requested date and photo identification.
          </h3>
          <OutlineFloatButton
            handleClick={handleRemovePhotoReview}
            text="undo photos reviewed status"
          />
        </div>
      </RenderIf>
    </>
  )

}
const UndoNotATick = ({ notATick, id, setData }) => {
  const handleNotATick = async () => {
    let response = await updateSubReq({ notATick: null }, id);
    setData(response)
  }
  return (
    <>
      <span>Not A Tick: {notATick ? 'true' : 'false'}</span><br />
      <RenderIf isTrue={notATick}>
        <OutlineFloatButton
          handleClick={handleNotATick}
          text="undo 'not a tick' "
        />
      </RenderIf>
    </>
  )
}
const UndoSpecimenRequested = ({ specimenRequested, specimenReceived, id, setData }) => {

  const handleSpecReq = async () => {
    let response = await updateSubReq({ specimenRequested: null }, id);
    setData(response)
  }
  return (
    <>
      <span>Specimen Requested: {specimenRequested ?? 'This specimen has not been requested'}</span><br />
      <RenderIf isTrue={specimenRequested && specimenReceived}>
        <h3 style={{ margin: '1rem' }}>You can only remove the specimenRequested date from a specimen that has not been received.</h3>
      </RenderIf>
      <RenderIf isTrue={specimenRequested && !specimenReceived}>
        <OutlineFloatButton
          handleClick={handleSpecReq}
          text="undo specimenRequested"
        />
      </RenderIf>
    </>
  )
}
const UndoLifeStage = ({ lifeStage, id, setData }) => {
  const handleLifeStage = async () => {
    let response = await updateSubReq({ lifeStage: null }, id);
    setData(response)
  }
  return (
    <>
      <span>Life Stage: {lifeStage ?? 'no life stage selected'}</span><br />
      <RenderIf isTrue={lifeStage}>

        <OutlineFloatButton
          handleClick={handleLifeStage}
          text='undo life stage'

        />
      </RenderIf>
    </>
  )
}
const UndoEngorged = ({ engorged, id, setData }) => {

  const handleEngorged = async () => {
    let response = await updateSubReq({ engorged: null }, id);
    setData(response)
  }

  return (
    <>
      <span>Engorged: {engorged ? 'true' : 'false'}</span><br />

      <RenderIf isTrue={engorged !== null}>
        <OutlineFloatButton
          handleClick={handleEngorged}
          text="undo engorged"
        />
      </RenderIf>
    </>
  )
}
const UndoPhotoId = ({ scientific, photoIdUser, photoId, id, setData }) => {

  const handlePhotoId = async () => {
    let response = await updateSubReq({ photoId: null, photo: null, photoIdUserId: null, photoIdUser: null }, id);
    setData(response)
  }
  return (
    <>
      <span>PhotoId: {scientific ?? 'no species selected'}</span><br />
      <span>PhotoId'd By: {photoIdUser ? `${photoIdUser?.firstName} ${photoIdUser?.lastName}` : `photo has not been id'd`}</span><br />
      <RenderIf isTrue={photoId}>
        <OutlineFloatButton
          handleClick={handlePhotoId}
          text="remove photoId"
        />
      </RenderIf>
    </>
  )
}
const UndoSpecimenReceived = ({ specimenReceived, pathogenResultsExist, id, setData }) => {

  const handleReceived = async () => {
    let response = await updateSubReq({ specimenReceived: null, specIdUser: null, specIdUserId: null, specimen: null, specimenId: null, specimenIdentified: null, pathogens: [] }, id);
    setData(response)
  }
  return (
    <>
      <span>Specimen Received: {specimenReceived ?? 'specimen not received'}</span><br />
      <RenderIf isTrue={specimenReceived && pathogenResultsExist}>
        <h3 style={{ margin: '1rem' }}>You can only remove the specimen received dates from a specimen that does not have pathogens.</h3>
        <br />
      </RenderIf>
      <RenderIf isTrue={specimenReceived && !pathogenResultsExist}>
        <h3 style={{ color: theme.colors.ruRed }}>
          Warning: removing the specimen received date also removes the species identification.
        </h3>
        <OutlineFloatButton
          handleClick={handleReceived}
          text="remove specimen received"
        />
      </RenderIf>
    </>
  )
}
const UndoSpecimenId = ({ specimenIdentified, scientific, pathogenResultsExist, specIdUser, id, setData }) => {
  const handleSpecimen = async () => {
    let response = await updateSubReq({ specimenReceived: null, specIdUser: null, specIdUserId: null, specimen: null, specimenId: null, specimenIdentified: null, pathogens: [] }, id);
    setData(response)
  }
  return (<>
    <span>Specimen Identified: {specimenIdentified}</span><br />
    <span>Species: {scientific}</span><br />
    <span>Specimen ID'd by: {specIdUser?.firstName} {specIdUser?.lastName}</span><br />


    <RenderIf isTrue={specimenIdentified && pathogenResultsExist}>
      <h3>Cannot remove specimen identification if pathogen results exist.</h3>
    </RenderIf>
    <RenderIf isTrue={specimenIdentified && !pathogenResultsExist}>
      <OutlineFloatButton
        handleClick={handleSpecimen}
        text="undo specimen identification"
      />
    </RenderIf>
  </>)
}
const UndoLabNumber = ({ labNumber, id, setData }) => {
  const handleLabNumber = async () => {
    let response = await updateSubReq({ labNumber: null }, id);
    setData(response)
  }
  return (
    <>
      <span>Lab Number: {labNumber}</span><br />
      <RenderIf isTrue={labNumber}>
        <OutlineFloatButton
          handleClick={handleLabNumber}
          text="undo labNumber"
        />
      </RenderIf>
    </>
  )
}
