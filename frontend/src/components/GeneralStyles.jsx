import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const BasicPage = {
  
  ScreenContainer: styled.div`
  background-color: white;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  `,
  PageContainer: styled.div`
  display: flex;
  justify-content: center;
  
  @media screen and (min-width:${({theme}) => theme.mobile}) {
    max-width: 1366px;
  }
`,
Text: styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.25em;
min-height: 80vh;
p {
  padding: 1rem;
}

li {
  padding: 1em 0;
}
@media screen and (min-width: 810px) {
  width: 800px;
  text-align: left;
  
}
`,
Title: styled.h2`
font-size: 2.5rem;
font-weight: 700;
text-align: center;
margin: 1rem;
`,
BoxInset: styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
padding: 0.5em;
align-items: center;
border-radius: 0.5em;
margin: 0.5em;
`,

StyledButton: styled.button`
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
`,
CenteredList: styled.ul`
list-style: none;
text-align: center;
border-bottom: 1px solid black;
& > li {
  padding: 0.5em 0;
}
`,
InnieLink: styled(Link)`
text-decoration: none;
color: #00626d;
  span {
    border-bottom: 1px solid ${({theme}) => theme.colors.main}
    //TODO get this hover to work
    // &:hover {
    //   border-bottom: 0px;
    // }
  }
  `,

OutieLink: styled.a`
margin: 1rem 0;
text-decoration: none;
color: #00626d;
  span {
    border-bottom: 1px solid ${({theme}) => theme.colors.main}
    //TODO get this hover to work
    // &:hover {
    //   border-bottom: 0px;
    // }
  }`,
  SectionTitle: styled.h3`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem;
  `,
  SectionSubtitle: styled.span`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem;
  `,
  CenteredText: styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
  `,

  CardContainer: styled.div`
  margin: 0;
  padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    `,
    Card: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    box-shadow: 0 3px 15px rgba(0,0,0,0.2);
    margin: 1rem;
    `,
    Indent: styled.p`
    margin-left: 3em;
    `,
}