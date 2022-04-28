import React from 'react'
import { BasicPage } from '../GeneralStyles'

// TODO send email - email is entered in to db with link that includes key to create an account  - lets them make their own password.  Have an invite user button and email input field. and allow this user to invite other admins? checkbox

const Login = ({handleLogin}) => {
  return (
    <BasicPage.Text><h1>A login element will go here</h1>
    <button onClick={() => handleLogin()}>Click Here to Login</button>
    </BasicPage.Text>
  )
}

export default Login