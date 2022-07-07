import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { Link, useLocation
  // , useNavigate
 } from "react-router-dom";
import { BasicPage } from "../GeneralStyles";
import SubmissionDataService from '../../services/submission'
import SubCard from './SubCard'
import styled from "styled-components";
import InternalLinkFloatButton from "../ui/internalLinkFloatButton/InternalLinkFloatButton";
// import { theme } from "../../theme";
// import { useDispatch } from "react-redux";

// import { getOrgDataRequest } from "./actions";
// import { PageContainer} from '../styles/Common.styled'
// import { useDispatch, useSelector } from "react-redux";
// import { CreateButton } from "../dataSources/DataSource.styled";
// import { Instructions } from "./Orgs.styled";
// import OrgTable from "./OrgTable"

const Styles = {
    Input: styled.input`
    width: 80vw;

    @media screen and (min-width:${({ theme }) => theme.mobile}) {
        max-width: 800px;
      }
    `,
    Link: styled(Link)`
    text-decoration: none;
    color: black;
    `,
    Card: styled.div`
    margin: 1rem;
    padding: 1rem ; 
    width: 80vw;
    max-width: 900px;
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
    `,
    Waiting: styled.div`
    display: flex;
    justify-content: space-between;
    `,
    WaitingGroup: styled.div`
    margin: 2rem;
    padding: 2rem;
    background-color: #dfdfdf;
    border-radius: 1rem;
    `,
}

const AllSubs = () => {

    const location = useLocation()
    let filter = location.state?.filter || ""

    const [data, setData] = useState([])

    const token = useSelector(state => state.token.data)
    

    
    useEffect(() => {
        let getData = async (token) => {
            
         return await SubmissionDataService.getAllSubm(token);
        }
        
        getData(token).then(response => {
          // console.log(response.data.record)
          setData(response.data.record)
          
        })
        
        
      }, [token])

      console.log(filter)
      
      let pendReceived =  data.filter(sub => sub.specimenRequested && sub.specimenReceived === null);
      let totalIdent = data.filter(sub => sub.specimenIdentified)
  let pendingPhotos = data.filter(item => item.photosReviewed === null)
  let pendingSpecimens = data.filter(item => item.specimenReceived !== null && item.specimenIdentified === null)

  const createCardElems = data => {
    let cards = data.map(sub => (
      <SubCard item={sub} key={sub.id}/>
  ))
  return cards
  }

  let totalCards = createCardElems(data)
  let photoCards = createCardElems(pendingPhotos)
  let specimenCards = createCardElems(pendingSpecimens)
  let mailCards = createCardElems(pendReceived)
  let identCards = createCardElems(totalIdent)
  
  return   (
    <BasicPage.Text>
       
        <InternalLinkFloatButton padding="1rem 2rem" text='Back to Dashboard' to='/admin' />
         <Styles.Waiting>
          {filter === 'totalSubs' && (
            <Styles.WaitingGroup>
              <h2>All Submissions</h2>
              {totalCards}
            </Styles.WaitingGroup>
          )}
          {filter === 'pendPhotos' && (
             <Styles.WaitingGroup>
             <h2>Waiting for Photo Review</h2>
             {photoCards}
           </Styles.WaitingGroup>
          )}
          {filter === 'pendReceived' && (
             <Styles.WaitingGroup>
             <h2>Waiting for User to Mail In</h2>
             {mailCards}
           </Styles.WaitingGroup>
          )}
          {filter === 'pendIdentified' && (
             <Styles.WaitingGroup>
             <h2>Waiting for Lab to Identify Specimen</h2>
             {specimenCards}
           </Styles.WaitingGroup>
          )}
          {filter === 'totalIdent' && (
             <Styles.WaitingGroup>
             <h2>All Identified</h2>
             {identCards}
           </Styles.WaitingGroup>
          )}
         {filter === '' && (
          <>
          <Styles.WaitingGroup>
          <h2>Waiting for Photo Review</h2>
          {photoCards}
        </Styles.WaitingGroup>
        <Styles.WaitingGroup>
          <h2>Waiting for Specimen Review</h2>
          {specimenCards}
        </Styles.WaitingGroup>
        </>
         )}
         </Styles.Waiting>
    </BasicPage.Text>
  )
}

export default AllSubs



