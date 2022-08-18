import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BasicPage } from "../GeneralStyles";
import { theme } from "../../theme";
import SubmissionDataService from "../../services/submission";
import TickDataService from "../../services/ticks";
import InternalLinkFloatButton from "../ui/internalLinkFloatButton/InternalLinkFloatButton";
import OutlineCard from "../ui/outlineCard/OutlineCard";
import HoverCard from "../ui/hoverCard/HoverCard";
import RenderIf from "../../tools/RenderIf";
import SubTickInfo from "./SubTickInfo";
import FormSelectionBlocks from "../ui/formSelectionBlocks/FormSelectionBlocks";
import PathogenDataService from "../../services/pathogens";
import BorderlessFloatButton from "../ui/borderlessFloatButton/BorderlessFloatButton";
import { lifeStages } from "../../data/lifeStages";

let ruTeal = theme.colors.ruTeal;

const Styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
  `,
  UpperRight: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 1rem;
  `,
  Content: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: flex-end;
    white-space: pre-wrap;
    font-weight: bold;
  `,
  HoverCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: ${({ width }) => width};
    height: ${({ height }) => height};

    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || "#000000"}20;
    margin: 1rem;
    background-image: 
  // linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
      url("${({ tickImage }) => tickImage}");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }
  `,
  PageCont: styled.div`
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items; center;
  `,
  CardCont: styled.div`
    margin: 1rem;
    padding: 1rem;
    width: 80vw;
    max-width: 900px;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || "#000000"}20;
  `,
  CardInsides: styled.div`
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    h2 {
      margin: 1rem 0;
      align-self: center;
    }
  `,
  ForgotText: styled.h4`
    margin: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.main};
  `,
  PathosCont: styled.div`
    width: 100%;
    display: flex;
    justifycontent: flex-start;
    alignitems: center;
  `,
  ButtonCont: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
};

