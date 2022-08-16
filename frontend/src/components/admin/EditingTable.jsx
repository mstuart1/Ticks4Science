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

const EditingTable = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let { tick } = location.state !== null ? location.state : { tick: {} };

  const [data, setData] = useState(tick);

  const handleRemovePhotoReview = () => {
    setData((prevState) => ({
      ...prevState,
      photosReviewed: null,
      specimenRequested: null,
      photoId: null,
      photo: null,
      photoIdUserId: null,
      photoIdUser: null,
      engorged: null,
      lifeStage: null,
      notATick: null,
    }));
  };

  const handleIsATick = () => {
    setData((prevState) => ({ ...prevState, notATick: false }));

  };
  const handleSpecReq = () => {
    setData((prevState) => ({ ...prevState, specimenRequested: false }));

  }
  const handleLifeStage = () => {

    setData(prevState => ({ ...prevState, lifeStage: null }))
  }
  const handleEngorged = () => {
    setData((prevState) => ({ ...prevState, engorged: null }));
  }
  const handlePhotoId = () => {
    setData(prevState => ({ ...prevState, photo: null, photoId: null, photoIdUser: null, photoIdUserId: null }))
  }
  const handleReceived = () => {
    setData(prevState => ({ ...prevState, specimenReceived: null, specIdUser: null, specIdUserId: null, specimen: null, specimenId: null, specimenIdentified: null }))
  }
  const handleSpecimen = () => {
    setData(prevState => ({ ...prevState, specIdUser: null, specIdUserId: null, specimen: null, specimenId: null, specimenIdentified: null }))
  }
  const handleLabNumber = () => {
    setData(prevState => ({ ...prevState, labNumber: null }))
  }

  const updateSubReq = async (data, id) => {
    // console.log(data);
    await SubmissionDataService.updateSub(data, data.id);
    navigate(-1)
  };

  return (
    <BasicPage.Text>
      <Styles.Wrapper>
        <Styles.ButtonCont>
          <BorderlessFloatButton
            handleClick={() => navigate(-1)}
            text="Cancel"
          />
          <OutlineFloatButton
            handleClick={() => updateSubReq(data, data.id)}
            colors={{ bg: theme.colors.ruTeal }}
            text="Save Changes"
          />
        </Styles.ButtonCont>

        <div>
          <h3 style={{ margin: '1rem' }}>You cannot remove the photosReviewed and specimenRequested dates from a specimen that has already been received.</h3>
          <br />
          <h3>The changes on this page are intended to undo mistakes made while processing ticks.  These changes undo the decision made on the process tick page so that you can go back to that page and make the correct choice.</h3><br />
          <span>Photos Reviewed: {data.photosReviewed}</span><br />
          <RenderIf isTrue={data.photosReviewed && !data.specimenReceived}>
            <div style={{ margin: '1rem' }}>
              <h3 style={{ color: theme.colors.ruRed }}>
                Warning: removing the photo review also removes the specimen
                requested date and photo identification.
              </h3>
              <OutlineFloatButton
                handleClick={() => handleRemovePhotoReview()}
                text="undo photos reviewed status"
              />
            </div>
          </RenderIf>
          <span>Not A Tick: {data.notATick?.toString()}


          </span><br />
          <RenderIf isTrue={data.notATick}>
            <OutlineFloatButton
              handleClick={handleIsATick}
              text="undo 'not a tick' "
            />
          </RenderIf>
          <span>Specimen Requested: {data.specimenRequested}</span><br />
          <RenderIf isTrue={data.specimenRequested && !data.specimenReceived}>
            <OutlineFloatButton
              handleClick={handleSpecReq}
              text="undo specimenRequested"
            />
          </RenderIf>
          <span>Life Stage: {data.lifeStage}</span><br/>
          <RenderIf isTrue={data.lifeStage}>

            <OutlineFloatButton
              handleClick={handleLifeStage}
              text='undo life stage'

            />
          </RenderIf>
          <span>Engorged: {data.engorged?.toString()}

            <RenderIf isTrue={data.engorged !== null}>
              <OutlineFloatButton
                handleClick={handleEngorged}
                text="undo engorged"
              />
            </RenderIf>

          </span><br />
          <span>PhotoId: {data.photo?.scientific}</span><br />
          <span>PhotoId'd By: {data.photoIdUser?.firstName} {data.photoIdUser?.lastName}</span><br />
          <RenderIf isTrue={data.photoId}>
            <OutlineFloatButton
              handleClick={handlePhotoId}
              text="remove photoId"
            />
          </RenderIf>

          <span>Specimen Recieved: {data.specimenReceived}</span><br />
          <RenderIf isTrue={data.specimenReceived}>
            <h3 style={{ color: theme.colors.ruRed }}>
              Warning: removing the specimen received date also removes the species identification.
            </h3>
            <OutlineFloatButton
              handleClick={handleReceived}
              text="remove specimen received"
            />
          </RenderIf>
          <span>Specimen Identified: {data.specimenIdentified}</span><br />
          <span>Species: {data.specimen?.scientific}</span><br />
          <span>Specimen ID'd by: {data.specIdUser?.firstName} {data.specIdUser?.lastName}</span><br />
          <RenderIf isTrue={data.specimenIdentified}>
            <OutlineFloatButton
              handleClick={handleSpecimen}
              text="undo specimen identification"
            />
          </RenderIf>
          <span>Lab Number: {data.labNumber}</span><br />
          <RenderIf isTrue={data.labNumber}>
            <OutlineFloatButton
              handleClick={handleLabNumber}
              text="undo labNumber"
            />
          </RenderIf>
        </div>
      </Styles.Wrapper>
    </BasicPage.Text>
  );
};

export default EditingTable;
