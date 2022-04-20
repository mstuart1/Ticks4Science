import React from 'react'
import styled from 'styled-components'


const Styles = {
    ScrollingWrapper: styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    `,
    CardContainer: styled.div`
    display: inline-block;
    `,
}

const HorizScrollCont = ({cardArray}) => {

    let cardElements = cardArray.map(card => (
        <Styles.CardContainer>{card}</Styles.CardContainer>
    ))

  return (
    <Styles.ScrollingWrapper>
        {cardElements}
    </Styles.ScrollingWrapper>
  )
}

export default HorizScrollCont