import styled from 'styled-components'
import React from 'react'


export const Button = {
    Button: styled.div`
    padding: 1rem;
        cursor: pointer;
        background-color: ${({active, bgColor, activeColor}) => active ?  activeColor: bgColor};
        width: 55px;
        height: 55px; // width and height have to be the same if you want it to be circles;
        border-radius: 50%;
        // to center the icons in the circles, use the flex
        display: flex;
        justify-content: center;
        align-items: center;
        // make space between icons
        margin: .7rem 0;
        box-shadow: 0 3px 15px rgba(0,0,0,0.3);
        i {
            font-size: 1.2rem;
            color:  ${({iconColor}) => iconColor};
            pointer-events: none;
        }
    `
}



const CircleButton = ({active, iconColor, bgColor, activeColor, icon}) => {
  return (
    <Button.Button active={active} bgColor={bgColor} activeColor={activeColor} iconColor={iconColor}
    >
        <i>{icon}</i>
    </Button.Button>
  )
}

export default CircleButton