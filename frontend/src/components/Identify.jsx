import React from "react";
import { BasicPage } from "./GeneralStyles";
import {useNavigate} from 'react-router-dom'

const Identify = () => {

  const navigate = useNavigate()

  return (
    <BasicPage.ScreenContainer>
      <BasicPage.PageContainer>
        <BasicPage.Text>
          <h1>How to identify a tick</h1>
          <p>
            As a citizen scientist, we encourage you to verify your specimen
            before submission. Below are reference photos of sex/stage of some
            NJ ticks!
          </p>
          <h2>Tick Larvae</h2>
          {/* //TODO replace with real info */}
          <p>Lorem ipsum waiting for text and photos from group....</p>
          <h2>Tick Nymphs</h2>
          <p>Lorem ipsum waiting for text and photos from group....</p>
          <h2>Tick Adults</h2>
          <p>Lorem ipsum waiting for text and photos from group....</p>
          <h2>Sex Shape Difference</h2>
          <p>Lorem ipsum waiting for text and photos from group....</p>
          <h2>Engorged Ticks</h2>
          <p>Lorem ipsum waiting for text and photos from group....</p>
          <h2>Four most common species in New Jersey:</h2>
          <div style={{marginBottom: '1em'}}>
            {/* These ids come from the ticks.js flatfile that contains all of the info for the ticks */}
            <BasicPage.StyledButton  onClick={() => navigate(`/ticks/7`)}color='black'>Asian longhorned tick, Haemaphysalis longicornis</BasicPage.StyledButton>
            <BasicPage.StyledButton onClick={() => navigate(`/ticks/11`)}color='black'>Blacklegged tick, Ixodes scapularis</BasicPage.StyledButton>
            <BasicPage.StyledButton onClick={() => navigate(`/ticks/1`)}color='black'>Lone star tick, Amblyomma americanum</BasicPage.StyledButton>
            <BasicPage.StyledButton onClick={() => navigate(`/ticks/5`)}color='black'>American dog tick, Dermacentor variabilis</BasicPage.StyledButton>
            </div>
        </BasicPage.Text>
      </BasicPage.PageContainer>
    </BasicPage.ScreenContainer>
  );
};

export default Identify;
