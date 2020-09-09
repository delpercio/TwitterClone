import React from 'react'
import API from "../../utils/api"
import GoogleLogin from "react-google-login"



export function GoogleLoginComponent() {
    const successfulLogin = (response) => {
        console.log("successful")
        console.log({response})
    }

    const failedLogin = (response) => {
        console.log("failed")
        console.log({response})
    }

    const responseGoogle = (response) => {
        console.log({response})
    }
    return (
        <>

        <GoogleLogin
        clientId="24161483118-bet5ubp3fb8cj7a0s3an404732n0ooke.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={successfulLogin}
        onFailure={failedLogin}
        cookiePolicy={'single_host_origin'}
        />
        </>
    )
}
