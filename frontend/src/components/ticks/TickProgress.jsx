import React, { useEffect, useState } from 'react'
import { FaImages, FaMailBulk, FaRegEnvelopeOpen, FaSearch, FaWpforms } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { BasicPage } from '../GeneralStyles'
import SubmissionDataService from '../../services/submission'
import InternalLinkFloatButton from '../ui/internalLinkFloatButton/InternalLinkFloatButton'
import ExternalLinkFloatButton from '../ui/externalLinkFloatButton/ExternalLinkFloatButton'
import { theme } from '../../theme'

const TickProgress = () => {
  let { id } = useParams()

  const [data, setData] = useState({})

  useEffect(() => {
    let getData = async () =>
      await SubmissionDataService.getProgress(id);

    getData().then(response => {
      let newData = response.data.record
      if (newData === null) {
        return
      } else {
        setData(response.data.record)
      }

    })


  }, [id])

  console.log(data)

  return (Object.keys(data).length === 0
    ?
    (<BasicPage.Text>
      <h3>Sorry, we are unable to find this tick number in our system</h3>
      <InternalLinkFloatButton to='/' text='Return to Home Page' />
      <ExternalLinkFloatButton colors={{ text: 'black', shadow: '#000000', bg: theme.colors.ruYellow }} to='mailto:cvbquestions@njaes.rutgers.edu' text='Questions?  Contact Us' />
    </BasicPage.Text>)
    : data.duplicate ?
      (
        <BasicPage.Text>
          <h3>Uh oh, our computer logged your tick more than once!</h3>
          The correct number to check the progress of your submission is {data.duplicate}.  Please write this number down and use it to check the progress of your tick.
          <InternalLinkFloatButton to='/progress' text='Track Your Tick' />
          <InternalLinkFloatButton to='/' text='Return to Home Page' />
          <ExternalLinkFloatButton colors={{ text: 'black', shadow: '#000000', bg: theme.colors.ruYellow }} to='mailto:cvbquestions@njaes.rutgers.edu' text='Questions?  Contact Us' />
        </BasicPage.Text>
      )
      : (
        <BasicPage.Text>
          <BasicPage.Title>Tick Progress for Tick # {id}</BasicPage.Title>
          <BasicPage.SectionTitle>Bookmark this page!</BasicPage.SectionTitle>
          <Styles.Timeline>

            <div className="timeline-item">
              <Styles.TimelineIcon>
                <i><FaWpforms /></i>
              </Styles.TimelineIcon>

              <p className="tl-duration">{data.createdAt.substring(0, 10)}</p>
              <h5>Form Received</h5>
              <p>
                We have received your form.  Please check back for updates.
              </p>
            </div>

            {data?.photosReviewed !== null && (
              <div className="timeline-item">
                <Styles.TimelineIcon>
                  <i><FaImages /></i>
                </Styles.TimelineIcon>

                <p className="tl-duration">{data.photosReviewed?.substring(0, 10)}</p>
                <h5>Photos Reviewed</h5>
                {data.photoId && (
                  <p>Based on the photo, it looks like this is probably <BasicPage.InnieLink to={`/ticks/${data.photo.id}`}><span>{data.photo.common}</span></BasicPage.InnieLink>.</p>
                )}
                {/* {console.log(data.lifeStage.length)} */}
                {data.engorged !== null && (
                  <p>It {data.engorged ? "appears" : 'does not appear'}  to be engorged.</p>
                )}
                {data.lifeStage?.length > 0 && (
                  <p>The life stage appears to be {data.lifeStage}.</p>
                )}
              </div>
            )}
            {data?.specimenRequested !== null && (
              <div className="timeline-item">
                <Styles.TimelineIcon>
                  <i><FaMailBulk /></i>
                </Styles.TimelineIcon>

                <p className="tl-duration">{data.specimenRequested?.substring(0, 10)}</p>
                <h5>Specimen Requested</h5>
                <ol>
                  <li>
                    Ship flat ticks in standard envelopes, if it is round (<BasicPage.OutieLink href='https://ticks.rutgers.edu/static/media/slide%2011(2).62964332.jpg' target='_blank' rel='noreferrer'><span>engorged</span></BasicPage.OutieLink>) use a padded envelope or bubble mailer.
                  </li>
                  <li>
                    Write your Tick ID number on a piece of paper and place into the envelope
                  </li>
                  <li>
                    Address it to:<br />
                    NJ Ticks 4 Science <br />
                    Rutgers Center for Vector Biology <br />
                    180 Jones Avenue <br />
                    New Brunswick, NJ 08901-8536 <br />
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
                  <i><FaRegEnvelopeOpen /></i>
                </Styles.TimelineIcon>

                <p className="tl-duration">{data.specimenReceived?.substring(0, 10)}</p>
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
                  <i><FaSearch /></i>
                </Styles.TimelineIcon>

                <p className="tl-duration">{data.specimenIdentified?.substring(0, 10)}</p>
                <h5>Specimen Identified</h5>
                {data.notATick ? (
                  <p>
                    The specimen in the photo is not a tick. We encourage you to review <BasicPage.InnieLink to='/tickOrInsect'><span>“Are you sure it's a tick”</span></BasicPage.InnieLink> and continue to participate in NJ Ticks 4 Science! Thank you!
                  </p>
                ) : (
                  <div>
                    <h3> {data.specimen?.common} - <i>{data.specimen?.scientific}</i></h3>
                    <p>
                      <BasicPage.InnieLink to={`/ticks/${data.specimen?.id}`}><span>View more about {data.specimen?.common} here</span></BasicPage.InnieLink>
                    </p>
                    {data.lifeStage && <p>
                      Your tick was at the life stage {data.lifeStage} and was {!data.engorged && 'not'} engorged.
                    </p>}
                  </div>
                )}
              </div>
            )}

            <p>
              Thank you for submitting photos of your tick. We appreciate your contribution and encourage you to continue exploring New Jersey and sending in ticks when encountered.
              Reminder: you must complete a new tick submission each time a tick is sent to NJ Ticks for Science.
            </p>
            {/* <!-- end timeline items --> */}
          </Styles.Timeline>
        </BasicPage.Text>
      )

  )
}

export default TickProgress

const Styles = {
  TimelineIcon: styled.div`
    position: absolute;
    margin-top: 4rem;
    left: -27px;  // check and adjust as needed - can use browser console to tweak until you get the right value
    top: 0;
    background-color: ${({ theme }) => theme.colors.main};
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
        border-left: 1px solid ${({ theme }) => theme.colorGrey5};
        
        .tl-duration {
            padding: .2rem .6rem;
            background-color: ${({ theme }) => theme.colorGrey5};
            border-radius: 15px;
            display: inline-block;
            font-size: 1.2rem;
            text-transform: uppercase;
            font-weight: 500;
        }
        h5 {
            padding: 1rem 0;
            text-transform: uppercase;
            font-size: 1.3rem;
            font-weight: 600;
            span {
                color: ${({ theme }) => theme.colorGrey2};
                font-weight: 500;
                font-size: 1.2rem;
            }
        }
        p {
            color: ${({ theme }) => theme.colorGrey2};
        }

  
}
`
}