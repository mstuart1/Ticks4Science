import React from 'react'
import styled from 'styled-components'

const Styles =  {
   
    HoverCard: styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: 0 3px 15px ${({ colors }) => colors.shadow+40};
    margin: 1rem;
    background-color: ${({ colors }) => colors.bg};
    width: ${({width}) => width};
    height: ${({height}) => height};
    padding: ${({padding}) => padding};
    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }
    span {
        font-weight: bold;
        text-align: center;
        font-size: 1.8rem;
        color: ${({colors}) => colors.text}
    }
    `,
}

const BorderlessFloatButton = ({colors={text: '#000000', shadow: '#000000', bg: '#ffffff'}, handleClick, width='', height='', padding='2rem 4rem', text='button'}) => {
  return (
  
        <Styles.HoverCard colors={colors} width={width} height={height} padding={padding} onClick={handleClick}>
            <span>{text}</span>
        </Styles.HoverCard>
      
  )
}

export default BorderlessFloatButton