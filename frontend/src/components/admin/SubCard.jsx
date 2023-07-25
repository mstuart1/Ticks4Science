import React from 'react'
import styled from "styled-components";
import OutlineCard from '../ui/outlineCard/OutlineCard';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

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
    justify-content: space-between;
    `,
  WaitingGroup: styled.div`
    margin: 2rem;
    padding: 2rem;
    background-color: #dfdfdf;
    border-radius: 1rem;
    `,
  // Outline: styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   border-radius: ${({ theme }) => theme.borderRadius};
  //   border: 2px solid ${({ bgColor }) => bgColor + 30 || 'grey'};
  //   background-color: ${({ bgColor }) => bgColor || 'white'};
  //   padding: 2rem; 
  //   margin: 1rem;
  //   width: ${({ width }) => width};
  //   height: ${({ height }) => height};
  //   `,
}

const SubCard = ({ item }) => {
  // console.log('item', item)

  let speciesElem;
  if (item.specimenId) {
    speciesElem = <span>Species: {item.specimen?.scientific}</span>
  } else if (item.notATick) {
    speciesElem = <span>Species: Not a tick</span>
  } else {
    speciesElem = ''
  }
  // console.log('SubCard', item.duplicate)
  return (
    <Styles.Link key={item.id} to={`/admin/processTick/${item.id}`} state={{ tick: item }}>
      <OutlineCard>
        <div>
          {/* {item.duplicate && <strong>Duplicate - do not use</strong>}<br /> */}
          ID: {item.id}<br />
          Date Submitted: {item.createdAt && item.createdAt.substring(0, 10)}<br />
          Photos Reviewed: {item.photosReviewed && item.photosReviewed.substring(0, 10)}<br />
          Photo ID: {item.photoId && item.specimen?.scientific}<br />
          Specimen Requested: {item.specimenRequested && item.specimenRequested.substring(0, 10)}<br />
          Specimen Received: {item.specimenReceived && item.specimenReceived.substring(0, 10)}<br />
          Specimen Identified: {item.specimenIdentified && item.specimenIdentified.substring(0, 10)}<br />
          {speciesElem}<br />
        </div>
        </OutlineCard>
    </Styles.Link>
  )
}

export default SubCard