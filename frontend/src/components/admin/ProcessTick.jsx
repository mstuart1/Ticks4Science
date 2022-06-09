import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles';
import styled from 'styled-components';
import SubmissionDataService from '../../services/submission'
import TickDataService from '../../services/ticks'
import InternalLinkFloatButton from '../ui/internalLinkFloatButton/InternalLinkFloatButton'
import { theme } from '../../theme'
import OutlineCard from '../ui/outlineCard/OutlineCard'
import HoverCard from '../ui/hoverCard/HoverCard'


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

  border-radius: ${({ theme }) => theme.borderRadius};
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
  PageCont: styled.div`
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items; center;
  `,
  CardCont: styled.div`
margin: 1rem;
 padding: 1rem ; 
width: 80vw;
 max-width: 900px;
 border-radius: ${({ theme }) => theme.borderRadius};
 box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
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
}

const ProcessTick = () => {
  let { id } = useParams()

  const [tick, setTick] = useState({});
  const [tickSpp, setTickSpp] = useState([]);
  
  // get the tick info from db
  useEffect(() => {
    let getTick = async () => await SubmissionDataService.getProgress(id)

    getTick().then(response => {
      // console.log(response.data)
      setTick(prevState => ({ ...response.data.record }))
    })
  }, [id])

  // useEffect(()=> {
  // console.log(`identified: `, identified)
  // }, [identified])

  // get all the tick options
  useEffect(() => {
    let getData = async () =>
      await TickDataService.getAllTicks();

    getData().then(response => {
      // console.log(response.data.data)
      // adding in the not a tick option - this is not included in the db so it doesn't screw up the tick list on other pages
      setTickSpp(prevState => [...response.data.data])

    })
  }, [])

  
  const handlePhotoReview = (id) => {
    let data = { photosReviewed: new Date() }
    return updateSub(data, id)
  }

  const handleNotATick = (id) => {
    let data = { notATick: true, specimenIdentified: new Date() }
    return updateSub(data, id)
  }

  const handleRequest = (id) => {
    let data = { specimenRequested: new Date() }
    return updateSub(data, id)
  }

  const handleReceived = (id) => {
    let data = { specimenReceived: new Date() }
    return updateSub(data, id)
  }

  const handleIdentified = (id, tickId) => {
      let data = { specimenIdentified: new Date(), tickId: tickId }
      return updateSub(data, id)
  }

  const updateSub = async (data, id) => {
    let response = await SubmissionDataService.updateSub(data, id);
    let updatedTick = response.data.record

    setTick(prevState => ({ ...prevState, ...updatedTick }))
  }


  // console.log(`tick`, tick)


  return (
    <BasicPage.Text>
      {/* <p>Developers Note: based on emails, it looks like Dina plans to request all ticks be sent in, the photo review is to make sure it is a tick, not to identify it.  With this info I made the flow of information follow the path that if the photos have been reviewed, the specimen requested button appears or not a tick button, if the specimen has been requested, the submission received button appears, if the specimen has been recieved, the speicies buttons appear to choose the identification.</p> */}
      <InternalLinkFloatButton colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/admin/allSubs' text='Back to All Submissions' />
      <Styles.PageCont>
       
        <OutlineCard >
          <Styles.CardInsides>

      
          <h2>Status Info</h2>
          ID: {tick?.id}<br />
          Date Submitted: {tick?.createdAt?.substring(0, 10)}<br />

          {/* Photo Review button or status */}
          {tick.photosReviewed
            ? <span>Photos Reviewed: {tick.photosReviewed.substring(0, 10)} <br /></span>
            :
            (<div onClick={() => handlePhotoReview(tick.id)}>
              <HoverCard shadowColor={theme.colors.ruTeal}>
                Click here when photos have been reviewed
              </HoverCard>
            </div>
            )
          }
          {/* Specimen request button/status or not a tick */}
          {tick.photosReviewed && (tick.specimenRequested
            ? <span>Specimen Requested: {tick.specimenRequested.substring(0, 10)}<br/></span>

            : !tick.tickId && (
            <>
            {console.log(tick.notATick)}
            {!tick.notATick 
            ? (<div onClick={() => handleNotATick(tick.id)}>
              <HoverCard shadowColor={theme.colors.ruTeal}>
                Click if it is not a tick
              </HoverCard>
            </div>) 
            : <OutlineCard padding='1rem 2rem'>Not A Tick</OutlineCard>}
              {!tick.notATick && (<div onClick={() => handleRequest(tick.id)}>
                <HoverCard shadowColor={theme.colors.ruTeal}>
                  Click here to request a specimen
                </HoverCard>
              </div>)}
              </>

            ))
          }



          {/* Specimen recieved button or status */}
          {tick.specimenRequested && (tick.specimenReceived
            ? <span>
              Specimen Received: {tick.specimenReceived.substring(0, 10)}<br/>
            </span>
            : (
              (<div onClick={() => handleReceived(tick.id)}>
              <HoverCard shadowColor={theme.colors.ruTeal}>
                Click if you've received tick
              </HoverCard>
            </div>) 
              )
          )}

          {/* Speciment identified button or status */}
          {tick.tickId
            ? <> Specimen Identified: {tick.specimenIdentified.substring(0, 10)}<br/> Species: {tick.tick.scientific}<br/></>

            : ((tick.specimenReceived && !tick.tickId) &&
              tickSpp.map(item => (<div onClick={() => handleIdentified(tick.id, item.id)}>
                
              <HoverCard shadowColor={theme.colors.ruTeal}>
                {item.scientific}
              </HoverCard>
            </div>)
               
              ))
            
          }



          {/* {tick.tickId ? : <p>placeholder</p>} */}

       
          </Styles.CardInsides>
           </OutlineCard>
        {/* <p>Click on the photo to view full size</p> */}

        <a href={tick.photoFrontUrl} target="_blank" rel="noreferrer"> <ImageCard imageUrl={tick.photoFrontUrl} /></a>
        <a href={tick.photoBackUrl} target="_blank" rel="noreferrer"> <ImageCard imageUrl={tick.photoBackUrl} /></a>
        {tick.photoOtherUrl && <a href={tick.photoOtherUrl} target="_blank" rel="noreferrer"> <ImageCard imageUrl={tick.photoOtherUrl} /></a>}

        <OutlineCard >
          <div style={{ margin: '1rem', padding: '1rem' }}>
            <h2>Tick Info</h2>
            Date Tick Found: {tick.dateTickFound}<br/>
            Found On: {tick.foundOn}<br/>
            {tick.foundOnOther && <span>Found On Other: {tick.foundOnOther}<br/></span>}
            {!tick.tickAttached && <span>Tick Attached: No<br/></span>}
            Location Found: {tick.locationDesc} <br/>
            {tick.locationDescOther && <span>Found  Other: {tick.locationDescOther}<br/></span>}
            Municipality: {tick.tickMuni}<br/>
            Zip Code: {tick.tickZip?.toString().padStart(5, "0")}<br/>
            Activities: {tick.activities ? <span>{tick.activities}</span> : <span>None reported</span> }
          </div>
        </OutlineCard>
        {tick.tickAttached && (
          <OutlineCard >
            <div style={{ margin: '1rem', padding: '1rem' }}>
              <h2>Tick Attached</h2>
              <p>Tick Attached: {tick.tickAttached}</p>
              {tick.animal && <p>Animal: {tick.animal}</p>}
              <p>Date Removed: {tick.dateRemoved}</p>
              <p>Person Bitten: {tick.personBitten}</p>
              <p>Submitter Bitten: {tick.submitterBitten}</p>
              {!tick.submitterBitten && <p>Bitten Municipality: {tick.bittenMuni}</p>}
              {!tick.submitterBitten && <p>Bitten Zip Code: {tick.bittenZip?.toString().padStart(5, "0")}</p>}
              <p>Bitten Traveled: {tick.bittenTraveledDom} </p>
              {tick.bittenTraveledDom && <p>{tick.travelInfo}</p>}

            </div>
          </OutlineCard>
        )}

        <OutlineCard >
          <div style={{ margin: '1rem', padding: '1rem' }}>
            <h2>Submitter Info</h2>
            <p>Municipality: {tick.userMuni}</p>
            <p>Zip Code: {tick.userZip?.toString().padStart(5, "0")}</p>
          </div>
        </OutlineCard>
        <InternalLinkFloatButton colors={{ text: theme.colors.ruTeal, shadow: theme.colors.ruTeal }} to='/admin/allSubs' text='Back to All Submissions' />
      </Styles.PageCont>
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
