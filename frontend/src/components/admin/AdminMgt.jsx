import React, { useState } from "react";
import { Routes, Route } from "react-router";
import AddEditTick from "./AddEditTick";
import AllSubs from "./AllSubs";
import Login from "./Login";
import ProcessTick from "./ProcessTick";
import UpdateAccount from "./UpdateAccount";

const AdminMgt = () => {

    const [token, setToken] = useState(null)
    // const [user, setUser] = useState({})

    const handleLogin = async () => {
        setToken('token exists')

        // let response = await SubmissionDataService.getAllSubm();

        // console.log(response.data.record)
        // setUser(response.data.record)
    }


    return (
        <Login handleLogin={handleLogin} />
    )
}

export default AdminMgt
