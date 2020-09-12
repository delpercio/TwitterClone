import React from "react";
import { MenuContainer } from "../components";
import { NewMessage } from "../components/newmessage";
import { PutPic } from "../components/PutPicure";
import DeleteUser from "../components/Deletebutton/deleteUser";
import "./Profile.css";

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <div className="profileContainer">
      <h2>Profile</h2>
      <PutPic />
      <NewMessage />
      <DeleteUser />
    </div>
  </>
);
