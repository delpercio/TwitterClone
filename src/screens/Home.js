import React from "react";
import { LoginFormContainer, MenuContainer, GoogleLoginComponent } from "../components";
import { Link } from "react-router-dom";
import "./Home.css"


export const HomeScreen = () => (
  <div className="homeScreen">
    <MenuContainer />
    <div className="loginInfo">

    <LoginFormContainer />
    <GoogleLoginComponent />
    <br/>
    <Link style={{fontSize:"30px"}} to="/register">New user? Register here</Link>
    </div>
  </div>
);
