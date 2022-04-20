import React from 'react'
import styled from 'styled-components'


const Styles = {
    ScrollingWrapper: styled.div`
    width: 70vw;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    @media screen and (min-width:${({ theme }) => theme.mobile}) {
      width: 65vw;
    }
    `,
    CardContainer: styled.div`
    display: inline-block;
    `,
}

const HorizScrollCont = ({cardArray}) => {

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