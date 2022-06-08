import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'
import { FaStar } from 'react-icons/fa'
import TickDataService from '../../services/ticks'
import { theme } from '../../theme'
import OutlineCard from '../ui/outlineCard/OutlineCard'
import styled from 'styled-components'
import {scapularis} from './tickFiles/scapularis'
import scap3 from '../../images/scap3.jpeg'

const Styles = {
  CardCont: styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
  margin: 2rem;
  background-color: ${({theme}) => theme.colors.grey1};
  border-radius: ${({theme}) => theme.borderRadius};
  width: 800px;
  `,
  
  TopCont: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width:${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
  }
  
  `,
  TopImgCont: styled.div`
  margin: 2rem;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
  `,
  TopInfoCont: styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  // flex: 1;
  h1 {
    font-size: 2rem;
  }
  div {
    font-size: 1.6rem;
  }
  `,
  MiddleCont: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
  }
  `,
  MiddleInfo: styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  `,
  InfoItem: styled.div`
  margin: 1rem;
  `,
  LifeCont: styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  `,
  PhotoGallery: styled.div`
  display: flex;
  flex-wrap: wrap
  `,
}


const TickPage = () => {
  let { id } = useParams()



  return (
    
   <Styles.CardCont>
     <Styles.TopCont className='topCont'>
     <Styles.TopImgCont className='imgCont'>
     <img src={scapularis.keyImg} alt='tick'/>
     <p>{scapularis.keyImgCap}</p>
     </Styles.TopImgCont>
     <Styles.TopInfoCont className = 'InfoCont'>
       <h1>Common Name: {scapularis.common}</h1>
       <h1>Scientific Name: <i>{scapularis.scientific}</i></h1>
       <h3>{scapularis.people}</h3><br/>
       {scapularis.info}
     </Styles.TopInfoCont>
     </Styles.TopCont>
     <Styles.MiddleCont>
       <Styles.MiddleInfo>

       <Styles.InfoItem><h2>Hosts</h2>{scapularis.hosts}</Styles.InfoItem>
       <Styles.InfoItem><h2>Habitat</h2>{scapularis.habitat}</Styles.InfoItem>
       <Styles.InfoItem><h2>Locations in NJ</h2>{scapularis.njLoc}</Styles.InfoItem>
       </Styles.MiddleInfo>
     </Styles.MiddleCont>
     <Styles.LifeCont>
       <h2>Life Stages</h2>
       <i>Tick Larvae</i>
       {scapularis.larva}
       <i>Tick Nymphs</i>
       {scapularis.nymph}
       <i>Tick Adults</i>
       {scapularis.adult}
     </Styles.LifeCont>
     <h3>A Reminder About Engorged Ticks</h3>
     <p>Blood feeding increases the <BasicPage.InnieLink to='/tickOrInsect'><span>ticks's size drastically</span></BasicPage.InnieLink> and can increase the chances of them passing on a <BasicPage.InnieLink to='/disease'><span>pathogen</span></BasicPage.InnieLink></p>
   </Styles.CardCont>
  
  )
}

export default TickPage