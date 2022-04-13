import React from 'react'
import { FaImages, FaMailBulk, FaSearch, FaWpforms } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { BasicPage } from '../GeneralStyles'

const TickProgress = () => {

  

    let {id} = useParams()
    console.log(id)

  return (
    <BasicPage.Text>
      <BasicPage.Title>Tick Progress for Tick # {id}</BasicPage.Title>
    <Styles.Timeline>
                
    <div className="timeline-item">
      <Styles.TimelineIcon>
        <i><FaWpforms/></i>
      </Styles.TimelineIcon>
       
       <p className="tl-duration">Date</p>
        <h5>Form Received</h5>
        <p>
           We have received your form.  Check back in a certain amount of time for updates.
        </p>
    </div>
    {/* // TODO next part could be either reviewing photos or request specimen  */}
    <div className="timeline-item">
      <Styles.TimelineIcon>
        <i><FaImages/></i>
      </Styles.TimelineIcon>
       
       <p className="tl-duration">Date</p>
        <h5>Photos Reviewed</h5>
        <p>
           We have reviewed your photos.   (depending on the results, either the tick species or the submission requested will appear below)
        </p>
    </div>
    <div className="timeline-item">
      <Styles.TimelineIcon>
        <i><FaMailBulk/></i>
      </Styles.TimelineIcon>
       
       <p className="tl-duration">Date</p>
        <h5>Submission Reqeusted</h5>
        <p>
           Please mail your tick to [address]
        </p>
    </div>
    <div className="timeline-item">
      <Styles.TimelineIcon>
        <i><FaSearch/></i>
      </Styles.TimelineIcon>
       
       <p className="tl-duration">Date</p>
        <h5>Specimen Identified</h5>
        <p>
           Your tick is a [species]
        </p>
    </div>
    {/* <!-- end timeline items --> */}
</Styles.Timeline>
</BasicPage.Text>
  )
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