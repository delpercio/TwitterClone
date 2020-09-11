import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import api from "../utils/api";
import { MenuContainer, Loader } from "../components";
import UserSearch from "../components/user-search/UserSearch";
import './UsersListPage.css'

export const Users = () => {
  const photoUrl = "https://kwitter-api.herokuapp.com";
  const [usernames, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    usersList();
  }, []);

  // Render the users list to the page, there should be 500
  const usersList = async () => {
    const users = await api.getUsers();
    setLoading(false)
    const usersArr = users.users;
    setUsers(usersArr);
  };

  return (
    <>
      <MenuContainer />
      <UserSearch />
      {loading && <Loader/>}

      {/* Render the users list */}
      {usernames.map((profile) => (
        <span key={profile.username}>
          <Card style={{ width: "20%" , display:"inline-flex"}} key={profile.username}>
            <Card.Img
              src={
                profile.pictureLocation
                  ? photoUrl + profile.pictureLocation
                  : "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/01/17/twitter-egg.jpg"
              }
              height="250px"
              width="250px"
              alt="NoProfilePicture"
            />
            <Card.Body>
              <p>User: {profile.username} </p>
              <p>Joined on: {profile.createdAt}</p>
            </Card.Body>
          </Card>
        </span>
      ))}
    </>
  );
};
