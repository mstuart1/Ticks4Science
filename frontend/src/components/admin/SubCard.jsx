import React from 'react'
import styled from "styled-components";
import OutlineCard from '../ui/outlineCard/OutlineCard';
import { Link } from 'react-router-dom';

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

const SubCard = ({item}) => {
  return (
    <Styles.Link key={item.id} to={`/admin/processTick/${item.id}`} state={{tick: item}}>
    <OutlineCard >
        <div>
        ID: {item.id}<br/>
        Date Submitted: {item.createdAt&& item.createdAt.substring(0,10)}<br/>
        Photos Reviewed: {item.photosReviewed && item.photosReviewed.substring(0,10)}<br/>
        Photo ID: {item.photoId && item.tick?.scientific}<br/>
        Specimen Requested: {item.specimenRequested && item.specimenRequested.substring(0,10)}<br/>
        Specimen Received: {item.specimenReceived && item.specimenReceived.substring(0,10)}<br/>
        Specimen Identified: {item.specimenIdentified && item.specimenIdentified.substring(0,10)}<br/>
        Species: {item.specimenId && item.tick?.scientific}<br/>
        </div>
    </OutlineCard>
    </Styles.Link>
  )
}

export default SubCard