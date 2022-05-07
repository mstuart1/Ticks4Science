import React from 'react'
import styled from 'styled-components'


const HSStyles = {
    // whitespace method - does not work for Edge
    WSWrapper: styled.div`
    overflow-x: scroll; // enables horizontal scrolling
  overflow-y: hidden; // turns off veritical scrolling for this container
  white-space: nowrap; // disable wrapping so the cards appears in a row
  -webkit-overflow-scrolling: touch; // smooths the scrolling on iOS  
  &::-webkit-scrollbar {
    display: none;
  } // get rid of scrollbars
  `,
    WSCard: styled.div`
    display: inline-block;  // display cards in a row
    `,
    // flex method - might need some browser prefixes
    FlexWrapper: styled.div`
    display: flex;
    flex-wrap: nowrap; // does the same thing as whitespace: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; // smooths the scrolling on iOS
    &::-webkit-scrollbar {
        display: none;
      } // get rid of scrollbars


    `,
    FlexCard: styled.div`
    flex: 0 0 auto;
    `
}

// cardArray expects card to have id, title
const HorizontalScroller = ({cardArray = []}) => {
    let cardElements = cardArray.map(card => (
        <HSStyles.WSCard key={card.id}><h2>{card.title}</h2></HSStyles.WSCard>
    ))
    return (
        <HSStyles.WSWrapper>
           {cardElements}
        </HSStyles.WSWrapper>
    )
}

export default HorizontalScroller