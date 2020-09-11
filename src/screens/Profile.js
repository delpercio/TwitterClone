import React from "react";
import { MenuContainer } from "../components";
import { NewMessage } from "../components/newmessage"
import { PutPic } from "../components/PutPicure"
import DeleteUser from "../components/Deletebutton/deleteUser"

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>
    <PutPic />
    < NewMessage />
    <DeleteUser />
  </>
);
