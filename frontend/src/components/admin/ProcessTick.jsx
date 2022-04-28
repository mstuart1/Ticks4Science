import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles';
import HoverCard from '../ui/hoverCard/HoverCard';
import styled from 'styled-components';
import SubmissionDataService from '../../services/submission'

// TODO create a way for staff to input photo review info
// TODO create a way to delete photos

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

  border-radius: 1rem;
  box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
  margin: 1rem;
  background-image: 
  // linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), 
  url('${({ tickImage }) => tickImage}');
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  &:hover {
      opacity: 0.9;
      transform: scale(0.98);
}
  `,

}

const ProcessTick = () => {
  let location = useLocation();

  const [photoReview, setPhotoReview] = useState(false);
  const [request, setRequest] = useState(false)
  const [tick, setTick] = useState(location.state.tick);

  
  const handlePhotoReview = async (id, evt) => {
    let {value} = evt.target
    setPhotoReview(value)
    if (value){
      let data = {photosReviewed: new Date()}
      
      let updatedTick =  await SubmissionDataService.updateSub(data, id);
      console.log(updatedTick)
      return setTick(updatedTick.data.record)

    }
    else return
  }

  const handleRequest = async (id, evt) => {
    let {value} = evt.target
    setRequest(value)
    if (value){
      let data = {specimenRequested: new Date()}
      
      let updatedTick =  await SubmissionDataService.updateSub(data, id);
      console.log(updatedTick)
      return setTick(updatedTick.data.record)

    }
    else return
  }

  // console.log(tick)

  return (
    <BasicPage.Text>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <HoverCard >
          <div style={{ margin: '1rem', padding: '1rem' }}>
            <h2 >Status Info</h2>
            <p>ID: {tick.id}</p>
            <p>Date Submitted: {tick.createdAt.substring(0, 10)}</p>
            <p>Photos Reviewed: {tick.photosReviewed ? tick.photosReviewed.substring(0, 10) : <input type='checkbox' value={photoReview} onChange={(evt) => handlePhotoReview(tick.id, evt)} />}</p>
            <p>Specimen Requested: {tick.specimenRequested ? tick.specimenRequested.substring(0, 10) : <input type='checkbox' value={request} onChange={(evt) => handleRequest(tick.id, evt)} />}</p>
            <p>Specimen Received: {tick.specimenReceived}</p>
            <p>Specimen Identified: {tick.specimenIdentified}</p>
            <o>Species: {tick.tickId}</o>
        </HoverCard>
        <HoverCard >
          <div style={{ margin: '1rem', padding: '1rem' }}>
            <h2>Tick Found</h2>
            <p>Date Tick Found: {tick.dateTickFound}</p>
            <p>Found On: {tick.foundOn}</p>
            {tick.foundOnOther && <p>Found On Other: {tick.foundOnOther}</p>}
            {!tick.tickAttached && <p>Tick Attached: No</p>}
            <p>Location Found: {tick.locationDesc} </p>
            {tick.locationDescOther && <p>Found  Other: {tick.locationDescOther}</p>}
            <p>Municipality: {tick.tickMuni}</p>
            <p>Zip Code: {tick.tickZip}</p>
            <p>Activities: {tick.activities} </p>
          </div>
        </HoverCard>
        {tick.tickAttached && (
          <HoverCard >
            <div style={{ margin: '1rem', padding: '1rem' }}>
              <h2>Tick Attached</h2>
              <p>Tick Attached: {tick.tickAttached}</p>
              {tick.animal && <p>Animal: {tick.animal}</p>}
              <p>Date Removed: {tick.dateRemoved}</p>
              <p>Person Bitten: {tick.personBitten}</p>
              <p>Submitter Bitten: {tick.submitterBitten}</p>
              {!tick.submitterBitten && <p>Bitten Municipality: {tick.bittenMuni}</p>}
              {!tick.submitterBitten && <p>Bitten Zip Code: {tick.bittenZip}</p>}
              <p>Bitten Traveled: {tick.bittenTraveledDom} </p>
              {tick.bittenTraveledDom && <p>{tick.travelInfo}</p>}

            </div>
          </HoverCard>
        )}
        <HoverCard><p>Click on the photo to view full size</p>
          {/* <p>Click the X to remove photo from server forever. This is a good idea if it is not a tick to save server space.</p> */}
        </HoverCard>
        <a href={tick.photoFrontUrl} target="_blank" rel="noreferrer"> <ImageCard imageUrl={tick.photoFrontUrl} /></a>
        <a href={tick.photoBackUrl} target="_blank" rel="noreferrer"> <ImageCard imageUrl={tick.photoBackUrl} /></a>
        {tick.photoOtherUrl && <a href={tick.photoOtherUrl} target="_blank" rel="noreferrer"> <ImageCard imageUrl={tick.photoOtherUrl} /></a>}
        <HoverCard >
          <div style={{ margin: '1rem', padding: '1rem' }}>
            <h2>Submitter Info</h2>
            <p>Municipality: {tick.userMuni}</p>
            <p>Zip Code: {tick.userZip}</p>
          </div>
        </HoverCard>
      </div>
    </BasicPage.Text>
  )
}

export default ProcessTick

const ImageCard = ({ imageUrl }) => (
  <Styles.Container>
    <Styles.HoverCard tickImage={imageUrl} width={'20rem'} height={'20rem'}>
    </Styles.HoverCard>
  </Styles.Container>
)