import React from 'react'
import styled from 'styled-components'

const Styles = {
    HoverCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: ${({width}) => width}; 
    height: ${({height}) => height}; 

    border-radius: 1rem;
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
    margin: 1rem;
    background-color: ${({ bgColor }) => bgColor || 'white'};
    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
  }
    `,
}

const HoverCard = ({shadowColor = '#000000', bgColor='#ffffff', width = '20rem', height='20rem', children}) => {
  return (
   <Styles.HoverCard shadowColor={shadowColor} bgColor={bgColor} width={width} height={height}> 
       {children}
   </Styles.HoverCard>
  )
}

export default HoverCard