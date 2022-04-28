import React, { useEffect, useState } from 'react'
import { FaImages, FaMailBulk, FaRegEnvelopeOpen, FaSearch, FaWpforms } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { BasicPage } from '../GeneralStyles'
import SubmissionDataService from '../../services/submission'

const TickProgress = () => {
    let {id} = useParams()
    // console.log(id)
    const [data, setData] = useState({})

    useEffect(() => {
      let getData = async () => 
       await SubmissionDataService.getProgress(id);
       
      getData().then(response => {
        // console.log(response.data.record)
        setData(response.data.record)
      })
      
      
    }, [id])

    // console.log(data.specimenRequested)

  return ( Object.keys(data).length > 0 ? (
    <BasicPage.Text>
      <BasicPage.Title>Tick Progress for Tick # {id}</BasicPage.Title>
    <Styles.Timeline>
                
    <div className="timeline-item">
      <Styles.TimelineIcon>
        <i><FaWpforms/></i>
      </Styles.TimelineIcon>
       
       <p className="tl-duration">{data.createdAt.substring(0,10)}</p>
        <h5>Form Received</h5>
        <p>
           We have received your form.  Please check back for updates.
        </p>
    </div>
   
   {data?.photosReviewed !== null && (
      <div className="timeline-item">
      <Styles.TimelineIcon>
        <i><FaImages/></i>
      </Styles.TimelineIcon>
       
       <p className="tl-duration">{data.photosReviewed.substring(0,10)}</p>
        <h5>Photos Reviewed</h5>
        {/* <p>
           We have reviewed your photos.   (depending on the results, either the tick species or the submission requested will appear below)
        </p> */}
    </div>
   )}
   {data?.specimenRequested !== null && (
      <div className="timeline-item">
      <Styles.TimelineIcon>
        <i><FaMailBulk/></i>
      </Styles.TimelineIcon>
       
       <p className="tl-duration">{data.specimenRequested.substring(0,10)}</p>
        <h5>Specimen Requested</h5>
        <p>
        Thank you for your tick submission to NJ Ticks for Science! We appreciate your contribution and encourage you to continue your participation with the program by sending the ticks to the Center for Vector Biology at Rutgers University.
        </p>
        <ol>
          <li>Place a few cotton balls in the specimen's plastic bag that it's already contained in.</li>
          <li>
          Package the tick into a standard envelope and address it:<br/>
NJ Ticks for Science<br/>
Center for Vector Biology<br/>
180 Jones Avenue<br/>
New Brunswick, NJ 08901-8536<br/>
          </li>
          <li>
          Write your Tick ID number on a piece of paper and place into the envelope
          </li>
          <li>
          Do NOT provide a return address.
          </li>
          <li>
          Check back to see when your specimen has arrived at the Center for Vector Biology!
          </li>
        </ol>
    </div>
   )}
    {data?.specimenReceived !== null && (
      <div className="timeline-item">
      <Styles.TimelineIcon>
        <i><FaRegEnvelopeOpen/></i>
      </Styles.TimelineIcon>
       
       <p className="tl-duration">{data.specimenReceived.substring(0,10)}</p>
        <h5>Specimen Received</h5>
        <p>
        The specimen has arrived at the Center for Vector Biology! We appreciate your contribution and encourage you to continue exploring New Jersey and sending in ticks when encountered. 
Reminder: you must complete a new tick submission each time a tick is sent to NJ Ticks for Science.

        </p>
        
    </div>
   )}
    {data?.specimenIdentified !== null && (
      <div className="timeline-item">
      <Styles.TimelineIcon>
        <i><FaSearch/></i>
      </Styles.TimelineIcon>
       
       <p className="tl-duration">{data.specimenIdentified.substring(0,10)}</p>
        <h5>Specimen Identified</h5>
          {data.species === 'notATick' ? (
            <p>
              NJ Ticks for Science has identified the specimen as not to be a tick in the photo. We encourage you to continue participating in Ticks for Science by looking into <BasicPage.InnieLink><span>How to Identify a Tick</span></BasicPage.InnieLink> and send other Tick Submissions in the future. Thank you!
            </p>
          ) : (
            <div>
            <h3> {data.tick.common} - <i>{data.tick.scientific}</i></h3>
            <p>
              <BasicPage.InnieLink to={`/ticks/${data.tick.id}`}><span>View more about {data.tick.common} here</span></BasicPage.InnieLink>
            </p>
            </div>
          )}      
    </div>
   )}
   
   <p>
   Thank you for your tick submission to NJ Ticks for Science! We appreciate your contribution and encourage you to continue exploring New Jersey and sending in ticks when encountered. 
Reminder: you must complete a new tick submission each time a tick is sent to NJ Ticks for Science.
   </p>
    {/* <!-- end timeline items --> */}
</Styles.Timeline>
</BasicPage.Text>
  ): (<div>Loading...</div>))
}

export default TickProgress

const Styles = {
  TimelineIcon: styled.div`
    position: absolute;
    margin-top: 4rem;
    left: -27px;  // check and adjust as needed - can use browser console to tweak until you get the right value
    top: 0;
    background-color: ${({theme}) => theme.colors.main};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
        font-size: 2rem;
        color: white;
    }
  `,
  Timeline: styled.div`
    display: flex;
   flex-direction: column;
    padding-bottom: 3rem;
    margin-left: 3rem;
    .timeline-item {
        position: relative;
        padding: 3rem;
        border-left: 1px solid ${({theme}) => theme.colorGrey5};
        
        .tl-duration {
            padding: .2rem .6rem;
            background-color: ${({theme}) => theme.colorGrey5};
            border-radius: 15px;
            display: inline-block;
            font-size: .9rem;
            text-transform: uppercase;
            font-weight: 500;
        }
        h5 {
            padding: 1rem 0;
            text-transform: uppercase;
            font-size: 1.3rem;
            font-weight: 600;
            span {
                color: ${({theme}) => theme.colorGrey2};
                font-weight: 500;
                font-size: 1.2rem;
            }
        }
        p {
            color: ${({theme}) => theme.colorGrey2};
        }

  
}
`
}