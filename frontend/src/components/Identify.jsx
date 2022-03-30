import React from "react";
import { BasicPage } from "./GeneralStyles";
import {useNavigate} from 'react-router-dom'

const Identify = () => {

  const navigate = useNavigate()

  return (
    
      
        <BasicPage.Text>
          <BasicPage.Title>How to identify a tick</BasicPage.Title>
          <p>
          As a citizen scientist, we encourage you to verify your specimen before submission. Below are reference photos of different life stages of some ticks!
          </p>
          <BasicPage.SectionTitle>Tick Larvae</BasicPage.SectionTitle>
         <img src='' alt='tick larvae'/>
          <BasicPage.SectionTitle>Tick Nymphs</BasicPage.SectionTitle>
          <img src='' alt='tick nymph'/>
          <BasicPage.SectionTitle>Tick Adults</BasicPage.SectionTitle>
          <img src='' alt='tick adult'/>
          {/* <BasicPage.SectionTitle>Sex Shape Difference</BasicPage.SectionTitle>
          <p>Lorem ipsum waiting for text and photos from group....</p> */}
          <BasicPage.SectionTitle>Engorged Ticks</BasicPage.SectionTitle>
          <img src='' alt='engorged tick'/>

          <BasicPage.SectionTitle>
            Highlight: <span style={{backgroundColor: '#eead2970'}}>Size is Important!</span>
          </BasicPage.SectionTitle>
          <p>
          Some ticks can be a speck as big as a period at the end of a sentence or big enough to see on you. Often times, adult ticks can become 3-5 millimeters long. For reference, this may look like a seed. Ticks are usually compared to the size of seeds because of how small they are! 
          </p>
          <p>
          An adult tick may be compared to a sesame seed (3-4mm) or a flaxseed (4-5mm); not just because of their size but because of their shape. A nymphal tick may be compared to a rapeseed (2mm) or a poppy seed (less than 1mm). A larval tick may be referred to as big as a poppy seed or even as small as a grain of sand! 
          </p>
          <p>
          Keep in mind when you're out exploring New Jersey, and doing your <BasicPage.InnieLink to='/check'><span>Tick Checks</span></BasicPage.InnieLink> on your body and pets that not all ticks will look the same shape, size, or color!
          </p>
          <BasicPage.CardContainer>
            <BasicPage.Card>
              <BasicPage.SectionSubtitle>
              Asian longhorn tick and Blacklegged tick next to poppy seeds
              </BasicPage.SectionSubtitle>
              <img src='' alt='ticks with poppy seeds'/>
            </BasicPage.Card>

            <BasicPage.Card>
              <BasicPage.SectionSubtitle>
              Blacklegged tick next to sesame seeds
              </BasicPage.SectionSubtitle>
              <img src='' alt='tick with sesame seeds'/>
            </BasicPage.Card>
            <BasicPage.Card>
              <BasicPage.SectionSubtitle>
              Nymph on seed
              </BasicPage.SectionSubtitle>
              <img src='' alt='tick nymph on seed'/>
            </BasicPage.Card>
          
          </BasicPage.CardContainer>

          

          
          {/* <BasicPage.SectionTitle>Four most common species in New Jersey:</BasicPage.SectionTitle>
          <div style={{marginBottom: '1em'}}> */}
            {/* These ids come from the ticks.js flatfile that contains all of the info for the ticks */}
            {/* <BasicPage.StyledButton  onClick={() => navigate(`/ticks/7`)}color='black'>Asian longhorned tick, Haemaphysalis longicornis</BasicPage.StyledButton>
            <BasicPage.StyledButton onClick={() => navigate(`/ticks/11`)}color='black'>Blacklegged tick, Ixodes scapularis</BasicPage.StyledButton>
            <BasicPage.StyledButton onClick={() => navigate(`/ticks/1`)}color='black'>Lone star tick, Amblyomma americanum</BasicPage.StyledButton>
            <BasicPage.StyledButton onClick={() => navigate(`/ticks/5`)}color='black'>American dog tick, Dermacentor variabilis</BasicPage.StyledButton>
            </div> */}
        </BasicPage.Text>
      
  );
};

export default Identify;
