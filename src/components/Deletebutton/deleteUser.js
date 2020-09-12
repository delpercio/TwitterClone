import React, { useState } from "react";
import API from "../../utils/api";
import { connect } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./deleteUser.css";
import { Button } from "react-bootstrap";

const DeleteUser = (props) => {
  const [deleteMessage, setDeleteMessage] = useState(null);
  const handleDelete = async () => {
    if (window.confirm("Are You Sure You Want To Delete?") === true) {
      await API.deleteUser(props.auth.username);
      setDeleteMessage("User Has Been Deleted Logging Out!");
      props.logout();
    }
  };

  return (
    <div>
      <Button onClick={handleDelete}>Delete User</Button>
      <h2>{deleteMessage}</h2>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return { logout: () => dispatch(actions.logout()) };
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);
