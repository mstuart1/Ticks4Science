import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  forgotPassReq } from "./actions";
import {
  LoginBackground,
  LoginForm,
  LoginButton,
  LoginInput,
  ForgotText,
} from "./Login.styled";
import { theme } from "../../theme";
import UserDataService from '../../services/users'

const initialState = {
  email: "",
  password: "",
};

const Login = ({ logout, token, setToken }) => {

  const navigate = useNavigate()
  // const dispatch = useDispatch();
  logout && setToken(null)

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

  const submitLogin = async (evt) => {
    evt.preventDefault();
    let response = await UserDataService.loginUser(inputValue);
    console.log(response.data)

    // let token = response.data.payload.token
    // let data = response.data.payload.profile
    setInputValue(initialState);
    if (token.code === 'LOGIN_SUCCESS_FORCE_PW_CHANGE') {
      navigate('/login/reset')
    } else if (token.code === 'LOGIN_SUCCESS'){
      navigate('/admin/allSubs')
    } 
  };

  const submitForgot = (evt) => {
    evt.preventDefault();
    let response 
        // = await LoginDataService.forgot(email);
        if (response.data.code === 'TOKEN_CREATED') {
            alert(`You will be receiving an email soon.`);
        } else {
            alert(`A reset token has been sent to your email.`);
        }
    setForgotEmail("");
  };

  return (
    <LoginBackground backgroundColor={theme.colors.main}>
      <LoginForm onSubmit={submitLogin}>
        <LoginInput
          type="text"
          name="email"
          value={inputValue.email}
          onChange={processInput}
          placeholder="Email"
        />

        <LoginInput
          type="password"
          name="password"
          value={inputValue.password}
          onChange={processInput}
          placeholder="Password"
        />
        <LoginButton>Login</LoginButton>
        <ForgotText onClick={toggleForgot}>
          Forgot password?
        </ForgotText>
      </LoginForm>

      {forgot && (
        <LoginForm onSubmit={submitForgot}>
          <LoginInput
            type="text"
            name="email"
            value={forgotEmail}
            onChange={processForgot}
            placeholder="Email"
          />
          <LoginButton>Send reset email</LoginButton>
        </LoginForm>
      )}
    </LoginBackground>
  );
};

export default Login;