const ProcessTick = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [tick, setTick] = useState({});
  const [tickSpp, setTickSpp] = useState([]);
  const [idByPhoto, setIdByPhoto] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [dupId, setDupId] = useState("");
  const [lifeStage, setLifeStage] = useState({ lifeStage: "" });
  const [engorged, setEngorged] = useState({ engorged: false });
  const [labNumber, setLabNumber] = useState("");
  const [tickPathos, setTickPathos] = useState([]);
  const [pathogens, setPathogens] = useState([]);

  const getPathogens = async () => {
    await PathogenDataService.getAll()
      .then((response) => {
        setPathogens(response.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPathogens();
  }, []);

  // get the tick info from db

  let getTick = async (id) => {
    let response = await SubmissionDataService.getProgress(id);
    await setTick({ ...response.data.record });
    let freshPathos = tick.pathogens?.map((patho) => patho.id);
    await setTickPathos(freshPathos);
  };

  useEffect(() => {
    getTick(id);
  }, [id]);

  // get all the tick options
  useEffect(() => {
    let getData = async () => await TickDataService.getAllTicks();

    getData().then((response) => {
      // console.log(response.data.data)
      setTickSpp((prevState) => [...response.data.data]);
    });
  }, []);

  const toggleDelete = () => setShowDelete(!showDelete);

  const handlePhotoReview = (id) => {
    let data = { photosReviewed: new Date() };
    return updateSub(data, id);
  };

  const handleNotATick = (id) => {
    let data = { notATick: true, specimenIdentified: new Date() };
    return updateSub(data, id);
  };

  const handleDuplicate = (id, dupId) => {
    let data = { duplicate: dupId };
    return updateSub(data, id);
  };

  const handleIdByPhoto = () => {
    // console.log('clicked')
    setIdByPhoto(true);
  };

  const handlePhotoId = (id, tickId) => {
    setIdByPhoto(false);
    let data = { photoId: tickId, photoIdUserId: user.id };
    return updateSub(data, id);
  };
  const handleLabChange = ({ target }) => {
    setLabNumber(target.value);
  };
  const handleLabNumber = (id, labNumber) => {
    let data = { labNumber: labNumber };
    return updateSub(data, id);
  };

  const handleLifeStageChange = ({ target }) => {
    setLifeStage({ lifeStage: target.value });
    handleLifeStage(id, { lifeStage: target.value });
  };

  const handleLifeStage = (id, lifeStage) => {
    let data = lifeStage;
    return updateSub(data, id);
  };
  const handleEngorgedChange = ({ target }) => {
    setEngorged({ engorged: target.value });
    handleEngorged(id, { engorged: target.value });
  };

  const handleEngorged = (id, engorged) => {
    let data = engorged;
    return updateSub(data, id);
  };

  const handleRequest = (id) => {
    let data = { specimenRequested: new Date() };
    return updateSub(data, id);
  };

  const handleReceived = (id) => {
    let data = { specimenReceived: new Date() };
    return updateSub(data, id);
  };

  const handleIdentified = (id, tickId) => {
    let data = {
      specimenIdentified: new Date(),
      specimenId: tickId,
      specIdUserId: user.id,
    };
    return updateSub(data, id);
  };

  const handleChange = (evt) => {
    setDupId(evt.target.value);
  };

  const handlePathoChange = ({ target }) => {
    const { value } = target;
    let freshPatho = parseInt(value);
    if (tick.pathogens.some((item) => item.id === freshPatho)) {
      // console.log('remove from list')
      updateSub({ operation: "remove", pathogens: freshPatho }, id);
    } else {
      // console.log('add to list')
      updateSub({ operation: "add", pathogens: freshPatho }, id);
    }
  };
  const handleUndelete = () => {
    console.log("clicked");
    updateSub({ deletedAt: null }, id);
  };

  const updateSub = async (data, id) => {
    console.log("updating tick", data);
    await SubmissionDataService.updateSub(data, id).then((response) => {
      let updatedTick = response.data.record;
      console.log("updated", updatedTick);
      setTick((prevState) => ({ ...prevState, ...updatedTick }));
    });
  };

  const handleDelete = async () => {
    let response = await SubmissionDataService.deleteSub(id);
    console.log("deleted", response.data);
    navigate("/admin");
  };

  const engorgedArray = [
    { value: "true", required: true, label: "true" },
    { value: "false", required: true, label: "false" },
  ];

  let pathogenElems =
    pathogens.length > 0 &&
    pathogens.map((patho) => (
      <Styles.PathosCont key={patho.id}>
        <input
          type="checkbox"
          id={patho.pathogen}
          name={patho.pathogen}
          value={patho.id}
          style={{ margin: "1rem" }}
          checked={tick.pathogens?.some((value) => value.id === patho.id) || ""}
          onChange={handlePathoChange}
        />
        <label htmlFor={patho.pathogen}>{patho.pathogen}</label>
      </Styles.PathosCont>
    ));

  console.log(`tick`, tick);

  return (
    <BasicPage.Text>
      <Styles.ButtonCont>
        <InternalLinkFloatButton
          colors={{ text: ruTeal, shadow: ruTeal }}
          to={-1}
          text="  Back to List  "
        />
        {/* only Michelle and Dina can see this button */}
        <RenderIf isTrue={user.editData}>
          <BorderlessFloatButton
            handleClick={() =>
              navigate("/admin/editData", { state: { tick: tick } })
            }
            colors={{ text: theme.colors.ruRed, shadow: theme.colors.ruRed }}
            text="Edit Data"
          />
        </RenderIf>
      </Styles.ButtonCont>
      <Styles.PageCont>
        <RenderIf isTrue={tick?.blitzLoc?.length > 0}>
          <BasicPage.SectionTitle>
            This is a Tick Blitz Submission
          </BasicPage.SectionTitle>
        </RenderIf>
        <RenderIf isTrue={!tick.duplicate}>
          <OutlineCard>
            <label htmlFor="duplicate">
              Enter the original submission id if this is a duplicate:
            </label>
            <input
              id="duplicate"
              type="text"
              name="duplicate"
              value={dupId}
              placeholder="Enter id number for original submission here"
              onChange={handleChange}
              style={{
                border: "1px solid black",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            />
            <button
              style={{
                backgroundColor: "lightgrey",
                border: "1px solid black",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
              onClick={() => handleDuplicate(tick.id, dupId)}
            >
              Remove Duplicate From List
            </button>
            <p>
              If you define this submission as a duplicate, the original will
              stay in the lists and the duplicate(s) will be removed. Do not
              mark the original as a duplicate.
            </p>
          </OutlineCard>
        </RenderIf>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <OutlineCard>
            <Styles.CardInsides>
              <h2>Status Info</h2>
              ID: {tick?.id}
              <br />
              Date Submitted: {tick.createdAt?.substring(0, 10)}
              <br />
              <RenderIf isTrue={tick.duplicate}>
                This is a duplicate of submission ID: {tick.duplicate}
              </RenderIf>
              {/* Photo Review button or status */}
              <RenderIf isTrue={tick.photosReviewed}>
                <span>
                  Photos Reviewed: {tick.photosReviewed?.substring(0, 10)}{" "}
                  <br />
                </span>
                <RenderIf isTrue={!tick.specimenRequested}>
                  <BorderlessFloatButton
                    text="Click here to request a specimen"
                    colors={{ shadow: ruTeal }}
                    handleClick={() => handleRequest(tick.id)}
                  />
                </RenderIf>
                <span style={{ margin: "1rem 0" }}>
                  Life Stage:{" "}
                  {tick.lifeStage ? (
                    tick.lifeStage
                  ) : (
                    <BasicPage.RadioButtons>
                      <FormSelectionBlocks
                        input={lifeStage}
                        handleChange={handleLifeStageChange}
                        fieldName="lifeStage"
                        valueArray={lifeStages}
                      />
                    </BasicPage.RadioButtons>
                  )}
                </span>
                <span style={{ margin: "1rem 0" }}>
                  Engorged:{" "}
                  {tick.engorged !== null ? (
                    tick.engorged?.toString()
                  ) : (
                    <BasicPage.RadioButtons>
                      <FormSelectionBlocks
                        input={engorged}
                        handleChange={handleEngorgedChange}
                        fieldName="engorged"
                        valueArray={engorgedArray}
                      />
                    </BasicPage.RadioButtons>
                  )}
                </span>
              </RenderIf>
              <RenderIf isTrue={!tick.photosReviewed}>
                <BorderlessFloatButton width="330px"
                  text=" Click here when photos have been reviewed to show tick ID
                  options"
                  colors={{ shadow: ruTeal }}
                  handleClick={() => handlePhotoReview(tick.id)}
                />
              </RenderIf>
              <RenderIf isTrue={tick.specimenRequested}>
                <span>
                  Specimen Requested: {tick.specimenRequested?.substring(0, 10)}
                </span>
                <br />
              </RenderIf>
              <RenderIf isTrue={tick.notATick}>
                <span>Photo ID: Not a tick</span>
              </RenderIf>
              <RenderIf
                isTrue={
                  tick.photosReviewed && !tick.specimenId && !tick.notATick
                }
              >
                <BorderlessFloatButton
                  text="Click if it is not a tick"
                  colors={{ shadow: ruTeal }}
                  handleClick={() => handleNotATick(tick.id)}
                />
              </RenderIf>
              <RenderIf
                isTrue={
                  tick.photosReviewed &&
                  !tick.photoId &&
                  !idByPhoto &&
                  !tick.notATick
                }
              >
                <BorderlessFloatButton
                  text="Click here to id tick by photo"
                  colors={{ shadow: ruTeal }}
                  handleClick={() => handleIdByPhoto()}
                />
              </RenderIf>
              <RenderIf isTrue={idByPhoto}>
                {tickSpp.map((item) => (
                  <BorderlessFloatButton
                    key={item.id}
                    text={item.scientific}
                    colors={{ shadow: ruTeal }}
                    handleClick={() => handlePhotoId(tick.id, item.id)}
                  />
                ))}
              </RenderIf>
              <RenderIf isTrue={tick.photoId}>
                <span>
                  Photo ID: {tick.photo?.scientific}
                  <br />
                  Photo ID'd by:{" "}
                  {`${tick.photoIdUser?.firstName} ${tick.photoIdUser?.lastName}`}
                </span>
              </RenderIf>
              <RenderIf
                isTrue={tick.specimenRequested && !tick.specimenReceived}
              >
                <BorderlessFloatButton
                  text="Click if you've received a tick"
                  colors={{ shadow: ruTeal }}
                  handleClick={() => handleReceived(tick.id)}
                />
              </RenderIf>
              <RenderIf isTrue={tick.labNumber}>
                <span>Lab Number: {tick.labNumber}</span>
              </RenderIf>
              <RenderIf isTrue={tick.specimenReceived}>
                <span>
                  Specimen Received: {tick.specimenReceived?.substring(0, 10)}
                </span>
                <br />
                <RenderIf isTrue={!tick.labNumber}>
                  <label htmlFor="labNumber">Lab Number: </label>
                  <input
                    style={{ width: "30rem", padding: "1rem" }}
                    id="labNumber"
                    type="text"
                    name="labNumber"
                    value={labNumber}
                    onChange={handleLabChange}
                  />
                  <button
                    style={{
                      width: "30rem",
                      padding: "1rem",
                      margin: "1rem 0",
                    }}
                    onClick={() => handleLabNumber(id, labNumber)}
                  >
                    Save Lab Number
                  </button>
                </RenderIf>
              </RenderIf>
              <RenderIf isTrue={tick.specimenId}>
                Specimen Identified: {tick.specimenIdentified?.substring(0, 10)}
                <br /> Species: {tick.specimen?.scientific}
                <br /> Specimen ID'd by:{" "}
                {`${tick.specIdUser?.firstName} ${tick.specIdUser?.lastName}`}
              </RenderIf>
              <RenderIf
                isTrue={
                  tick.specimenReceived && !tick.specimenId && !tick.notATick
                }
              >
                Identify the specimen:
                {tickSpp.map((item) => (
                  <BorderlessFloatButton
                    key={item.id}
                    text={item.scientific}
                    colors={{ shadow: ruTeal }}
                    handleClick={() => handleIdentified(tick.id, item.id)}
                  />
                ))}
              </RenderIf>
            </Styles.CardInsides>
          </OutlineCard>
          {/* <p>Click on the photo to view full size</p> */}
          <div>
            <RenderIf isTrue={tick.photoFrontUrl?.toString().includes("heic")}>
              <OutlineCard width="20rem">
                The user submitted photos in the format HEIC which is unable be
                displayed by browsers at the time when this website was coded.
                Please click on the white photo block to download and view with
                the photo viewing software on your machine.{" "}
              </OutlineCard>
            </RenderIf>
            <a href={tick.photoFrontUrl} target="_blank" rel="noreferrer">
              {" "}
              <ImageCard imageUrl={tick.photoFrontUrl} />
            </a>
            {tick.photoBackUrl && (
              <a href={tick.photoBackUrl} target="_blank" rel="noreferrer">
                {" "}
                <ImageCard imageUrl={tick.photoBackUrl} />
              </a>
            )}
            {tick.photoOtherUrl && (
              <a href={tick.photoOtherUrl} target="_blank" rel="noreferrer">
                {" "}
                <ImageCard imageUrl={tick.photoOtherUrl} />
              </a>
            )}
            {tick.photoFrontUrl?.toString().includes("heic")}
          </div>
          <OutlineCard width="300px">
          <h2>Pathogens</h2>
          <p>select all that tested positive</p>
          {pathogenElems}
        </OutlineCard>
        </div>
        <SubTickInfo tick={tick}></SubTickInfo>
       
        <OutlineCard>
          <div style={{ margin: "1rem", padding: "1rem" }}>
            <h2>Submitter Info</h2>
            <p>Municipality: {tick.userMuni}</p>
            <p>Zip Code: {tick.userZip?.toString().padStart(5, "0")}</p>
            <p>Travel History: {tick.travelInfo ? tick.travelInfo : 'not reported'}</p>
            <p style={{maxWidth: '300px'}}>Additional Info: {tick.additionalInfo}</p>
          </div>
        </OutlineCard>
        <div>
          <InternalLinkFloatButton
            colors={{ text: ruTeal, shadow: ruTeal }}
            to={-1}
            text="  Back to List  "
          />
          <RenderIf isTrue={tick.deletedAt === null}>
            <BorderlessFloatButton
              text="Delete This Submission"
              padding="1rem 2rem"
              colors={{ text: "#800000", shadow: "#800000" }}
              handleClick={toggleDelete}
            />
            <RenderIf isTrue={showDelete}>
              <p>scroll to the bottom of the screen to see delete options</p>
            </RenderIf>
          </RenderIf>
          <RenderIf isTrue={tick.deletedAt !== null}>
            <BorderlessFloatButton
              text="Un-Delete This Submission"
              padding="1rem 2rem"
              colors={{ text: "#800000", shadow: "#800000" }}
              handleClick={handleUndelete}
            />
          </RenderIf>
        </div>
      </Styles.PageCont>
      {showDelete && (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Are you sure you want to delete this submission forever?
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div onClick={toggleDelete}>
              <HoverCard shadowColor="#800000">
                <span style={{ color: "#800000" }}>No</span>
              </HoverCard>
            </div>
            <div onClick={handleDelete}>
              <HoverCard>
                <span>Yes</span>
              </HoverCard>
            </div>
          </div>
        </div>
      )}
    </BasicPage.Text>
  );
};

export default ProcessTick;

const ImageCard = ({ imageUrl }) => (
  <Styles.Container>
    <Styles.HoverCard
      tickImage={imageUrl}
      width={"20rem"}
      height={"20rem"}
    ></Styles.HoverCard>
  </Styles.Container>
);
