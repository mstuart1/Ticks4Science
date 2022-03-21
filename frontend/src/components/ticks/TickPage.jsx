import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BoxInset, PageContainer, ScreenContainer } from '../GeneralStyles'
// import { MenuButton } from '../appHeader/AppHeader.styled'
import { ShowMeButton, TickName } from './TickPage.styled'
import { ticks } from './ticks'

const TickPage = () => {
  let { id } = useParams()
  const [togglePhotos, setTogglePhotos] = useState(false)

  const photoList = [];

  const handleToggle = () => {
    setTogglePhotos(!togglePhotos)
  }

  let tick = ticks.filter(tick => tick.id === parseInt(id))[0]

  return (
    <ScreenContainer>
      <PageContainer>
        <div>
          <h1 style={{ textAlign: 'center' }}><TickName>{tick.title}</TickName></h1>

          {tick.common ? (<p>Common name(s): {tick.common}</p>) : null}

          {tick.first || tick.comment ? (
            <BoxInset>

            {tick.first ? (<span> First reported in {tick.first}.<br /></span>) : null}
            {tick.second ? (<span> Second report in {tick.second}.<br /></span>) : null}
            {tick.comment ? (<span>{tick.comment}.<br /></span>) : null}
          </BoxInset>
          ) : null}
          {tick.loc || tick.habitat ? (
            <BoxInset>
            {tick.loc ? (<> <h4>Location in New Jersey</h4>
              {tick.loc}</>) : null}

            {tick.habitat ? (<> <h4>Habitat</h4>
              {tick.habitat}</>) : null}

          </BoxInset>
          ) : null}
          <h3>{tick.info}</h3>
          <h4>Larvae</h4>
          {tick.larvae?.photos.length > 0 ? tick.larvae.photos : `No photos available`}<br />
          {tick.larvae?.active ? (<span>Active from {tick.larvae.active}<br /></span>) : null}
          {tick.larvae?.feed ? (<span> Primarily feed on {tick.larvae?.feed}<br /></span>) : null}
          <h4>Nymphs</h4>
          {tick.nymphs?.photos.length > 0 ? tick.nymphs.photos : `No photos available`}<br />
          {tick.nymphs?.active ? (<span>Active from {tick.nymphs.active}<br /></span>) : null}
          {tick.nymphs?.feed ? (<span> Primarily feed on {tick.nymphs?.feed}<br /></span>) : null}

          <h4>Adults</h4>
          {tick.adults?.photos.length > 0 ? tick.adults.photos : `No photos available`}<br />
          {tick.adults?.active ? (<span>Active from {tick.adults.active}<br /></span>) : null}
          {tick.adults?.feed ? (<span> Primarily feed on {tick.adults?.feed}<br /></span>) : null}
          <h4>Sex Shape Difference</h4>
          {tick.sexPhotos?.length > 0 ? tick.sexPhotos : `No photos available`}<br />
          {tick.female ? (<span>Female: {tick.female}<br /></span>) : null}
          {tick.male ? (<span>Male: {tick.male}<br /></span>) : null}
          {tick.nymph ? (<span>Nymph: {tick.nymph}<br /></span>) : null}
          {tick.shape ? (<span>Shape: {tick.shape}<br /></span>) : null}
          <h4>Engorged Ticks</h4>
          {tick.engorged?.photos.length > 0 ? tick.engorged.photos : `No photos available`}<br />
          {tick.engorged?.desc ? tick.engorged.desc : null}
          {/* <ShowMeButton  onClick={handleToggle}>Show Me Photos of Ticks</ShowMeButton> */}
          {/* {togglePhotos && photoList.length > 0 ? photoList : <h3>Sorry, no photos for this tick have been submitted, please <Link to='/submit'>submit a tick</Link> to help us share information.</h3>} */}
        </div>
      </PageContainer>
    </ScreenContainer>
  )
}

export default TickPage