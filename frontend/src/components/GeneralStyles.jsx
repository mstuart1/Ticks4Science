import styled from 'styled-components';

export const ScreenContainer = styled.div`
  background-color: white;
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  justify-content: center;
`;
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1366px) {
    width: 1366px;
  }
`;
export const TextDiv = styled.div`
  // width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.25em;
`;
export const BoxInset = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  align-items: center;
  border-radius: 0.5em;
`;
export const StyledButton = styled.button`
border-radius: 50px;
border: none;
box-shadow: 0 0 10px ${({color}) => color + '50'};
cursor: pointer;
font-size: 16px;
font-weight: 700;
padding: 15px 60px;
background-color: ${(props) => props.bgColor || props.theme.colors.main};
color: ${({color}) => color || 'white'};
&:hover {
    opacity: 0.9;
    transform: scale(0.98);
}
margin: 0.6rem 0.6rem 0.6rem 0;
padding: 0.5rem 0.75rem;    
`
