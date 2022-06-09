import React from 'react'
import styled from 'styled-components'

const Styles = {
    HoverCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: ${({padding}) => padding}; 
    
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}40;
    margin: 1rem;
    background-color: ${({ bgColor }) => bgColor || 'white'};
    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
  }
    `,
}

const HoverCard = ({shadowColor = '#000000', bgColor='#ffffff',padding='1rem 2rem', children}) => {
  return (
   <Styles.HoverCard shadowColor={shadowColor} bgColor={bgColor} padding={padding}
   > 
       {children}
   </Styles.HoverCard>
  )
}

export default HoverCard