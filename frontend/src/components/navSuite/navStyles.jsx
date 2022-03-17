import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavbarStyled = styled.nav`
background-color: ${({theme}) => theme.colors.main};
height: 5em;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
font-family: 'Source Sans Pro', sans-serif;
font-weight: bold;
@media screen and (max-width:${({theme}) => theme.mobile}) {
  position: relative;
}
`
export const ContentContainer = styled.div`
display: flex;
@media screen and (min-width:${({theme}) => theme.mobile}) {
  width: 1366px;
  display: flex;
}
`
export const NavbarLogo = styled(Link)`
color: black;
// justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 2em;

@media screen and (max-width:${({theme}) => theme.mobile}) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
    font-size: 1.5em;
}
`
export const MenuIcon = styled.div`
display: none;
@media screen and (max-width:${({theme}) => theme.mobile}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
export const NavMenu = styled.ul`
display: flex;
// grid-template-columns: repeat(5, auto);
gap: 0.625em;
list-style: none;
text-align: center;
width: 70vw;
justify-content: end;
margin-right: 2rem;

@media screen and (max-width:${({theme}) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    width: 45vh;
    height: 90vh;
    position: absolute;
    top: 80px;
    opacity: 1;
    transition: all 0.5s ease;
    left: ${({active}) => active ? 0 : '-100%' };
    background: ${({active}) => active && '#f3f3f3'};
    z-index: ${({active}) => active && 1};
}
`
// was className nav-item in original code
export const NavItem = styled.li`
display: flex;
align-items: center;
height: 80px;
&:hover {
  // have to have color to apply filter to it
  background-color: ${({theme}) => theme.colors.main};
  filter: brightness(1.1);
}
`

// was className nav-links in original code
export const NavLink = styled.div`
color: black;
a {
    color: inherit;
    text-decoration: none;
}
  
  padding: 0.5rem 1rem;
  &:hover {
    filter: brightness(1.1);
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
  @media screen and (max-width:${({theme}) => theme.mobile}) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover{
        filter: brightness(1.1);
        border-radius: 0;
    }
  }
`

