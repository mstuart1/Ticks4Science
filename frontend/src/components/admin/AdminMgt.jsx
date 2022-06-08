import React, { useState } from "react";
import { Routes, Route } from "react-router";
import AddEditTick from "./AddEditTick";
import AllSubs from "./AllSubs";
import Login from "../login/Login";
import ProcessTick from "./ProcessTick";
import UpdateAccount from "./UpdateAccount";
import Dashboard from './Dashboard';
import UserDataService from '../../services/users'

const AdminMgt = () => {

    const [token, setToken] = useState(null)
    // const [user, setUser] = useState({})

    const handleLogin = async (newToken) => {
        setToken(newToken)

    
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
                <Route path='/allSubs' element={<AllSubs token={token}/>} />
                <Route path='/account/:id' element={<UpdateAccount/>} />
                <Route path='/logout' element={<Login handleLogin={handleLogin} />}/>
                
                <Route path='/' element={<Dashboard/>}/>
                

            </Routes>
    )
}

export default AdminMgt
