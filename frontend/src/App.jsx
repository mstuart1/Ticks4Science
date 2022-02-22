import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import AppHeader from './components/appHeader/AppHeader';
import SubmitPhoto from './components/photos/SubmitPhoto';
import ScrollToTop from './components/ScrollToTop';
import TickPage from './components/ticks/TickPage';
// import RutgersFooter from './components/rutgersFooter/RutgersFooter';
// import RutgersHeader from './components/rutgersHeader/RutgersHeader';

const App = () => {
  return (
  <div>
    {/* <RutgersHeader/> */}
    <AppHeader/>
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/submit' element={<SubmitPhoto/>}/>
        <Route path='/tick/:sciName' element={<TickPage/>}/>
      </Routes>
      </ScrollToTop>
      
      {/* <RutgersFooter/> */}
  </div>
  )
};

export default App;
