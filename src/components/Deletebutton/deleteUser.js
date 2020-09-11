import React, { useState, useRef } from "react";
import API from "../../utils/api";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/actions/auth";
import { actions } from "../../redux/actions/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./deleteUser.css";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";



const DeleteUser = (props) => {
    const handleDelete = async () => {
    let txt = "";
    if (window.confirm("Are You Sure You Want To Delete?") === true) {
      txt = "Delete Confirmed!";
      console.log(props)
     window.confirm("Make Sure To Click Logout After You Delete Profile")
      await API.deleteUser(props.auth.username);
     
     console.log(props.auth.username);
   
    
   
    } else {
      txt = "Delete Cancelled";
    }
  };

//   console.log(props.auth.username);
  return (
    <div>
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(DeleteUser);
