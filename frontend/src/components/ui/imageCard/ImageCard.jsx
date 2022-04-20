import React from 'react'
import styled from 'styled-components'

const Styles = {
    ImageCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: ${({width}) => width}; 
    height: ${({height}) => height}; 

    border-radius: 1rem;
    box-shadow: 0 3px 15px ${({ shadowColor }) => shadowColor || '#000000'}20;
    margin: 1rem;
    background-image: url(${({background}) => background});
    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
  }
    `,
}

const ImageCard = ({background, shadowColor = '#000000', bgColor='#ffffff', width = '20rem', height='20rem', children}) => {
  return (
   <Styles.ImageCard background={background} shadowColor={shadowColor} bgColor={bgColor} width={width} height={height}> 
       {children}
   </Styles.ImageCard>
  )
}

export default ImageCard