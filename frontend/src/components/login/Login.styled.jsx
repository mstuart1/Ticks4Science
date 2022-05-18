import styled from "styled-components";

export const LoginBackground = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column; // want forgot form to show up beneath login form
justify-content: center;
align-items: center;
background-color: ${({backgroundColor}) => backgroundColor}
`

export const LoginForm = styled.form`
background-color: #f8f8f8;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;
text-align: left;
margin: 5px;
`

export const LoginInput = styled.input`
font-size: 1rem;
margin: 0.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 3.1px;
    box-shadow: ${({theme}) => theme.boxShadow};
    width: 300px;
    outline: none;
`
export const LoginButton = styled.button`
font-size: 1rem;
margin: 0.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 3.1px;
    outline: none;
    cursor: pointer;
    width: 150px;
    color: white;
    background-color: ${({theme}) => theme.colors.main};
`

export const ForgotText = styled.h4`
margin: 1rem 0;
text-decoration: none;
color: ${({theme}) => theme.colors.main};
`
