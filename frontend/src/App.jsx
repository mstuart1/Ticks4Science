import React, { useEffect } from 'react';
import { Route, Routes, } from 'react-router-dom';
import About from './components/About/About';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from "styled-components";
import { theme } from './theme'
import PreSurvey from './components/survey/PreSurvey';
import Steps from './components/Steps';
import Photo from './components/Photo';
import RutgersFooter from './components/rutgersFooter/RutgersFooter';
import RutgersHeader from './components/rutgersHeader/RutgersHeader';
import NavbarComp from './components/mobileNav/Navbar';
import styled, { createGlobalStyle } from 'styled-components'
import Ticks from './components/ticks/Ticks';
import TickRemoval from './components/ticks/TickRemoval';
import TickCheck from './components/ticks/TickCheck';
import Diseases from './components/ticks/Diseases';
import TickOrInsect from './components/ticks/TickOrInsect';
import TickCheckMenu from './components/ticks/TickCheckMenu';
import Survey from './components/survey/Survey';
import ThankYou from './components/survey/ThankYou';
import TickProgress from './components/ticks/TickProgress';
import TickProgressInput from './components/ticks/TickProgressInput';
import AdminMgt from './components/admin/AdminMgt';
import ResetPassword from './components/login/ResetPassword';
import TickPage from './components/ticks/TickPage';
import TickBlitz from './components/tickBlitz/TickBlitz';
import BlitzSurvey from './components/tickBlitz/BlitzSurvey';
import MissingId from './components/survey/MissingId';
import './global.module.css';
import ReactGA from 'react-ga'
import { addGaScript, createWindowGTag } from './tools/googleAnalytics';
import Maint from './components/maint/Maint';
import MaintMessage from './components/maint/MaintMessage';
import Submission from './components/subs/Submission';
import MultipleExample from './components/survey/MultipleExample';
import Education from './components/Education/Education';

const trackingId = process.env.REACT_APP_GA_TRACKING
ReactGA.initialize(trackingId)

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

const App = () => {

  //* * if there is upcoming maintenance, 
  /* enter the date(and time) into the maintDate field and activate it.
  /* Update the maintText field.  
  /* Activate the maintActive = currentDate > maintDate version and 
  /* deactivate the =false version 
  /* Once done, change the maintText field to an empty string and
  /* reverse the order of steps above 
  */

  // let currentDate = new Date()
  // let maintDate = new Date("2024-01-17T00:00:00")
  // let maintText = 'Due to inclement weather, the maintenance which will temporarily make the site unavailable has been rescheduled for January 17. We expect this maintenance to take less than an hour.'
  let maintText = ''
  // let maintActive = currentDate > maintDate
  let maintActive = false

  addGaScript()
  createWindowGTag()

  window.gtag('config', process.env.REACT_APP_GA_TRACKING, {
    path_title: window.location.pathname,
    path_page: window.location.pathname
  })

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Styles.Wrapper>
        <ScrollToTop>
          <RutgersHeader />
          <NavbarComp />
          <MaintMessage message={maintText} />
          <Styles.PageContainer>
            <Routes>
              {maintActive ? <Route path='*' element={<Maint />} />
                :
                (<>
                  <Route path='/' element={<About />} />
                  <Route path='/steps' element={<Steps />} />
                  <Route path='/tickOrInsect' element={<TickOrInsect />} />
                  <Route path='/photo' element={<Photo />} />
                  <Route path='/checkMenu' element={<TickCheckMenu />} />
                  <Route path='/check' element={<TickCheck />} />
                  <Route path='/removal' element={<TickRemoval />} />
                  <Route path='/disease' element={<Diseases />} />
                  <Route path='/ticks' element={<Ticks />} />
                  <Route path='/tickBlitz' element={<TickBlitz />} />
                  <Route path='/blitzSurvey' element={<BlitzSurvey />} />
                  <Route path='/preSurvey' element={<PreSurvey />} />
                  <Route path='/survey' element={<Survey />} />
                  <Route path='/thanks' element={<ThankYou />} />
                  <Route path='/missingId' element={<MissingId />} />
                  <Route path='/progress' element={<TickProgressInput buttonColors={{ text: theme.colors.ruTeal, bg: 'white', shadow: theme.colors.ruTeal }} />} />
                  <Route path='/progress/:id' element={<TickProgress />} />
                  <Route path='/submission/:id' element={<Submission />} />
                  <Route path="/admin/*" element={<AdminMgt />} />
                  <Route path='/reset/:token' element={<ResetPassword reset={true} />} />
                  <Route path='/createAccount/:token' element={<ResetPassword create={true} />} />
                  <Route path='/ticks/:id' element={<TickPage />} />
                  <Route path='/multipleExample' element={<MultipleExample />} />
                  <Route path='/resources' element={<Education />} />
                  <Route path='*' element={<About />} />
                </>)}

            </Routes>

          </Styles.PageContainer>
          <RutgersFooter />
        </ScrollToTop>
      </Styles.Wrapper>
    </ThemeProvider>

  )
};

export default App;

