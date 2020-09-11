import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { MenuContainer, LoaderComponent } from "../components";
import UserSearch from "../components/user-search/UserSearch";

export const Users = () => {
  const photoUrl = "https://kwitter-api.herokuapp.com";
  const [usernames, setUsers] = useState([]);

  useEffect(() => {
    usersList();
  }, []);

  // Render the users list to the page, there should be 500
  const usersList = async () => {
    const users = await api.getUsers();
    const usersArr = users.users;
    setUsers(usersArr);
  };

  return (
    <div>
      <MenuContainer />
      <UserSearch />
      <br />

      {/* Render the users list */}
      {usernames.map((profile) => (
        <>
          <div key={profile.username}>
            <img
              key={profile.pictureLocation}
              src={profile.pictureLocation ? photoUrl + profile.pictureLocation: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/01/17/twitter-egg.jpg'}
              height="250px"
              width="250px"
              alt="NoProfilePicture"
            />
            <br />
            <p>User: {profile.username} </p>
            <p>Joined on: {profile.createdAt}</p>
            
          </div>
          <hr />
        </>
      ))}
      {usernames.length === 0 && <LoaderComponent/>}

    </div>
  );
};
