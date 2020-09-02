import React, { useState, useRef, useEffect } from 'react'
import API from "../../utils/api"
import { useSelector } from "react-redux"

export function PutPic(props) {
    const currentUsername = useSelector(state => state.auth.username)
    const [resultMessage, setMessage] = useState("")
    const [usersPic, setUsersPic] = useState(`https://kwitter-api.herokuapp.com/users/${currentUsername}/picture`)
    const form = useRef(null)
    useEffect(() => {
        async function currentPic() {
            setUsersPic(`https://kwitter-api.herokuapp.com/users/${currentUsername}/picture`)
        }
        currentPic()
    })

    const getPic = async () => {
       let pic = await API.getCurrentPic(currentUsername)
       setUsersPic(pic)
    }


    return (
        <div>
            <form ref={form} value="picture" onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(form.current)
                let result = await API.setPic(currentUsername, formData)
                console.log(result.statusCode)
                setMessage(() => {
                    if (result.statusCode === 200) {
                        return `Picture updated!`
                    } else {
                        return "Upload failed (Could possibly be that the picture is more than 200kb)"
                    }
                })
            }}>

                <input name="picture" type="file" accept=".gif,.jpeg,.png" />
                <p>(gif, jpeg, or png files only)</p>
                <button onClick={getPic} type="submit" > Submit </button>
            </form>
            <h2>{resultMessage}</h2>
            <img src={usersPic} alt="user's picture" />
        </div>
    )
}

