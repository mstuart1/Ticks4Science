import styled from "styled-components";

export const TickName = styled.span`
font-style: italic;
`
export const ShowMeButton = styled.div`
background-color: ${({bgColor}) => bgColor || 'white'};
border: 1px solid ${({color}) => color || '#eead29'};
color: ${({color}) => color || '#eead29'};
width: 100%;
text-align: center;
position: ${({position}) => position || 'initial'}

&:hover {
  filter: brightness(1.2);
}

@media screen and (min-width: 450px){
  background-color: ${({color}) => color || '#eead29'};
  color: black;
  width: 300px;
  padding: 1em;
}
`
