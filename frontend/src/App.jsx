import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About';
// import AppHeader from './components/appHeader/AppHeader';
import Navbar from './components/navSuite/Navbar';
import ScrollToTop from './components/ScrollToTop';
import TickPage from './components/ticks/TickPage';
import { ticks } from './components/ticks/ticks';
import { ThemeProvider } from "styled-components";
import {theme} from './theme'
import PreSurvey from './components/PreSurvey';
import Steps from './components/Steps';
import Identify from './components/Identify';
import Photo from './components/Photo';
import { MenuButton } from './components/appHeader/AppHeader.styled'
import RutgersFooter from './components/rutgersFooter/RutgersFooter';
import RutgersHeader from './components/rutgersHeader/RutgersHeader';
import NavbarComp from './components/mobileNav/Navbar';
import NotReady from './components/NotReady';
import styled, { createGlobalStyle } from 'styled-components'

// TODO move menubutton out of appHeader styled and move appheader to obsolete

let steps = [
  {id: 1, title: 'How to identify a tick', path: '/identify'},
  {id: 2, title: 'How to take tick pics', path: '/photo'},
  {id: 3, title: 'Tick Submission Form', path: '/preSurvey'},
]


let navMenuItems = [
  {id: 1, text: 'Tick Gallery', path: '#', menuItems: ticks, internal: true},
  {id: 4, text: 'Steps to Participate', path: '#', internal: true, menuItems: steps},
  {id: 3, text: 'About the Project', path: '/', internal: true},
]



const App = () => {
  const [toggleList, setToggleList] = useState(false)
  const navigate = useNavigate()
  const handleTickSelect = (id) => {
    navigate(`/tick/${id}`) // future will go to specific id
    setToggleList(!toggleList)
  }
  
  const tickElements = ticks.map(tick => (
    <MenuButton key={tick.id} onClick={ () => handleTickSelect(tick.sciName)}>
      <h2>{tick.sciName}</h2>
    </MenuButton>
  ))


  return (
     <ThemeProvider theme={theme}>
    <Styles.Wrapper>
      <CSSReset/>
    
  <div>
    <RutgersHeader/>
    {/* <AppHeader/> */}
    {/* <Navbar title='Ticks 4 Science!' navItemArray={navMenuItems} navMobileLinks={tickElements}/> */}
    <NavbarComp/>
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/ticks/:id' element={<TickPage/>}/>
        <Route path='/preSurvey' element={<PreSurvey/>}/>
        <Route path='/steps' element={<Steps/>}/>
        <Route path='/identify' element={<Identify/>}/>
        <Route path='/photo' element={<Photo/>}/>
        <Route path='/notReady' element={<NotReady/>}/>
      </Routes>
      </ScrollToTop>
      
      <RutgersFooter/>
  </div>
  </Styles.Wrapper>
  </ThemeProvider>
  
  )
};

export default App;

const Styles = {
  Wrapper: styled.main`
  display: flex;
  background-color: #eeeeee;
  height: 100vh;
  `,
};

const CSSReset = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%; /* 1rem = 10px */
  box-sizing: border-box;
}

body {
  font-size: 1.4rem;
  font-family: sans-serif;
}
`