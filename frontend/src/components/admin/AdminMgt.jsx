import React
// , { useState }
 from "react";
import { Routes, Route } from "react-router";
import AddEditTick from "./AddEditTick";
import AllSubs from "./AllSubs";
import Login from "../login/Login";
import ProcessTick from "./ProcessTick";
import UpdateAccount from "./UpdateAccount";
import Dashboard from './Dashboard';
import {
    // useDispatch, 
    useSelector} from 'react-redux'
// import UserDataService from '../../services/users'

const AdminMgt = () => {
    
    const token = useSelector(state => state.token)
    
    return (
        token.length < 0 ? (
            <Login/>
        ) :
            <Routes>
                <Route path='/addEditTick' element={<AddEditTick />} />
                <Route path='/addEditTick/:id' element={<AddEditTick />} />
                <Route path='/processTick/:id' element={<ProcessTick />} />
                <Route path='/allSubs' element={<AllSubs token={token} />} />
                <Route path='/account/:id' element={<UpdateAccount/>} />
                <Route path='/' element={<Dashboard/>}/>
            </Routes>
    )
}

export default AdminMgt
