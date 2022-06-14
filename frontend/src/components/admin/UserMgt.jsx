import React, { useEffect, useState } from 'react'
import UserDataService from '../../services/users'
import OutlineCard from '../ui/outlineCard/OutlineCard'

const UserMgt = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        let getData = async () => {
            return await UserDataService.getAllUsers();
        }
        getData().then(response => {
          setData(response.data.users)
        })
    }, [])

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