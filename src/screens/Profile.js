import React from "react";
import { MenuContainer } from "../components";
import { NewMessage } from "../components/newmessage"
import { PutPic } from "../components/PutPicure"
export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>
    <PutPic />
    < NewMessage />
  </>
);
