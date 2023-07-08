import RenderIf from "../../tools/RenderIf"
import OutlineCard from "../ui/outlineCard/OutlineCard"
import BorderlessFloatButton from "../ui/borderlessFloatButton/BorderlessFloatButton";
import styled from 'styled-components'
import { theme } from '../../theme'
import { BasicPage } from "../GeneralStyles";
import FormSelectionBlocks from "../ui/formSelectionBlocks/FormSelectionBlocks";
import { useEffect, useState } from "react";
import TickDataService from '../../services/ticks'
import { lifeStages } from "../../data/lifeStages";

const { ruTeal } = theme.colors

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

const StatusCard = ({ tick, updateSub, user, id }) => {

    const [lifeStage, setLifeStage] = useState({ lifeStage: "" });
    const [engorged, setEngorged] = useState({ engorged: false });
    const [labNumber, setLabNumber] = useState("");
    const [tickSpp, setTickSpp] = useState([]);
    const [idByPhoto, setIdByPhoto] = useState(false);

    // get all the tick options
    useEffect(() => {
        let getData = async () => await TickDataService.getAllTicks();

        getData().then((response) => {
            // console.log('processTicks.getData', response.data)
            setTickSpp([...response.data.allTicks]);
        });
    }, []);

    const handleRequest = (id) => {
        let data = { specimenRequested: new Date() };
        return updateSub(data, id);
    };
    const handlePhotoReview = (id) => {
        let data = { photosReviewed: new Date() };
        return updateSub(data, id);
    };

    const handleNotATick = (id) => {
        let data = { notATick: true, specimenIdentified: new Date() };
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
    const engorgedArray = [
        { value: "true", required: true, label: "true" },
        { value: "false", required: true, label: "false" },
    ];

    return (
        <OutlineCard width="430px">
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
    )
}
export default StatusCard