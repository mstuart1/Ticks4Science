import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BasicPage } from '../GeneralStyles'
import UserDataService from '../../services/users'

const UpdateAccount = () => {

    let {id, token} = useParams()
    let navigate = useNavigate()

    console.log(token)

    const [data, setData] = useState()
    const [okToGo, setOkToGo] = useState(true)

    useEffect (() => {

        let getData = async (id) => {
            return await UserDataService.getUser(id);
        }
        let getByToken = async (token) => {
            return await UserDataService.getByToken(token);
        }
        
        if (id) {

            getData(id).then(response => {
                // co  nsole.log(response.data.data)
                setData(response.data.data)
                 
              })
        } else if (token){
            getByToken(token).then(response => {
                // console.log(response.data.data)
                setData(response.data.data)
                
            })
        }
        
       
    }, [id, token]);

    const handleInputChange = (evt) => {
        let info = evt.target;
        let value = info.type === "checkbox" ? info.checked : info.value;
        setData({ ...data, [info.name]: value });
        setOkToGo(true)
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        if (token && !data.password) {
            alert('you must set a password')
            setOkToGo(false)
        }
        if (data.password && data.password !== data.password2){
            alert('passwords do not match')
            setOkToGo(false)
        }
        console.log(okToGo)
        let response = okToGo && await UserDataService.updateUser(data)
        console.log(response)
        response.status === 200 &&  navigate('/admin/allSubs')


    }

    console.log(data)

  return (
    <BasicPage.Text>
       {data ? (
            <BasicPage.Form >
            <form onSubmit={handleSubmit} style={{alignItems: 'flex-end', display: 'flex', flexDirection: 'column'}}>
            <label>
                First Name
            <input type='text' name='firstName' placeholder='First Name' value={data.firstName} onChange={handleInputChange}/>
            </label>
            <label>
                Last Name
            <input type='text' name='lastName' placeholder='Last Name' value={data.lastName} onChange={handleInputChange}/>
            </label>
            <label>
                Email
            <input type='email' name='email' placeholder='Email' value={data.email} onChange={handleInputChange}/>
            </label>
            <label>
                New Password
            <input type='password' name='password' placeholder='New Password' value={data.password} onChange={handleInputChange}/>
            </label>
            <label>
                Confirm New Password
            <input type='password' name='password2' placeholder='Confirm Password' value={data.password2} onChange={handleInputChange}/>
            </label>
            <button type='submit'>Submit</button>
            </form>
        </BasicPage.Form>
       ) : (
           <p>Loading...</p>
       )}
    </BasicPage.Text>
  )
}

export default UpdateAccount