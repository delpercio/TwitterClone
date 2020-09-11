import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuContainer } from '../menu'
import API from "../../utils/api"
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Register.css"



export function Register() {
    const [username, setUsername] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [password, setPassword] = useState("")
    // const [confirmPass, setConfirm] = useState("")
    const [userMessage, setMessage] = useState(null)

    const handleCreateUser = async () => {
        // if (password !== confirmPass)
        let message = await API.createUser({ username, displayName, password })
        console.log(message)
        setMessage(message)
    }


    // TODO take out the br tags and use flexbox to style everything
    // Also if there's enough time, add a way to confirm passwords and not show password by default
    return (
        <>
            <MenuContainer />
            <div className="registerForm">
                <Form onSubmit={(e) => e.preventDefault()} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.File.Label size="lg">
                            Your username:
                    </Form.File.Label>
                        <Form.Control size="lg" placeholder="Username" onChange={(e) => setUsername(e.target.value)} type="text"></Form.Control>

                    </Form.Group>
                    {/* <br /> */}
                    <Form.Group>

                        <Form.File.Label size="lg">
                            Your display name:
                        </Form.File.Label>
                        <Form.Control size="lg" placeholder="Display name" onChange={(e) => setDisplayName(e.target.value)} type="text"></Form.Control>

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.File.Label size="lg">
                            Your password:
                    </Form.File.Label>
                        <Form.Control size="lg" placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} ></Form.Control>
                    </Form.Group>

                    {/* Confirm Password: <input onChange={(e) => setConfirm(e.target.value)} type="text"></input> */}
                    <div className="buttonAndReturn">

                    <Button type="submit" variant="primary" onClick={handleCreateUser}> Start Kweeting! </Button>

                    <Link to="/"> Back To Login form </Link>

                    </div>

                    <h2>{userMessage}</h2>
                </Form>
            </div>
        </>
    )
}
