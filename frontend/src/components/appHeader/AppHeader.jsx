import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ticks } from "../ticks/ticks";
import { 
  MenuButton,
  ProjectTitle,
  ScreenContainer,
  TickContainer, 
 } from "./AppHeader.styled";

 let width = window.innerWidth

 let mainColor = '#eead29'
 let oppositeColor = '#296aee' // #29eead, #ad29ee


const AppHeader = () => {

  const navigate = useNavigate();
  const [toggleList, setToggleList] = useState(false)
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  useEffect ( () => {
    setMenuHeight(dropdownRef.current?.offsetHeight)
  }, [])
  
// const calcHeight = element => {
//   const height = element.offsetHeight;
//   setMenuHeight(height)
// }

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

  const mainMenuElements =   (
    <>
    <MenuButton onClick={handleToggle} position='relative'>
    <h2>Ticks of NJ</h2>
    <TickContainer setDisplay={toggleList} height={menuHeight} ref={dropdownRef}>
    {tickElements }
    </TickContainer>
    </MenuButton>
    
    
    <MenuButton onClick={() => navigate('/submit')}>
    <h2>Submit a Tick</h2>
    </MenuButton>
    <MenuButton onClick={() => navigate('/')}>
    <h2>About the Project</h2>
    </MenuButton>
    </>
  )

  return (
    <BasicPage.ScreenContainer>
      <ProjectTitle>
      <Link to='/'><h1>Project Name</h1></Link>
      {width > 450 && mainMenuElements}
      </ProjectTitle>
      {width <= 450 && mainMenuElements}
    </BasicPage.ScreenContainer>
  );
};

export default AppHeader;
