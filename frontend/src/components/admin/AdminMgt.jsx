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
import { useSelector } from 'react-redux'
import DownloadTable from './DownloadTable'
import EditingTable from "./EditingTable";

// import UserDataService from '../../services/users'

const AdminMgt = () => {

    const token = useSelector(state => state.token.data)
    
    return (
        (token.length === 0 || token === 'expired' ) ? (
            <Login />
        ) :
            <Routes>
                <Route path='/addEditTick' element={<AddEditTick />} />
                <Route path='/addEditTick/:id' element={<AddEditTick />} />
                <Route path='/processTick/:id' element={<ProcessTick />} />
                <Route path='/allSubs' element={<AllSubs token={token} />} />
                <Route path='/account/:id' element={<UpdateAccount />} />
                <Route path='/' element={<Dashboard />} />
                <Route path="/login" element={<Login logout={true} />} />
                <Route path="/data" element={<DownloadTable/>} /> 
                <Route path="/editData" element={<EditingTable/>} /> 

                
            </Routes>
    )
}

export default AdminMgt
