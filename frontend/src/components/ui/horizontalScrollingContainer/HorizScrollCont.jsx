import React from 'react'
import styled from 'styled-components'


const Styles = {
  ScrollingWrapper: styled.div`
    width: 70vw;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    @media screen and (min-width:${({ theme }) => theme.mobile}) {
      width: 65vw;
    }
    @media screen and (min-width: 1300px) {
      flex-wrap: wrap;
      overflow: auto;
      justify-content: center;
      
    }
    `,
  CardContainer: styled.div`
    display: inline-block;
    `,
}

const HorizScrollCont = ({ cardArray = [] }) => {

  let cardElements = cardArray.map((card, i) => (
    <Styles.CardContainer key={i}>{card}</Styles.CardContainer>
  ))

  return (
    <Styles.ScrollingWrapper>
      {cardElements}
    </Styles.ScrollingWrapper>
  )
}

export default HorizScrollCont