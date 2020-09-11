import React from 'react'
import { actions } from "../../redux/actions/auth"
import { useDispatch } from "react-redux"


export function GoogleLoginComponent() {
    const dispatch = useDispatch()

    const responseGoogle = async (event) => {
        const openerWindow = window.open("https://kwitter-api.herokuapp.com/auth/google/login")
        openerWindow.window.opener.onmessage = function (event) {
            if (event.data.statusCode !== 200) {
                openerWindow.close()
                return 
            }else {
                dispatch(actions.googleLogin(event.data))
                openerWindow.close()
            }
        }
    }
    return (
        <>

            <button onClick={responseGoogle}>
                Sign in with Google
        </button>
        </>
    )
}
