import styled from 'styled-components'

export const ScreenContainer = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  background-color: #eead29;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProjectTitle = styled.div`
width: 100%;
display: flex;
justify-content: center;

@media screen and (min-width: 450px){
  align-items: center;
  justify-content: normal;

 & > h1 {
   width: 100%;
   padding-left: 2%;
 }
}
`
export const MenuButton = styled.div`
cursor: pointer;
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
}
`
export const TickContainer = styled.div`
display: ${({setDisplay}) => setDisplay ? 'flex' : 'none'};
flex-direction: column;
position: absolute;
`