import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { Link
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
// TODO instead of search bar, use filtering buttons to get all, need photo review, waiting to receive tick, waiting for identification, identified - search by species

const AllSubs = () => {

  
    const [data, setData] = useState([])
    const [query, setQuery] = useState('');

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

    const handleInputChange = evt => {
    let {value} = evt.target
    // console.log(value)
    setQuery(value)
    }

  //     let filteredData = data.filter(item => {
      
  //   if (query === "") {
  //     return item
  //   } else if (item.toLowerCase().includes(query.toLowerCase())) {
  //     // returns filtered array
  //     return item;
  //   } else {
  //       return item
  //   }
  // });

  let pendingPhotos = data.filter(item => item.photosReviewed === null)
  let pendingSpecimens = data.filter(item => item.specimenReceived !== null && item.specimenIdentified === null)

  const createCardElems = data => {
    let cards = data.map(sub => (
      <SubCard item={sub} key={sub.id}/>
  ))
  return cards
  }


  let photoCards = createCardElems(pendingPhotos)
  let specimenCards = createCardElems(pendingSpecimens)
  
  return   (
    <BasicPage.Text>
        <BasicPage.Form>
         <Styles.Input style={{width: '80vw'}} placeholder="Find a specific tick number" type='search' onChange={handleInputChange}/>
        </BasicPage.Form> 
        <InternalLinkFloatButton padding="1rem 2rem" text='Back to Dashboard' to='/admin' />
         <Styles.Waiting>
         <Styles.WaitingGroup>
          <h2>Waiting for Photo Review</h2>
          {photoCards}
        </Styles.WaitingGroup>
        <Styles.WaitingGroup>
          <h2>Waiting for Specimen Review</h2>
          {specimenCards}
        </Styles.WaitingGroup>
         </Styles.Waiting>
    </BasicPage.Text>
  )
}

export default AllSubs



