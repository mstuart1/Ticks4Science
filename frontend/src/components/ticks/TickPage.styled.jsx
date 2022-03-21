import styled from "styled-components";

export const TickName = styled.span`
font-style: italic;
`
export const ShowMeButton = styled.div`
background-color: ${({bgColor}) => bgColor || '#eead29'};
color: ${({color}) => color || 'black'};
width: 100%;
text-align: center;
padding: 1em;

&:hover {
  filter: brightness(1.1);
}

@media screen and (min-width: 450px){
  width: 300px;  
}
`
export const MainTickDiv = styled.div`
flex: 0 1 800px;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 1em;
`
