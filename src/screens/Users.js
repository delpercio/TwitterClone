import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { MenuContainer } from "../components"

export const Users = () => {
  const photoUrl = "https://kwitter-api.herokuapp.com";
  const [usernames, setUsers] = useState([]);
  const [message, setMessage] = useState("")
  const [userSearchResult, setUserSearchResult]=useState([])
  useEffect(() => {
    usersList();
    
  }, []);

  // Render the users list to the page, there should be 500
  const usersList = async () => {
    const users = await api.getUsers();
    const usersArr = users.users;
    setUsers(usersArr);
    
  };

  //User Search logic
  const usersSearch = async ()=>{
    const search = await api.searchUsers(message);
    const searchResult = search.user
    setUserSearchResult(searchResult)
  }
  const handleChange = event =>{
    setMessage(event.target.value)
  }
  
  return (
    <div>
      <MenuContainer />
      <br/>
      <input
        type="text"
        placeholder="Enter Username"
        value={message}
        onChange={handleChange}
      />
      <button onClick={usersSearch}>Search Users</button>

      {/* displaying the search results */}

      <div>
      <br/>
      <img src={photoUrl+userSearchResult.pictureLocation}  height="300px" width="300px" alt=""/>
      <br/>
      <h2>{userSearchResult.username}</h2>
      <br/>
      <h2>{userSearchResult.createdAt}</h2>
      <hr/>
      </div>


      {/* Render the users list */}
      {usernames.map((profile) => (
        <>
          <div key={profile.username} >
            <img
              key={profile.pictureLocation}
              src={photoUrl + profile.pictureLocation}
              height="300px"
              width="300px"
              alt="NoProfilePicture"
            
            />
            <br />
            <p>User: {profile.username} </p>
            <p>Joined on: {profile.createdAt}</p>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};
