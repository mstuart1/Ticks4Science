import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles';
import styled from 'styled-components';
import SubmissionDataService from '../../services/submission'
import TickDataService from '../../services/ticks'


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
CardCont: styled.div`
margin: 1rem;
 padding: 1rem ; 
width: 80vw;
 max-width: 900px;
 border-radius: 1rem;
 box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
`,
}

const ProcessTick = () => {
  let {id} = useParams()

  const [photoReview, setPhotoReview] = useState(false);
  const [request, setRequest] = useState(false)
  const [received, setReceived] = useState(false);
  const [tick, setTick] = useState({});
  const [tickSpp, setTickSpp] = useState([]);
  const [identified, setIdentified] = useState()

  useEffect(() => {
    let getTick = async () => await SubmissionDataService.getProgress(id)

    getTick().then(response => {
      // console.log(response.data)
      setTick(prevState => ({...response.data.record}))
    })
  }, [])

  // useEffect(()=> {
    // console.log(`identified: `, identified)
  // }, [identified])

  useEffect(() => {
    let getData = async () =>
      await TickDataService.getAllTicks();

    getData().then(response => {
      // console.log(response.data.data)
      // adding in the not a tick option - this is not included in the db so it doesn't screw up the tick list on other pages
      setTickSpp(prevState => [ ...response.data.data])

    })
  }, [])

  const notATick = tickSpp.filter(tick => tick.scientific === 'Not A Tick')[0]


  const handlePhotoReview = (id, evt) => {
    // console.log(evt)
    let { value } = evt.target
    setPhotoReview(value)
    if (value) {
      let data = { photosReviewed: new Date() }

      return updateSub(data, id)

    }
    else return
  }

  const handleRequest = (id, evt) => {
    let { value } = evt.target
    setRequest(value)
    if (value) {
      let data = { specimenRequested: new Date() }

      return updateSub(data, id)

    }
    else return
  }

  const handleReceived = (id, evt) => {
    let { value } = evt.target
    setReceived(value)
    if (value) {
      let data = { specimenReceived: new Date() }

      return updateSub(data, id)

    }
    else return
  }

  const handleIdentified = (id, evt) => {
    let { value } = evt.target
    setIdentified(value)
     // asynchronous so identified not updated yet
    if (value) {
      let data = { specimenIdentified: new Date(), tickId: value }

      return updateSub(data, id)

    }
    else return
  }

  const updateSub = async (data, id) => {
    let response = await SubmissionDataService.updateSub(data, id);
    let updatedTick = response.data.record

    setTick(prevState => ({ ...prevState, ...updatedTick }))
  }


  // console.log(`tick`, tick)
  

  return (tick.id) 
  ? (
    <BasicPage.Text>
      {/* <p>Developers Note: based on emails, it looks like Dina plans to request all ticks be sent in, the photo review is to make sure it is a tick, not to identify it.  With this info I made the flow of information follow the path that if the photos have been reviewed, the specimen requested button appears or not a tick button, if the specimen has been requested, the submission received button appears, if the specimen has been recieved, the speicies buttons appear to choose the identification.</p> */}
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        <Styles.CardCont >
          
            <h2 >Status Info</h2>
            <p>ID: {tick.id}</p>
            <p>Date Submitted: {tick.createdAt.substring(0, 10)}</p>

{/* Photo Review button or status */}
            {tick.photosReviewed
              ? <p>Photos Reviewed: {tick.photosReviewed.substring(0, 10)} </p>
              :
              ( 
                <BasicPage.RadioButtons>
                <input
                  // key={`not-a-tick-1`}
                  type='radio'
                  // name={'tickId'}
                  value={photoReview}
                  checked={photoReview === 0}
                  id={'photoReview'}
                  onChange={(evt) => handlePhotoReview(tick.id, evt)}
                />
                <label htmlFor={`photoReview`}>Photos have been reviewed</label>
              </BasicPage.RadioButtons>
              )
            }
{/* Speciment request button/status or not a tick */}
            {tick.photosReviewed && (tick.specimenRequested 
            ?<p>Specimen Requested: {tick.specimenRequested.substring(0, 10)}</p>
              
              : !tick.tickId && ( <BasicPage.RadioButtons>
                
              <input
                // key={`not-a-tick-1`}
                type='radio'
                value={notATick.id}
                checked={identified === notATick.id}
                id={'tickId'}
                onChange={(evt) => handleIdentified(tick.id, evt)}
              />
              <label htmlFor={`tickId`}>Not A Tick</label>

              <input
                // key={`not-a-tick-1`}
                type='radio'
                name={'request'}
                value={request}
                checked={request === 0}
                id={'request'}
                onChange={(evt) => handleRequest(tick.id, evt)}
              />
              <label htmlFor={`request`}>Request Specimen</label>
            </BasicPage.RadioButtons> )
              )}
              
           {/* Specimen recieved button or status */}
           {tick.specimenRequested && (tick.specimenReceived 
            ?<p>Specimen Received: {tick.specimenReceived.substring(0, 10)}</p>
              
              : ( <BasicPage.RadioButtons>
                <input
                type='radio'
                name={'received'}
                value={received}
                checked={received === 0}
                id={'received'}
                onChange={(evt) => handleReceived(tick.id, evt)}
              />
              <label htmlFor={`received`}>Received Specimen</label>
            </BasicPage.RadioButtons> )
              )}

{/* Speciment identified button or status */}
              {tick.tickId 
            ?  <> <p>Specimen Identified: {tick.specimenIdentified.substring(0,10)}</p> <p>Species: {tick.tick.scientific}</p></>
              
              : ((tick.specimenReceived && !tick.tickId) && 
                tickSpp.map(item => (
                <BasicPage.RadioButtons key={item.id}>

                <input
                type='radio'
                value={item.id}
                checked={identified == item.id}
                id={`identified-${item.id}`}
                onChange={(evt) => handleIdentified(tick.id, evt)}
                // onChange={(evt) => console.log('clicked button')}
              />
              <label htmlFor={`identified-${item.id}`}>{item.scientific}</label>
            </BasicPage.RadioButtons>
              ))
              )
              }



            {/* {tick.tickId ? : <p>placeholder</p>} */}
           
          </Styles.CardCont>
        
          <Styles.CardCont><p>Click on the photo to view full size</p>
          {/* <p>Click the X to remove photo from server forever. This is a good idea if it is not a tick to save server space.</p> */}
        </Styles.CardCont>
        <a href={tick.photoFrontUrl} target="_blank" rel="noreferrer"> <ImageCard imageUrl={tick.photoFrontUrl} /></a>
        <a href={tick.photoBackUrl} target="_blank" rel="noreferrer"> <ImageCard imageUrl={tick.photoBackUrl} /></a>
        {tick.photoOtherUrl && <a href={tick.photoOtherUrl} target="_blank" rel="noreferrer"> <ImageCard imageUrl={tick.photoOtherUrl} /></a>}

        <Styles.CardCont >
          <div style={{ margin: '1rem', padding: '1rem' }}>
            <h2>Tick Found</h2>
            <p>Date Tick Found: {tick.dateTickFound}</p>
            <p>Found On: {tick.foundOn}</p>
            {tick.foundOnOther && <p>Found On Other: {tick.foundOnOther}</p>}
            {!tick.tickAttached && <p>Tick Attached: No</p>}
            <p>Location Found: {tick.locationDesc} </p>
            {tick.locationDescOther && <p>Found  Other: {tick.locationDescOther}</p>}
            <p>Municipality: {tick.tickMuni}</p>
            <p>Zip Code: {tick.tickZip.toString().padStart(5, "0")}</p>
            <p>Activities: {tick.activities} </p>
          </div>
        </Styles.CardCont>
        {tick.tickAttached && (
          <Styles.CardCont >
            <div style={{ margin: '1rem', padding: '1rem' }}>
              <h2>Tick Attached</h2>
              <p>Tick Attached: {tick.tickAttached}</p>
              {tick.animal && <p>Animal: {tick.animal}</p>}
              <p>Date Removed: {tick.dateRemoved}</p>
              <p>Person Bitten: {tick.personBitten}</p>
              <p>Submitter Bitten: {tick.submitterBitten}</p>
              {!tick.submitterBitten && <p>Bitten Municipality: {tick.bittenMuni}</p>}
              {!tick.submitterBitten && <p>Bitten Zip Code: {tick.bittenZip.toString().padStart(5, "0")}</p>}
              <p>Bitten Traveled: {tick.bittenTraveledDom} </p>
              {tick.bittenTraveledDom && <p>{tick.travelInfo}</p>}

            </div>
          </Styles.CardCont>
        )}
       
        <Styles.CardCont >
          <div style={{ margin: '1rem', padding: '1rem' }}>
            <h2>Submitter Info</h2>
            <p>Municipality: {tick.userMuni}</p>
            <p>Zip Code: {tick.userZip.toString().padStart(5, "0")}</p>
          </div>
        </Styles.CardCont>
      </div>
    </BasicPage.Text>
  ) 
  : (<BasicPage.Text>Loading...</BasicPage.Text>)
}

export default ProcessTick

const ImageCard = ({ imageUrl }) => (
  <Styles.Container>
    <Styles.HoverCard tickImage={imageUrl} width={'20rem'} height={'20rem'}>
    </Styles.HoverCard>
  </Styles.Container>
)
