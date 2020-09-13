import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import api from "../../utils/api";
import "./UserSearch.css";

const UserSearch = () => {
  const photoUrl = "https://kwitter-api.herokuapp.com";
  const [message, setMessage] = useState("");
  const [userSearchResult, setUserSearchResult] = useState([]);
  const [shouldRender, setShouldRender] = useState(false);

  //User Search logic
  const usersSearch = async () => {
    const search = await api.searchUsers(message);
    const searchResult = search.user;
    setUserSearchResult(searchResult);
    setShouldRender(true);
    setMessage("");
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="main">
      <div className="searchbar">
        <Form
          className="inputBox"
          style={{ textAlign: "center" }}
          onSubmit={(e) => {
            e.preventDefault();
            usersSearch();
          }}
        >
          <input
            size="50"
            type="text"
            placeholder="Enter Username, Case Sensitive"
            value={message}
            onChange={handleChange}
          />
        </Form>
        <Button onClick={usersSearch}>Search Users</Button>
      </div>

      {/* displaying the search results */}

      {shouldRender && userSearchResult ? (
        <Card style={{ width: "18rem", display: "inline-flex" }}>
          <br />
          <Card.Img
            src={
              userSearchResult.pictureLocation
                ? photoUrl + userSearchResult.pictureLocation
                : "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/01/17/twitter-egg.jpg"
            }
            height="300px"
            width="300px"
            alt=""
          />
          <Card.Body>
            <h2>Username: {userSearchResult.username}</h2>

            <h2>Joined On:{userSearchResult.createdAt}</h2>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserSearch;
