import React from "react";
import { LoginFormContainer, MenuContainer, GoogleLoginComponent } from "../components";
import { Link } from "react-router-dom";


export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    <GoogleLoginComponent/>
    <br/>
    <Link to="/register">New user? Register here</Link>
  </>
);
