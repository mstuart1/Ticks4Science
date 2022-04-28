import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import TickPage from './components/ticks/TickPage';
import { ThemeProvider } from "styled-components";
import { theme } from './theme'
import PreSurvey from './components/survey/PreSurvey';
import Steps from './components/Steps';
import Identify from './components/Identify';
import Photo from './components/Photo';
import RutgersFooter from './components/rutgersFooter/RutgersFooter';
import RutgersHeader from './components/rutgersHeader/RutgersHeader';
import NavbarComp from './components/mobileNav/Navbar';
import NotReady from './components/NotReady';
import styled, { createGlobalStyle } from 'styled-components'
import Ticks from './components/ticks/Ticks';
// import { BasicPage } from "./components/GeneralStyles";
import TickRemoval from './components/ticks/TickRemoval';
import TickCheck from './components/ticks/TickCheck';
import Prevention from './components/Prevention';
import Diseases from './components/Diseases';
import TickOrInsect from './components/ticks/TickOrInsect';
import TickCheckMenu from './components/ticks/TickCheckMenu';
import Survey from './components/survey/Survey';
import ThankYou from './components/survey/ThankYou';
import TickProgress from './components/ticks/TickProgress';
import TickProgressInput from './components/ticks/TickProgressInput';
import Login from './components/admin/Login';
import AddEditTick from './components/admin/AddEditTick';
import ProcessTick from './components/admin/ProcessTick';
import AllSubs from './components/admin/AllSubs';
import AdminMgt from './components/admin/AdminMgt';
import UpdateAccount from './components/admin/UpdateAccount';


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Styles.Wrapper>
        <ScrollToTop>
          <RutgersHeader />
          <NavbarComp />
          <Styles.PageContainer>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/steps' element={<Steps />} />
              <Route path='/ticks' element={<Ticks />} />
              <Route path='/checkMenu' element={<TickCheckMenu />} />
              
              <Route path='/tickOrInsect' element={<TickOrInsect />} />
              <Route path='/photo' element={<Photo />} />
              <Route path='/preSurvey' element={<PreSurvey />} />
              <Route path='/survey' element={<Survey />} />
              <Route path='/thanks' element={<ThankYou />} />
              <Route path='/progress' element={<TickProgressInput buttonColors={{text: theme.colors.ruTeal, bg: 'white', shadow: theme.colors.ruTeal}} />} />
              <Route path='/progress/:id' element={<TickProgress />} />
              <Route path='/check' element={<TickCheck />} />
              <Route path='/prevention' element={<Prevention />} />
              <Route path='/disease' element={<Diseases />} />
              <Route path='/identify' element={<Identify />} />
              <Route path='/ticks/:id' element={<TickPage />} />
              <Route path='/removal' element={<TickRemoval />} />
              <Route path='/notReady' element={<NotReady />} />
              <Route path='/createAccount/:token' element={<UpdateAccount/>} />
              <Route path="/admin/*" element={<AdminMgt />} />
            </Routes>

          </Styles.PageContainer>
          <RutgersFooter />
        </ScrollToTop>
      </Styles.Wrapper>
    </ThemeProvider>

  )
};

export default App;

const Styles = {
  Wrapper: styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || 'white'};
  // height: 100vh;
  font-family: 'Poppins', sans-serif;
  `,
  PageContainer: styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  // height: 100vh;
  
  @media screen and (min-width:${({ theme }) => theme.mobile}) {
    max-width: 1366px;
  }
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
  font-size: 1.2rem;
  font-family: sans-serif;
}
`