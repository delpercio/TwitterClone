import React from "react";
import api from "../utils/api";

export const Users = () => {
  const usersList = async () => {
    const users = await api.getUsers();
    console.log(users);
  };

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

