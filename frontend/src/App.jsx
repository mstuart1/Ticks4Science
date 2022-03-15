import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
// import AppHeader from './components/appHeader/AppHeader';
import Navbar from './components/navSuite/Navbar';
import ScrollToTop from './components/ScrollToTop';
import TickPage from './components/ticks/TickPage';
import { ticks } from './components/ticks/ticks';
import { ThemeProvider } from "styled-components";
import {theme} from './theme'
import PreSurvey from './components/submit/PreSurvey';
// import RutgersFooter from './components/rutgersFooter/RutgersFooter';
// import RutgersHeader from './components/rutgersHeader/RutgersHeader';

let navMenuItems = [
  {id: 1, text: 'Ticks of NJ', path: '#', menuItems: ticks, internal: true},
  {id: 2, text: 'Submit a Tick', path: '/tick-map/preSurvey', internal: false},
  {id: 3, text: 'About the Project', path: '/tick-map/', internal: true},
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
      </Routes>
      </ScrollToTop>
      
      {/* <RutgersFooter/> */}
  </div>
  </ThemeProvider>
  )
};

export default App;
