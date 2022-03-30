import React from 'react';
import { Route, Routes,  } from 'react-router-dom';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import TickPage from './components/ticks/TickPage';
import { ThemeProvider } from "styled-components";
import {theme} from './theme'
import PreSurvey from './components/PreSurvey';
import Steps from './components/Steps';
import Identify from './components/Identify';
import Photo from './components/Photo';
import RutgersFooter from './components/rutgersFooter/RutgersFooter';
import RutgersHeader from './components/rutgersHeader/RutgersHeader';
import NavbarComp from './components/mobileNav/Navbar';
import NotReady from './components/NotReady';
import styled, { createGlobalStyle } from 'styled-components'
import Ticks from './components/ticks/Ticks';
import { BasicPage } from "./components/GeneralStyles";
import TickRemoval from './components/ticks/TickRemoval';
import TickCheck from './components/ticks/TickCheck';
import Prevention from './components/Prevention';
import Diseases from './components/Diseases';


const App = () => {

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
    <BasicPage.ScreenContainer>
    <BasicPage.PageContainer>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/identify' element={<Identify/>}/>
        <Route path='/photo' element={<Photo/>}/>
        <Route path='/preSurvey' element={<PreSurvey/>}/>
        <Route path='/ticks' element={<Ticks/>}/>
        <Route path='/ticks/:id' element={<TickPage/>}/>
        <Route path='/steps' element={<Steps/>}/>
        <Route path='/removal' element={<TickRemoval/>}/>
        <Route path='/check' element={<TickCheck/>}/>
        <Route path='/prevention' element={<Prevention/>}/>
        <Route path='/disease' element={<Diseases/>}/>
        <Route path='/notReady' element={<NotReady/>}/>
      </Routes>
      </BasicPage.PageContainer>
      </BasicPage.ScreenContainer>
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