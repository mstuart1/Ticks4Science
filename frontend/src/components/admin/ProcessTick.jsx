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
import Pathogens from "./Pathogens";


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

  // get the tick info from db
  useEffect(() => {
    let getTick = async () => await SubmissionDataService.getProgress(id);

    getTick().then((response) => {
      // console.log(response.data)
      setTick((prevState) => ({ ...response.data.record }));
    });
  }, [id]);

  // get all the tick options
  useEffect(() => {
    let getData = async () => await TickDataService.getAllTicks();

    getData().then((response) => {
      // console.log(response.data.data)
      // adding in the not a tick option - this is not included in the db so it doesn't screw up the tick list on other pages
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
    console.log(id);
    console.log(labNumber);
    let data = { labNumber: labNumber };
    return updateSub(data, id);
  };

  const handleLifeStageChange = ({ target }) => {
    setLifeStage({ lifeStage: target.value });
    handleLifeStage(id, lifeStage);
  };
  const handleLifeStage = (id, lifeStage) => {
    let data = lifeStage;
    return updateSub(data, id);
  };
  const handleEngorgedChange = ({ target }) => {
    setEngorged({ engorged: target.value });
    handleEngorged(id, engorged);
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

  const updateSub = async (data, id) => {
    let response = await SubmissionDataService.updateSub(data, id);
    let updatedTick = response.data.record;

    setTick((prevState) => ({ ...prevState, ...updatedTick }));
  };

  const handleDelete = async () => {
    let response = await SubmissionDataService.deleteSub(id);
    console.log(response.data);
    navigate("/admin");
  };

  const stageArray = [
    { value: "male", required: true, label: "male" },
    { value: "female", required: true, label: "female" },
    { value: "nymph", required: true, label: "nymph" },
    { value: "larva", required: true, label: "larva" },
  ];
  const engorgedArray = [
    { value: "true", required: true, label: "true" },
    { value: "false", required: true, label: "false" },
  ];

  // console.log(`tick`, lifeStage);

  return (
    <BasicPage.Text>
      <InternalLinkFloatButton
        colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }}
        to={-1}
        text="  Back to List  "
      />
      <Styles.PageCont>
        <RenderIf isTrue={tick?.blitzLoc?.length > 0}>
          <BasicPage.SectionTitle>
            This is a Tick Blitz Submission
          </BasicPage.SectionTitle>
        </RenderIf>
        <OutlineCard>
          <Styles.CardInsides>
            <h2>Status Info</h2>
            ID: {tick?.id}
            <br />
            Date Submitted: {tick.createdAt?.substring(0, 10)}
            <br />
            This is a duplicate to submission ID:{" "}
            {tick.duplicate ? (
              tick.duplicate
            ) : (
              <>
                <input
                  type="text"
                  name="duplicate"
                  value={dupId}
                  placeholder="Enter id number for original submission here"
                  onChange={handleChange}
                />
                <button onClick={() => handleDuplicate(tick.id, dupId)}>
                  Remove Duplicate From List
                </button>
              </>
            )}
            <p>
              If you define this submission as a duplicate, the original will
              stay in the lists and the duplicate(s) will be removed. Do not
              mark the original as a duplicate.
            </p>
            {/* Photo Review button or status */}
            {tick.photosReviewed ? (
              <span>
                Photos Reviewed: {tick.photosReviewed.substring(0, 10)} <br />
              </span>
            ) : (
              <div onClick={() => handlePhotoReview(tick.id)}>
                <HoverCard shadowColor={theme.colors.ruTeal}>
                  Click here when photos have been reviewed
                </HoverCard>
              </div>
            )}
            {/* put engorged and lab number here */}
            {/* Specimen request button/status or not a tick */}
            {tick.photosReviewed &&
              (tick.specimenRequested ? (
                <span>
                  Specimen Requested: {tick.specimenRequested.substring(0, 10)}
                  <br />
                </span>
              ) : (
                !tick.tickId && (
                  <>
                    {/* {console.log(tick.notATick)} */}
                    {!tick.notATick ? (
                      <div onClick={() => handleNotATick(tick.id)}>
                        <HoverCard shadowColor={theme.colors.ruTeal}>
                          Click if it is not a tick
                        </HoverCard>
                      </div>
                    ) : (
                      <span>Photo ID: Not a tick</span>
                    )}
                    {!tick.notATick && (
                      <>
                        {!tick.photoId && !idByPhoto && (
                          <div onClick={() => handleIdByPhoto()}>
                            <HoverCard shadowColor={theme.colors.ruTeal}>
                              Click here to id tick by photo
                            </HoverCard>
                          </div>
                        )}
                        <div onClick={() => handleRequest(tick.id)}>
                          <HoverCard shadowColor={theme.colors.ruTeal}>
                            Click here to request a specimen
                          </HoverCard>
                        </div>
                        {idByPhoto &&
                          tickSpp.map((item) => (
                            <div
                              onClick={() => handlePhotoId(tick.id, item.id)}
                            >
                              <HoverCard shadowColor={theme.colors.ruTeal}>
                                {item.scientific}
                              </HoverCard>
                            </div>
                          ))}
                      </>
                    )}
                  </>
                )
              ))}
            <span style={{ margin: "1rem 0" }}>
              Life Stage:
              <BasicPage.RadioButtons style={{ width: "25rem" }}>
                <FormSelectionBlocks
                  input={lifeStage}
                  handleChange={handleLifeStageChange}
                  fieldName="lifeStage"
                  valueArray={stageArray}
                />
              </BasicPage.RadioButtons>
            </span>
            <span style={{ margin: "1rem 0" }}>
              Engorged:
              <BasicPage.RadioButtons>
                <FormSelectionBlocks
                  input={engorged}
                  handleChange={handleEngorgedChange}
                  fieldName="engorged"
                  valueArray={engorgedArray}
                />
              </BasicPage.RadioButtons>
            </span>
            {tick.photoId && (
              <span>
                Photo ID: {tick.photo.scientific}
                <br />
                Photo ID'd by:{" "}
                {`${tick.photoIdUser?.firstName} ${tick.photoIdUser?.lastName}`}
              </span>
            )}
            {/* Specimen received button or status */}
            {tick.specimenRequested &&
              (tick.specimenReceived ? (
                <span>
                  Specimen Received: {tick.specimenReceived.substring(0, 10)}
                  <br />
                </span>
              ) : (
                <div onClick={() => handleReceived(tick.id)}>
                  <HoverCard shadowColor={theme.colors.ruTeal}>
                    Click if you've received tick
                  </HoverCard>
                </div>
              ))}
            {/* Speciment identified button or status */}
            {tick.specimenId ? (
              <>
                {" "}
                Specimen Identified: {tick.specimenIdentified.substring(0, 10)}
                <br /> Species: {tick.specimen.scientific}
                <br /> Specimen ID'd by:{" "}
                {`${tick.specIdUser?.firstName} ${tick.specIdUser?.lastName}`}
              </>
            ) : (
              tick.specimenReceived &&
              !tick.tickId &&
              tickSpp.map((item) => (
                <div onClick={() => handleIdentified(tick.id, item.id)}>
                  <HoverCard shadowColor={theme.colors.ruTeal}>
                    {item.scientific}
                  </HoverCard>
                </div>
              ))
            )}
            {tick.labNumber ? (
              <span>Lab Number: {tick.labNumber}</span>
            ) : (
              <>
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
                  style={{ width: "30rem", padding: "1rem", margin: "1rem 0" }}
                  onClick={() => handleLabNumber(id, labNumber)}
                >
                  Save Lab Number
                </button>
              </>
            )}
          </Styles.CardInsides>
        
        </OutlineCard>
        {/* <p>Click on the photo to view full size</p> */}

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

        <SubTickInfo tick={tick}></SubTickInfo>
        <Pathogens tick={tick} />
        <OutlineCard>
          <div style={{ margin: "1rem", padding: "1rem" }}>
            <h2>Submitter Info</h2>
            <p>Municipality: {tick.userMuni}</p>
            <p>Zip Code: {tick.userZip?.toString().padStart(5, "0")}</p>
          </div>
        </OutlineCard>
       <div>
       <InternalLinkFloatButton
          colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }}
          to={-1}
          text="  Back to List  "
        />
        <div onClick={toggleDelete}>
          <HoverCard padding="1rem 2rem" shadowColor="#800000">
            <span style={{ color: "#800000", fontWeight: "bold" }}>
              Delete This Submission
            </span>
          </HoverCard>
        </div>
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
