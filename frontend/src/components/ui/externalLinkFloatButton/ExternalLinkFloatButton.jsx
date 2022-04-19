import React from 'react'
import styled from 'styled-components'


const Styles =  {
    Link: styled.a`
    text-decoration: none;
    color: ${({ colors }) => colors.text};
    `,
    HoverCard: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    box-shadow: 0 3px 15px ${({ colors }) => colors.shadow+20};
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
        text-align: center
    }
    `,
}

const ExternalLinkFloatButton = ({colors={text: 'black', shadow: '#000000', bg: 'white'}, to='https://www.rutgers.edu/', width='', height='', padding='2rem 4rem', text='external link'}) => {
  return (
    <Styles.Link href={to} target='_blank' rel='noreferrer' colors={colors}>
        <Styles.HoverCard colors={colors} width={width} height={height} padding={padding}>
            <span>{text}</span>
        </Styles.HoverCard>
      </Styles.Link>
  )
}

export default ExternalLinkFloatButton