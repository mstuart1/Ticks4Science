import React, { useEffect, useState } from 'react'
import UserDataService from '../../services/users'
import OutlineCard from '../ui/outlineCard/OutlineCard'
import {useSelector} from 'react-redux'

const UserMgt = () => {
    const [data, setData] = useState([])
    const token = useSelector(state => state.token)

    useEffect(() => {
        let getData = async (token) => {
            return await UserDataService.getAllUsers(token);
        }
        getData(token).then(response => {
          setData(response.data.users)
        })
    }, [token])

   const handleChange = async (id, evt) => {
    
       let  {checked} = evt.target
    
        let updatedUser = data.filter(user => user.id === id)[0]
        updatedUser.emailAlerts = checked
        let response = await UserDataService.updateUser(updatedUser) 
        if(response.data.message === 'ok'){
            let updatedData = data.map(user => {
                if (user.id === updatedUser.id) {
                    return updatedUser
                }
                return user
            })
            setData(updatedData) 
        }
        
             

    }

    // console.log(data)
  return (
    <OutlineCard>
        <h2>Users who should receive email alerts</h2>
       {data.map((user, i) => (
        <div key={`${i}-${user.id}`}>
            <label htmlFor={user.id}>{user.email} <input id={user.id} type='checkbox' checked={user.emailAlerts} onChange={(evt) => handleChange(user.id, evt)} /></label></div>
       ))}
    </OutlineCard>
  )
}

export default UserMgt