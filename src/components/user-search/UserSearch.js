import React, { useState } from "react";
import api from "../../utils/api";

const UserSearch = () => {
  const photoUrl = "https://kwitter-api.herokuapp.com";
  const [message, setMessage] = useState("");
  const [userSearchResult, setUserSearchResult] = useState([]);
  const [shouldRender, setShouldRender]=useState(false)

  //User Search logic
  const usersSearch = async () => {
    const search = await api.searchUsers(message);
    const searchResult = search.user;
    setUserSearchResult(searchResult);
    setShouldRender(true)
    setMessage('')
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
          
  };

  return (
    <div>
    <br/>
      <input
        type="text"
        placeholder="Enter Username"
        value={message}
        onChange={handleChange}
      />
      <button onClick={usersSearch}>Search Users</button>

      {/* displaying the search results */}

        {shouldRender?<div>
        <br />
        <img
          src={userSearchResult.pictureLocation? photoUrl + userSearchResult.pictureLocation:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/01/17/twitter-egg.jpg'}
          height="300px"
          width="300px"
          alt=""
        />
        <br />
        <h2>{userSearchResult.username}</h2>
        <br />
        <h2>{userSearchResult.createdAt}</h2>
        <hr />
      </div>  : ''}
             
    </div>
  );
};

export default UserSearch;
