import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
// import AppHeader from './components/appHeader/AppHeader';
import Navbar from './components/navSuite/Navbar';
import SubmitPhoto from './components/photos/SubmitPhoto';
import ScrollToTop from './components/ScrollToTop';
import TickPage from './components/ticks/TickPage';
import { ticks } from './components/ticks/ticks';
// import RutgersFooter from './components/rutgersFooter/RutgersFooter';
// import RutgersHeader from './components/rutgersHeader/RutgersHeader';

let navMenuItems = [
  {id: 1, text: 'Ticks of NJ', path: '#', menuItems: ticks},
  {id: 2, text: 'Submit a Tick', path: '/submit'},
  {id: 3, text: 'About the Project', path: '/'},
]

navMenuItems.map(item => {
  console.log(item.menuItems)
})

const App = () => {
  return (
  <div>
    {/* <RutgersHeader/> */}
    {/* <AppHeader/> */}
    <Navbar title='Project Title' navItemArray={navMenuItems}/>
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/submit' element={<SubmitPhoto/>}/>
        <Route path='/tick/:id' element={<TickPage/>}/>
      </Routes>
      </ScrollToTop>
      
      {/* <RutgersFooter/> */}
  </div>
  )
};

export default App;
