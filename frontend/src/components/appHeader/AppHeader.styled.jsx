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
width: 100%
display: flex;
justify-content: center;
`
export const MenuButton = styled.div`
background-color: white;
border: 1px solid #eead29;
color: #eead29;
width: 100%;
text-align: center;
`
export const TickContainer = styled.div`
transition: 3s;
display: ${({setDisplay}) => setDisplay ? 'flex' : 'none'};
flex-direction: column;
`