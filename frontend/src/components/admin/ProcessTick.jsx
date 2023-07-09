import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BasicPage } from "../GeneralStyles";
import { theme } from "../../theme";
import SubmissionDataService from "../../services/submission";
import InternalLinkFloatButton from "../ui/internalLinkFloatButton/InternalLinkFloatButton";
import OutlineCard from "../ui/outlineCard/OutlineCard";
import HoverCard from "../ui/hoverCard/HoverCard";
import RenderIf from "../../tools/RenderIf";
import SubTickInfo from "./SubTickInfo";
import BorderlessFloatButton from "../ui/borderlessFloatButton/BorderlessFloatButton";
import DupSubDefine from "./DupSubDefine";
import StatusCard from "./StatusCard";
import SubmitterInfo from "./SubmitterInfo";
import SubPathosList from "./SubPathosList";

let { ruTeal } = theme.colors;

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
  const [showDelete, setShowDelete] = useState(false);

  //** */ get the tick info from db
  useEffect(() => {
    let getTick = async (id) => {
      let response = await SubmissionDataService.getProgress(id);
      setTick({ ...response.data.record });
      // let freshPathos = tick.pathogens?.map((patho) => patho.id);
      // setTickPathos(freshPathos);
    };

    getTick(id);
  }, [id]);

  const toggleDelete = () => setShowDelete(!showDelete);

  const handleUndelete = () => {
    // console.log("clicked");
    updateSub({ deletedAt: null }, id);
  };

  const updateSub = async (data, id) => {
    console.log("updating tick", data);
    await SubmissionDataService.updateSub(data, id).then((response) => {
      let { updatedTick } = response.data;
      console.log("updated", updatedTick);
      setTick((prevState) => ({ ...prevState, ...updatedTick }));
    });
  };

  const handleDelete = async () => {
    let response = await SubmissionDataService.deleteSub(id);
    console.log("deleted", response.data);
    navigate("/admin");
  };

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
          <DupSubDefine tick={tick} updateSub={updateSub} />
        </RenderIf>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <StatusCard tick={tick} updateSub={updateSub} user={user} id={id} />
          <SubTickInfo tick={tick} />
          <SubmitterInfo tick={tick} />
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
          {/* {console.log('tick pathos', tick.pathogens)} */}
          {/* <PathogenCard message='select all that tested positive' checkedPathogens={tick?.pathogens} handleChange={handlePathoChange} /> */}
        </div>
        {tick?.specimen?.id
          ? (<SubPathosList sub={tick} updateSub={updateSub} />)
          : (
            <span>Assign a tick species in order to see the list of possible tests.</span>
          )
        }

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
