import React, { useEffect, useState } from 'react'
import UserDataService from '../../services/users'
import OutlineCard from '../ui/outlineCard/OutlineCard'
import {useDispatch, useSelector} from 'react-redux'
import { loadTokenSuccess } from './actions'
import styled from 'styled-components'

const Styles = {
    TableContainer: styled.div`

   table {
     font-family: sans-serif;
     border-collapse: collapse;
     width: 100%;
   }
 
   table td,
   table th {
     border: 1px solid #ddd;
     padding: 1rem;
   }
 
   table tr:nth-child(even) {
     background-color: #f5f3f2;
   }
 
   table tr:hover {
     background-color: #e5e2e0;
   }
 
   table th {
     padding-top: 1.5rem;
     padding-bottom: 1.5rem;
     text-align: center;
     background-color: #137b80;
     color: white;
   }
 `
}

const UserMgt = () => {
    const dispatch = useDispatch()
    
    const [data, setData] = useState([])
    const token = useSelector(state => state.token.data)

    useEffect(() => {
        let getData = async (token) => {
            return await UserDataService.getAllUsers(token);
        }
        getData(token).then(response => {
            if (response.data.message === 'token expired'){
                dispatch(loadTokenSuccess('expired'))
            }
          setData(response.data.users)
        })
    }, [token, dispatch])

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

    const handleInvite = async email => {
        await UserDataService.inviteUser({email: email})
        alert('User has been invited')
    }
    
  return (
    <OutlineCard>
        <h2>User Management</h2>
        <Styles.TableContainer>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Accepted Invite</th>
                    <th>Email Alerts</th>
                </tr>
            </thead>
            <tbody>
            {data.map((user, i) => (
        <tr key={`${i}-${user.id}`}>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.email}</td>
            <td>
                {user.password?.length > 0 ? "Yes" : "No"}
                {!user.password && 
                <button style={{margin: '1rem'}} onClick={() => handleInvite(user.email)}>Resend Invite</button>
                }
            </td>
            <td>
            <input id={user.id} type='checkbox' checked={user.emailAlerts} onChange={(evt) => handleChange(user.id, evt)} />
            </td>            
            </tr>
       ))}
            </tbody>
        </table>
        </Styles.TableContainer>

      
    </OutlineCard>
  )
}

export default UserMgt