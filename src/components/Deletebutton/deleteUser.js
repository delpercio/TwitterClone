import React, { useState, useRef } from "react"
import API from "../../utils/api"
import { connect } from "react-redux"



const DeleteUser = (props) => {
// const [DeleteUser] = useState("");

const handleDelete = async() =>{
    let txt ="";
if (window.confirm("Are You Sure You Want To Delete?")=== true){
    txt = "Delete Confirmed!";
    // API.logout()
    API.deleteUser(props.auth.username.logout)
} else {
    txt = "Delete Cancelled";
}
}


console.log (props.auth.username)
return (
    <div> 
        
        
        {/* <button onClick ={async() => {API.deleteUser(props.auth.username)}}
        >Delete User</button> */}
        <button onClick ={handleDelete}>Delete User</button>
       
    </div>
    
)
} 
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps)(DeleteUser)

// window.confirm("You Sure You Want To Delete?")
// let txt ="";
// if (window.confirm("Delete Profile?")=== true){
//     txt = "Delete Confirmed!";
// } else {
//     txt = "Delete Cancelled";
// }