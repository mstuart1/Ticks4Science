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
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: 0 3px 15px ${({ colors }) => colors.shadow+40};
    margin: 1rem 3rem;
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
        font-size: 1.6rem;
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