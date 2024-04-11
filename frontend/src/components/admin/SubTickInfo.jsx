import React from 'react'
import styled from 'styled-components'

let SpecOutline = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: ${({ theme }) => theme.borderRadius};
border: 2px solid ${({ bgColor }) => bgColor + 30 || 'grey'};
background-color: ${({ bgColor }) => bgColor + 20 || 'white'};
padding: 2rem; 
margin: 1rem;
width: ${({ width }) => width};
height: ${({ height }) => height};
flex-grow: 1;
`
const Styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p {
        margin: 1rem;
    },

    `,
  // SpecOutline: styled.div`
  // ${StyledCard} {

  // }`
  
}


const SubTickInfo = ({ tick }) => {
  return (
    <SpecOutline >
      <h2>Tick Info</h2>
      <Styles.Container>
        <p>Date Tick Found: {tick.dateTickFound?.substring(0, 10)}</p>
        <p>Found On: {tick.foundOn}</p>
        <p>Embedded: {tick.tickAttached}</p>
        <p>Found in City: {tick.tickMuni}</p>
        <p>Found in Zip Code: {tick.tickZip?.toString().padStart(5, "0")}</p>
        <p>Activities: {tick.activities}</p>
      </Styles.Container>
    </SpecOutline>
  )
}

export default SubTickInfo