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
            const result = await API.getCurrentPic(currentUsername)
            if (result.response === undefined){
                setUsersPic(`https://kwitter-api.herokuapp.com/users/${currentUsername}/picture`)
            }else {
                setUsersPic(defaultPic)
            }
        }
        currentPic()
    })
    const defaultPic = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/01/17/twitter-egg.jpg"
    
    const getPic = async () => {
        let pic = await API.getCurrentPic(currentUsername)
            setUsersPic(pic)
    }

    return (
        <div className="putPic">
            <h2>{currentUsername}'s current picture</h2>
            <img width="300px" src={usersPic ? usersPic : defaultPic} alt="user's profile" />
            <form ref={form} value="picture" onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(form.current)
                let result = await API.setPic(currentUsername, formData)
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
            <div id="currentPic">
                <h2>{resultMessage}</h2>
            </div>
        </div>
    )
}

