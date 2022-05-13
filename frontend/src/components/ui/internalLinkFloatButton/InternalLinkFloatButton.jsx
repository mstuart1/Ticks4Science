import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styles =  {
    Link: styled(Link)`
    text-decoration: none;
    color: ${({ colors }) => colors.text};
    `,
    HoverCard: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
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
    }
    `,
}

const InternalLinkFloatButton = ({colors={text: 'black', shadow: '#000000', bg: 'white'}, to='/', width='', height='', padding='2rem 4rem', text='internal link'}) => {
  return (
    <Styles.Link to={to} colors={colors}>
        <Styles.HoverCard colors={colors} width={width} height={height} padding={padding}>
            <span>{text}</span>
        </Styles.HoverCard>
      </Styles.Link>
  )
}

export default InternalLinkFloatButton