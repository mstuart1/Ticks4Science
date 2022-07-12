import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { Link, useLocation } from "react-router-dom";
import { BasicPage } from "../GeneralStyles";
import SubmissionDataService from '../../services/submission'
import SubCard from './SubCard'
import styled from "styled-components";
import InternalLinkFloatButton from "../ui/internalLinkFloatButton/InternalLinkFloatButton";
import HoverCard from '../ui/hoverCard/HoverCard'

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
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
    `,
  Waiting: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: space-between;
    width: 100%;
    `,
  WaitingGroup: styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
    margin: 2rem;
    padding: 2rem;
    background-color: #dfdfdf;
    border-radius: 1rem;
    `,
      ButtonDiv: styled.div`
      cursor: pointer;
      `,
      ButtonText: styled.span`
      font-weight: bold;
      `,
      ButtonCont: styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      `,
}

const AllSubs = () => {

  const location = useLocation()
  let filter = location.state?.filter || ""
  let limitMax = location.state?.limitMax 

  console.log(filter)

  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  // const [limit, setLimit] = useState(6);
  const limit = 6;

  const token = useSelector(state => state.token.data)
  

  useEffect(() => {
    let getData = async (token, page, limit, filter) => {
      return await SubmissionDataService.getPageSubm(token, page, limit, filter);
    }

    getData(token, page, limit, filter).then(response => {
      // console.log(response.data.record)
      setData(response.data.record)

    })
  }, [token, page, limit, filter])


  const handlePageClick = value => {
    setPage(prevPage => prevPage + value)
  }
  const filterHeadingArray = [
    {filter: 'totalSubs', heading: 'All Submissions'},
    {filter: 'pendPhotos', heading: 'Waiting for Photo Review'},
    {filter: 'pendRecieved', heading: 'Waiting for User to Mail In'},
    {filter: 'pendIdentified', heading: 'Waiting for Lab to Identify Specimen'},
    {filter: 'totalIdent', heading: 'All Identified'},
  ]

  let heading = filterHeadingArray.filter(item => item.filter === filter)[0].heading || ''

  const createCardElems = data => {

    let cards = data.map(sub => (
      <SubCard item={sub} key={sub.id} />
    ))
    return cards
  }

  let totalCards = createCardElems(data)

  return (
    <BasicPage.Text>

      <Styles.Waiting>
        <h2>{heading}</h2>
       
       <Styles.ButtonCont>
       {page > 0 && <PageButton handleClick={() => handlePageClick(-1)} text='Prev Page'/>}
            
      <InternalLinkFloatButton padding="1rem 2rem" text='Back to Dashboard' to='/admin' />
            
            {page < limitMax && <PageButton handleClick={() => handlePageClick(1)} text='Next Page'/>}
            
       </Styles.ButtonCont>
          <Styles.WaitingGroup>
            
            {totalCards}
          </Styles.WaitingGroup>
        
      </Styles.Waiting>
    </BasicPage.Text>
  )
}

export default AllSubs

const PageButton = ({handleClick, text}) => (
<Styles.ButtonDiv onClick={() => handleClick()}>
  <HoverCard padding="1rem 2rem">
  <Styles.ButtonText>
    {text}
  </Styles.ButtonText>
  </HoverCard>
</Styles.ButtonDiv>
)
