import React, { useState, useEffect } from "react";
import api from "../utils/api";

export const Users = () => {
  const [usernames, setUsers] = useState([]);
  useEffect(() => {
    usersList();
  }, []);

  const usersList = async () => {
    const users = await api.getUsers();
    console.log(users.users);
    const usernamesArray = users.users.map((userInfo) => userInfo.username);
    console.log(usernamesArray);
    setUsers(usernamesArray);
  };

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {usernames.map((profileName) => (
          <>
            <li>{profileName}</li>
          </>
        ))}
      </ul>
    </div>
  );
};
