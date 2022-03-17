import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
// import RutgersFooter from './components/rutgersFooter/RutgersFooter';
// import RutgersHeader from './components/rutgersHeader/RutgersHeader';

// TODO add in rutgers header/footer

let navMenuItems = [
  {id: 1, text: 'Tick Gallery', path: '#', menuItems: ticks, internal: true},
  {id: 4, text: 'Steps to Participate', path: '/steps', internal: true},
  // {id: 5, text: 'How to Identify a Tick', path: '/identify', internal: true},
  // {id: 5, text: 'How to Take Tick Pics', path: '/photo', internal: true},
  // {id: 2, text: 'Tick Submission', path: '/preSurvey', internal: true},
  {id: 3, text: 'About the Project', path: '/', internal: true},
]

const App = () => {
  return (
    <ThemeProvider theme={theme}>
  <div>
    {/* <RutgersHeader/> */}
    {/* <AppHeader/> */}
    <Navbar title='Ticks for Science!' navItemArray={navMenuItems}/>
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/ticks/:id' element={<TickPage/>}/>
        <Route path='/preSurvey' element={<PreSurvey/>}/>
        <Route path='/steps' element={<Steps/>}/>
        <Route path='/identify' element={<Identify/>}/>
        <Route path='/photo' element={<Photo/>}/>
      </Routes>
      </ScrollToTop>
      
      {/* <RutgersFooter/> */}
  </div>
  </ThemeProvider>
  )
};

export default App;
