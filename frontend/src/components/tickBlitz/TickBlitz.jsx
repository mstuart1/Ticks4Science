import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BasicPage } from '../GeneralStyles'
import LearnMore from '../ui/learnMore/LearnMore'
import OutlineFloatButton from '../ui/outlineFloatButton/OutlineFloatButton'
import {theme} from '../../theme'
import BorderlessFloatButton from '../ui/borderlessFloatButton/BorderlessFloatButton'

const Styles = {
    Title: styled.h2`
    text-align: center;
    font-weight: 400;
    font-size: 2.8rem;
    `,
    ButtonDiv: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: 2px solid ${({theme}) => theme.colors.grey3};

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
    }
    `,
    CenterCntr: styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 1366px) {
   width: 1000px;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 100vw;
    margin: 1rem;
   }
  `,
  LinkCont: styled.div`
  width: 100%;
//   margin: 1rem;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${({theme}) => theme.colors.grey3};
  `,
}

const TickBlitz = () => {
    const navigate = useNavigate()
    return (
        <BasicPage.Text>
            <Styles.CenterCntr>
            <Styles.Title>Rutgers Tick Blitz</Styles.Title>
            <p>
                In May 2018, {" "}
                <BasicPage.OutieLink href='https://sebsnjaesnews.rutgers.edu/2018/06/rutgers-led-tick-blitz-finds-exotic-longhorned-ticks-and-aggressive-lone-star-ticks-in-new-locations-across-new-jersey/' target={'_blank'} rel='noreferrer'>
                    <span>
                        the first statewide tick surveillance in New Jersey
                    </span>
                </BasicPage.OutieLink>
                {" "}was conducted by Rutgers University researchers in collaboration with 21 county mosquito control agencies. During the campaign, named Tick Blitz, researchers were able to collect 6 species of ticks. The surveillance helped discover an invasive tick species{" "}
                <BasicPage.InnieLink to='/ticks/8'>
                    <span>
                        Asian longhorned tick
                    </span>
                </BasicPage.InnieLink>
                , a new tick species in New Jersey, one of the{" "}
                <BasicPage.InnieLink to='/ticks'>
                    <span>
                        rabbit ticks
                    </span>
                </BasicPage.InnieLink>
                 , and determined a statewide distribution for{" "}

                <BasicPage.InnieLink to='/ticks/6'>
                    <span>
                        American dog tick
                    </span>
                </BasicPage.InnieLink>
                {" "}and{" "}
                <BasicPage.InnieLink to='/ticks/2'>
                    <span>
                        lone star tick
                    </span>
                </BasicPage.InnieLink>.
            </p>
            <p>
                We encourage you to check out the article and publications resulting from the NJ Tick Blitz to learn more about the initiative that inspired NJ Ticks 4 Science! to do a large-scale tick surveillance program across New Jersey!
            </p>
            <Styles.ButtonDiv>
                <BorderlessFloatButton colors={{text: theme.colors.ruTeal, shadow: theme.colors.ruTeal, bg: 'white'}} text='Rutgers News Room'  handleClick={() => window.open('https://www.rutgers.edu/news/rutgers-led-tick-blitz-finds-exotic-longhorned-ticks-and-aggressive-lone-star-ticks-new', '_blank')} />
                
                <BorderlessFloatButton colors={{text: theme.colors.ruTeal, shadow: theme.colors.ruTeal, bg: 'white'}}  text='NCBI Article' handleClick={() => window.open('https://pubmed.ncbi.nlm.nih.gov/31344868/', '_blank')} />
                

                <BorderlessFloatButton colors={{text: theme.colors.ruTeal, shadow: theme.colors.ruTeal, bg: 'white'}} text="Tick Blitz 2018"  handleClick={() => window.open('https://vectorbio.rutgers.edu/TickBlitz.htm', '_blank')} />
            </Styles.ButtonDiv>
            
            <p>
                We encourage you to fully check out our website, which has resources on preventing tick bites! If you happen to find a tick on you or your pet, we also provide resources on how to 
                remove the tick. </p>
                <Styles.LinkCont>
                    <OutlineFloatButton colors={{text: theme.colors.ruTeal, shadow: theme.colors.ruTeal, bg: theme.colors.ruTeal }} handleClick={() => navigate('/checkMenu')} text='Learn more about preventing tick bites and removing ticks' width='80%'/>
               
                </Styles.LinkCont>
                
            <p>

                Since you are here, we hope you are inspired to send us your ticks! Begin a tick submission and help all of us across New Jersey assess our risk from ticks and tick-borne diseases. </p>
                <Styles.LinkCont>
                <OutlineFloatButton colors={{text: theme.colors.ruTeal, shadow: theme.colors.ruTeal, bg: theme.colors.ruTeal }} handleClick={() => navigate('/steps')} text='Find out how to send us your ticks' width='80%'/>
               
                </Styles.LinkCont>
                
            <p>
                If you have already submitted ticks, we thank you for your participation, and encourage you to view the progress on your tick submission.
            </p>
            <Styles.LinkCont>
            <OutlineFloatButton colors={{text: theme.colors.ruTeal, shadow: theme.colors.ruTeal, bg: theme.colors.ruTeal }} handleClick={() => navigate('/progress')} text='Check the progress of your tick submission' width='80%'/>
            
            </Styles.LinkCont>
            
           <LearnMore/>
           </Styles.CenterCntr>
        </BasicPage.Text>
    )
}

export default TickBlitz