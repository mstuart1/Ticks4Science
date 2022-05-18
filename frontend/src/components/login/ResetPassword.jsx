import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BasicPage} from '../GeneralStyles'
import UserDataService from '../../services/users'

const ResetPassword = () => {

  let {token} = useParams()
  
  const [user, setUser] = useState(null)
  
  const getData = useCallback( async () => {
    await UserDataService.getByToken(token)
  }, [token]);
  

  useEffect(() => {
    let data = getData()
    setUser(data)
  }, [getData])



  return (
    <BasicPage.Text>ResetPassword</BasicPage.Text>
  )
}

export default ResetPassword