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
import DeletedSubs from "./DeletedSubs";
import DuplicateSubs from "./DuplicateSubs";
import TickList from "./TickList";
import PathosList from "./PathosList";
import TickPathosList from "./TickPathosList";
import DeletedMessages from "./DeletedMessages";

const AdminMgt = () => {

    const token = useSelector(state => state.token.data)

    return (
        (token.length === 0 || token === 'expired') ? (
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
                <Route path="/data" element={<DownloadTable />} />
                <Route path="/editData" element={<EditingTable />} />
                <Route path="/deleted" element={<DeletedSubs />} />
                <Route path="/deletedMessages" element={<DeletedMessages />} />
                <Route path="/duplicates" element={<DuplicateSubs />} />
                <Route path='/tickList' element={<TickList />} />
                <Route path='/pathos-list' element={<PathosList />} />
                <Route path='/edit-tick-pathos/:id' element={<TickPathosList />} />
            </Routes>
    )
}

export default AdminMgt
