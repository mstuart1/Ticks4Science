import styled from 'styled-components'
import React from 'react'


export const Button = {
    Button: styled.div`
        padding: 1rem;
        cursor: pointer;
        background-color: ${({active, bgColor, activeColors}) => active ?  activeColors.bg : bgColor};
        width: ${({sizePx}) => sizePx};
        height: ${({sizePx}) => sizePx}; // width and height have to be the same if you want it to be circles;
        border-radius: 50%;
        // to center the icons in the circles, use the flex
        display: ${({active}) => active ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        // make space between icons
        margin: .7rem 0;
        box-shadow: 0 3px 15px rgba(0,0,0,0.3);
        i {
            font-size: 1.2rem;
            color:  ${({active, iconColor, activeColors}) => active ?  activeColors.icon : iconColor};
            pointer-events: none;
        }
    `
}



const CircleButton = ({sizePx = '55px', active = false, colors = {bg: 'black', icon: 'white'}, activeColors = {bg: 'white', icon: 'black'}, icon}) => {
  return (
    <Button.Button active={active} bgColor={colors.bg} activeColors={activeColors} iconColor={colors.icon}
    >
        <i>{icon}</i>
    </Button.Button>
  )
}

export default CircleButton