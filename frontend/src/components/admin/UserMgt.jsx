import React, { useEffect, useState } from 'react'
import UserDataService from '../../services/users'
import OutlineCard from '../ui/outlineCard/OutlineCard'
import {useDispatch, useSelector} from 'react-redux'
import { loadTokenSuccess } from './actions'
import styled from 'styled-components'
import OutlineFloatButton from '../ui/outlineFloatButton/OutlineFloatButton'
import {theme} from '../../theme'
import RenderIf from '../../tools/RenderIf'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()
    
    const [data, setData] = useState([])
    const token = useSelector(state => state.token.data)
    // const user = useSelector(state => state.user)

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
    
       let  {checked, name} = evt.target
       
       setData(prevState => prevState.map(item => {
        if (item.id === id){
          item[name] = checked
          return item
        } else {
          return item
        }
       }))}
       const handleSave = async (id) => {
        let updatedUser = data.filter(user => user.id === id)[0]
        
        let response = await UserDataService.updateUser(updatedUser, token) 
        
        if(response.status !== 200){
         alert(`Error ${response.status}: there was an error updating the user`)
        }
       }
       const handleRemove = async(id) => {
        try{
          let data = {id: id, deletedAt: new Date()}
          await UserDataService.updateUser(data, token)
          navigate('/admin')
        } catch({message}){
          console.log(message)
        }
       }

    const handleInvite = async email => {
        await UserDataService.inviteUser({email: email})
        navigate('/admin')
    }
    
  return (
    <OutlineCard>
      <ul>
        <li>Email Alerts will be sent daily around 5am to all of the members checked.</li>
        <li>Manage Users means checked users will be able to invite others and edit this table.</li>
        <li>Edit Data means checked users will be able to see the buttons that allow editing of general data, deleted submissions, and duplicates.</li>
        <li>You may need to refresh the screen a couple of times before the new user appears in the able or the old user has been removed.</li>
        {/* <li> You cannot edit your own user permissions.</li> */}
        </ul>
        <h2>User Management</h2>
        <Styles.TableContainer>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Accepted Invite</th>
                    <th>Email Alerts</th>
                    <th>Manage Users</th>
                    <th>Edit Data</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {data.map((item, i) => {
              // if (item.id === user.id){
              //   return
              // } else {
                return (
            
                  <tr key={`${i}-${item.id}`}>
                      <td>{item.firstName} {item.lastName}</td>
                      <td>{item.email}</td>
                      <td>
                          {item.password?.length > 0 ? "Yes" : "No"}
                          <RenderIf isTrue={!item.password}>
                          <button style={{margin: '1rem', padding: '1rem', borderRadius: '0.5rem'}} onClick={() => handleInvite(item.email)}>Resend Invite</button>
                          </RenderIf>
                      </td>
                      <td>
                      <input id={item.id} type='checkbox' name='emailAlerts' checked={item.emailAlerts || false} onChange={(evt) => handleChange(item.id, evt)} />
                      </td>            
                      <td>
                      <input id={item.id} type='checkbox' name='manageUsers' checked={item.manageUsers || false} onChange={(evt) => handleChange(item.id, evt)} />
                      </td>            
                      <td>
                      <input id={item.id} type='checkbox' name='editData' checked={item.editData || false} onChange={(evt) => handleChange(item.id, evt)} />
                      </td> 
                      <td>
                        <OutlineFloatButton handleClick={() => handleSave(item.id)} text='Save' padding='1rem' colors={{text: theme.colors.ruTeal, bg: theme.colors.ruTeal}}/>
                        </td>          
                      <td>
                        <OutlineFloatButton handleClick={() => handleRemove(item.id)} text='Remove User' padding='1rem' colors={{text: theme.colors.ruRed, bg: theme.colors.ruRed}}/>
                        </td>          
                      </tr>
                 )
              // }

             })}
            </tbody>
        </table>
        </Styles.TableContainer>

      
    </OutlineCard>
  )
}

export default UserMgt