import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageContainer, ScreenContainer } from '../about/About.styled'
import { MenuButton } from '../appHeader/AppHeader.styled'
import { TickName } from './TickPage.styled'

const TickPage = () => {
  let {sciName} = useParams()
  const [togglePhotos, setTogglePhotos] = useState(false)

  const photoList = [];

  const handleToggle = () => {
    setTogglePhotos(!togglePhotos)
  }

  return (
   <ScreenContainer>
     <PageContainer>
       <div>
       <h1 style={{textAlign: 'center'}}>This page will contain information about <TickName>{sciName}</TickName>.</h1>

       <h2>Text</h2>
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </p>
       <h2>Guidance</h2>
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </p>
       <MenuButton style={{color: 'black'}}onClick={handleToggle}>Show Me Photos of Ticks</MenuButton>
       {togglePhotos && photoList.length > 0 ? photoList : <h3>Sorry, no photos for this tick have been submitted, please <Link to='/submit'>submit a tick</Link> to help us share information.</h3>}
       </div>
     </PageContainer>
   </ScreenContainer>
  )
}

export default TickPage