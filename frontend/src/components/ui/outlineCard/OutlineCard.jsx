import React from 'react'
import styled from 'styled-components'

const Styles = {
    OutlineCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    border: 2px solid ${({ bgColor }) => bgColor + 30 || 'grey'};
    background-color: ${({ bgColor }) => bgColor + 20 || 'white'};
    margin: 1rem;
    `,
}

const OutlineCard = ({bgColor, children}) => {
  return (
    <Styles.OutlineCard bgColor={bgColor} >{children}</Styles.OutlineCard>
  )
}

export default OutlineCard