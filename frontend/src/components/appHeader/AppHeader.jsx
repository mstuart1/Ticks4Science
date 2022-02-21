import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ticks } from "../ticks/ticks";
import { 
  MenuButton,
  ProjectTitle,
  ScreenContainer,
  TickContainer, 
 } from "./AppHeader.styled";


const AppHeader = () => {

  const navigate = useNavigate();
  const [toggleList, setToggleList] = useState(false)

  const handleToggle = () => {
    setToggleList(!toggleList)
  }

  const handleTickSelect = (id) => {
    navigate(`/tick/${id}`) // future will go to specific id
    setToggleList(!toggleList)
  }

  const tickElements = ticks.map((tick, i) => (
    <MenuButton key={i} onClick={ () => handleTickSelect(tick.sciName)}>
      <h2>{tick.sciName}</h2>
    </MenuButton>
  ))

  return (
    <ScreenContainer>
      <ProjectTitle>
      <h1>Project name</h1>
      </ProjectTitle>
      <MenuButton onClick={handleToggle}>
      <h2>Ticks of NJ</h2>
      </MenuButton>
      <TickContainer setDisplay={toggleList}>
      {tickElements }
      </TickContainer>
      
      <MenuButton onClick={() => navigate('/submit')}>
      <h2>Submit a Tick</h2>
      </MenuButton>
      <MenuButton onClick={() => navigate('/')}>
      <h2>About the Project</h2>
      </MenuButton>
    </ScreenContainer>
  );
};

export default AppHeader;
