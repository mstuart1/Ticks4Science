import React from 'react'
import styled from 'styled-components'

const Styles = {
  OutlineCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 2px solid ${({ bgColor }) => bgColor + 30 || 'grey'};
    background-color: ${({ bgColor }) => bgColor + 20 || 'white'};
    padding: ${({ padding }) => padding}; 
    margin: ${({ margin }) => margin};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    `,
}

const OutlineCard = ({ bgColor, width = '', height = '', padding = '2rem', margin = '1rem', children }) => {
  return (
    <Styles.OutlineCard bgColor={bgColor} width={width} height={height} padding={padding} margin={margin} >{children}</Styles.OutlineCard>
  )
}

export default OutlineCard