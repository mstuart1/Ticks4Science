import React, { useState } from "react";
import { Routes, Route } from "react-router";
import AddEditTick from "./AddEditTick";
import AllSubs from "./AllSubs";
import Login from "../login/Login";
import ProcessTick from "./ProcessTick";
import UpdateAccount from "./UpdateAccount";

const AdminMgt = () => {

    const [token, setToken] = useState(null)
    const [user, setUser] = useState({})

    const handleLogin = async (newToken) => {
        setToken(newToken)

        // let response = await SubmissionDataService.getAllSubm();

        // console.log(response.data.record)
        // setUser(response.data.record)
    }


    return (
        !token ? (
            <Login handleLogin={handleLogin} />
        ) :
            <Routes>

                <Route path='/addEditTick' element={<AddEditTick />} />
                <Route path='/addEditTick/:id' element={<AddEditTick />} />
                <Route path='/processTick/:id' element={<ProcessTick />} />
                <Route path='/allSubs' element={<AllSubs token={token}/>} />
                <Route path='/account/:id' element={<UpdateAccount/>} />
                <Route path='/account/:id' element={<UpdateAccount/>} />
                <Route path='/logout' element={<Login handleLogin={handleLogin} />}/>
            </Routes>
    )
}

export default AdminMgt
