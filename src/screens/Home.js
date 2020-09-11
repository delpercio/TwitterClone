import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import styled from "styled-components";

const CustomImage = styled.img`
  width: 400px;
`;

const CustomDiv = styled.div`
  width: 500px;
  margin-left: 550px;
  margin-top: -150px;
  display: flex;
  justify-content: center;
`;

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <Jumbotron>
      <div>
        <h1>Your Favorite Microblogging Platform</h1>
        <LoginFormContainer />
        <Link to="/register">New user? Register here</Link>
      </div>

      <CustomDiv>
        <CustomImage src={require("./assets/home-page.jpg")} />
        <CustomImage src={require("./assets/hash.jpg")} />
      </CustomDiv>
    </Jumbotron>
  </>
);
