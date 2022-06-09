import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BasicPage} from '../GeneralStyles'
import UserDataService from '../../services/users'

const ResetPassword = ({reset = false, create = false}) => {

  let {token} = useParams()
  
  const [user, setUser] = useState({})
  const [input, setInput] = useState({})
  
  const getData = useCallback( async () => {
    await UserDataService.getByToken(token)
  }, [token]);
  

  useEffect(() => {
    let data = getData()
    setUser(data)
  }, [getData])

console.log('user', user)

  return (
    <BasicPage.Text>
      {Object.keys(user).length === 0 && <p>Please contact Dr. Fonseca to obtain a valid key</p>}
      {Object.keys(user).length > 0 && reset && (<div>This section will reset the password</div>)}

      {Object.keys(user).length > 0 && create && (
      <div>
        <h1>Welcome to the administration side of Ticks 4 Science!</h1>
        <p>Please create a strong password to access the site and help us keep it secure.</p>
        <input type='password' name='password1' value={input.password1 || ''}/>
      </div>
      )}

    </BasicPage.Text>
  )
}

export default ResetPassword