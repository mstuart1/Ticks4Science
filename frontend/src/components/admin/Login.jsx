import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme";

const initialState = {
  email: "",
  password: "",
};

const Login = ({ logout, removeToken, handleLogin }) => {

  const navigate = useNavigate()
  logout && removeToken();

  const [inputValue, setInputValue] = useState(initialState);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgot, setForgot] = useState(false);

  const processInput = (evt) => {
    const { name, value } = evt.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const processForgot = (evt) => {
    const { value } = evt.target;
    setForgotEmail(value);
  };

  const toggleForgot = () => setForgot(!forgot);

  const submitLogin = (evt) => {
    evt.preventDefault();
    handleLogin(inputValue)
    setInputValue(initialState);
    navigate('/admin')
    } 
  

  const submitForgot = (evt) => {
    evt.preventDefault();
  };

  return (
    <Styles.LoginBackground backgroundColor={theme.colors.main}>
      <Styles.LoginForm onSubmit={submitLogin}>
        <Styles.LoginInput
          type="text"
          name="email"
          value={inputValue.email}
          onChange={processInput}
          placeholder="Email"
        />

        <Styles.LoginInput
          type="password"
          name="password"
          value={inputValue.password}
          onChange={processInput}
          placeholder="Password"
        />
        <Styles.LoginButton>Login</Styles.LoginButton>
        <Styles.ForgotText onClick={toggleForgot}>
          Forgot password?
        </Styles.ForgotText>
      </Styles.LoginForm>

      {forgot && (
        <Styles.LoginForm onSubmit={submitForgot}>
          <Styles.LoginInput
            type="text"
            name="email"
            value={forgotEmail}
            onChange={processForgot}
            placeholder="Email"
          />
          <Styles.LoginButton>Send reset email</Styles.LoginButton>
        </Styles.LoginForm>
      )}
    </Styles.LoginBackground>
  );
};

export default Login;

const Styles = {
LoginBackground: styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column; // want forgot form to show up beneath login form
justify-content: center;
align-items: center;
background-color: ${({backgroundColor}) => backgroundColor}
`,
LoginForm: styled.form`
background-color: #f8f8f8;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;
text-align: left;
margin: 5px;
`,
LoginInput: styled.input`
font-size: 1rem;
margin: 0.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 3.1px;
    box-shadow: ${({theme}) => theme.boxShadow};
    width: 300px;
    outline: none;
`,
LoginButton: styled.button`
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
`,
ForgotText: styled.h4`
margin: 1rem 0;
text-decoration: none;
color: ${({theme}) => theme.colors.main};
`,
}