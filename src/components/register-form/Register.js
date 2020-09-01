import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuContainer } from '../menu'
import API from "../../utils/api"



export function Register() {
    const [username, setUsername] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [password, setPassword] = useState("")
    // const [confirmPass, setConfirm] = useState("")
    const [userMessage, setMessage] = useState(null)

    const handleCreateUser = async () => {
        // if (password !== confirmPass)
        let message = await API.createUser({ username, displayName, password })
        setMessage(message)
    }


    // TODO take out the br tags and use flexbox to style everything
    // Also if there's enough time, add a way to confirm passwords and not show password by default
    return (
        <>
            <MenuContainer />
            <div className="registerForm">
                <form onSubmit={(e) => e.preventDefault()}>
                    Your username: <input onChange={(e) => setUsername(e.target.value)} type="text"></input>
                    <br />
                    Your display name: <input onChange={(e) => setDisplayName(e.target.value)} type="text"></input>
                    <br />
                    Your password: <input onChange={(e) => setPassword(e.target.value)} type="text"></input>
                    <br />
                    {/* Confirm Password: <input onChange={(e) => setConfirm(e.target.value)} type="text"></input> */}
                    <button onClick={handleCreateUser}> Start Kweeting! </button>
                    <br />
                    <Link to="/"> Back To Login form </Link>
                    <br />
                    <h1>{userMessage}</h1>
                </form>
            </div>
        </>
    )
}
