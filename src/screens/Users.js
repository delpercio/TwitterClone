import React, { useState, useEffect } from "react";
import api from "../utils/api";

export const Users = () => {
  const photoUrl = "https://kwitter-api.herokuapp.com";

  const [usernames, setUsers] = useState([]);
  useEffect(() => {
    usersList();
  }, []);

  const usersList = async () => {
    const users = await api.getUsers();
    console.log(users.users);
    const usersArr = users.users;
    setUsers(usersArr);
  };

  return (
    <div>
      <h1>Users</h1>
      <input></input>
      <button>Search User</button>

      {usernames.map((profile) => (
        <>
          <div>
            <img
              src={photoUrl + profile.pictureLocation}
              height="50px"
              width="50px"
              alt=""
            />{" "}
            <br />
            User: {profile.username} <br />
            Joined on: {profile.createdAt}
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};
