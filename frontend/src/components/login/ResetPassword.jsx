import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {BasicPage} from '../GeneralStyles'
import UserDataService from '../../services/users'

const ResetPassword = ({reset = false, create = false}) => {

  const navigate = useNavigate();

  let {token} = useParams()
  
  const [user, setUser] = useState({})
  const [input, setInput] = useState({})
  
  const getData = useCallback( async () => {
    let response = await UserDataService.getByToken(token)
    return response.data.user
  }, [token]);
  

  useEffect(() => {
    getData().then(response => {
      setUser(response)
    })
    
  }, [getData])

  const handleInputChange = evt => {
    let {name, value} = evt.target
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
  }));
  }
  
  const handleSave = async() => {
    if (input.password1 !== input.password2) {
      alert('The passwords do not match, please try again')
      setInput({})
    } else {
      user.password = input.password1;
      let response = await UserDataService.updateUser(user)
      // console.log(response)
        response.status === 200 &&  navigate('/admin')
    }
  }

// console.log('user', user)
// console.log(token)

  return (
    <BasicPage.Text>
      {Object.keys(user).length === 0 && <p>Please contact Dr. Fonseca to obtain a valid key</p>}
      {Object.keys(user).length > 0 && reset && (<div>Reset your password</div>)}

      {Object.keys(user).length > 0 && create && (
      <div>
        <h1>Welcome to the administration side of Ticks 4 Science!</h1>
      </div>
      )}
      <div>
      <p>Please create a strong password to access the site and help us keep it secure.</p>
        <input type='password' name='password1' value={input.password1 || ''} onChange={handleInputChange} placeholder='Enter password'/><br/>
        <input type='password' name='password2' value={input.password2 || ''} onChange={handleInputChange} placeholder='Confirm password'/><br/>
        <button onClick={handleSave}>Save Password</button>
      </div>

    </BasicPage.Text>
  )
}

export default ResetPassword