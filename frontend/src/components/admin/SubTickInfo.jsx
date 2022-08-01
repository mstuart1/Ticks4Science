import React from 'react'
import styled from 'styled-components'
import OutlineCard from '../ui/outlineCard/OutlineCard'

const Styles = {
    Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p {
        margin: 0.5rem;
    }
    `,
}

const SubTickInfo = ({tick}) => {
  return (
    <OutlineCard>
        <h2>Tick Info</h2>
        <Styles.Container>
        <p>Date Tick Found: {tick.dateTickFound?.substring(0,10)}</p>
        <p>Found On: {tick.foundOn}</p>
        <p>Attached: {tick.tickAttached}</p>
        <p>Found in Municipality: {tick.tickMuni}</p>
        <p>Found in Zip Code: {tick.tickZip?.toString().padStart(5, "0")}</p>
        <p>Activities: {tick.activities}</p>
        <p>Travel History: {tick.travelInfo}</p>
        </Styles.Container>
    </OutlineCard>
  )
}

export default SubTickInfo