import React, { useState } from "react";
import API from "../../utils/api";
import { connect } from "react-redux";
import { actions } from "../../redux/actions/auth"
import "bootstrap/dist/css/bootstrap.min.css";
import "./deleteUser.css";




const DeleteUser = (props) => {
   const [deleteMessage, setDeleteMessage] = useState(null)
    let txt = "";
    const handleDelete = async () => {
    if (window.confirm("Are You Sure You Want To Delete?") === true) {
      
      console.log(props)
     
      await API.deleteUser(props.auth.username);
      setDeleteMessage("User Has Been Deleted Logging Out!")
      props.logout()
   } else {
      txt = "Delete Cancelled";
    }
  };


  return (
    <div>
      <button onClick={handleDelete}>Delete User</button>
      <h2>{deleteMessage}</h2>
    </div>
  );
};
function mapDispatchToProps(dispatch){
    return {logout:() => dispatch(actions.logout())}
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps , mapDispatchToProps)(DeleteUser);
