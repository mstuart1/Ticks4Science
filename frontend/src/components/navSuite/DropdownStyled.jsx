import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const DropdownLink = styled(Link)`
display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: black;
  padding: 1em;
  &:hover {
    color: blue;
  }
`

export const DropdownMenu = styled.ul`
width: 250px;
position: absolute;
top: 85px;
list-style: none;
text-align: start;
// &:hover {
//   background: white;
// }
@media screen and (max-width:${({theme}) => theme.mobile}) {
  position: fixed;
  top: 1em;
}
`

export const DropdownMenuItem = styled.li`
background: white;
cursor: pointer;
border: 0.25px solid ${({theme}) => theme.colors.main};
`
