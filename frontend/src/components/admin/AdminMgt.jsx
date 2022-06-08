import React, { useState } from "react";
import { Routes, Route } from "react-router";
import AddEditTick from "./AddEditTick";
import AllSubs from "./AllSubs";
import Login from "./Login";
import ProcessTick from "./ProcessTick";
import UpdateAccount from "./UpdateAccount";
import Dashboard from './Dashboard';
import UserDataService from '../../services/users'

const AdminMgt = () => {

    const [token, setToken] = useState(null)
    // const [user, setUser] = useState({})

    const handleLogin = async (credentials) => {
        
        let response = await UserDataService.loginUser(credentials);
        console.log(response.data)

        let token = response.data
        
        setToken(token)
    }
    const removeToken = () => {
        setToken(null)
    }


    return (
        !token ? (
            <Login handleLogin={handleLogin} removeToken={removeToken} />
        ) :
            <Routes>

                <Route path='/addEditTick' element={<AddEditTick />} />
                <Route path='/addEditTick/:id' element={<AddEditTick />} />
                <Route path='/processTick/:id' element={<ProcessTick />} />
                <Route path='/allSubs' element={<AllSubs />} />
                <Route path='/account/:id' element={<UpdateAccount/>} />
                <Route path='/account/:id' element={<UpdateAccount/>} />
                <Route path='/' element={<Dashboard/>}/>
                

            </Routes>
    )
}

export default AdminMgt
