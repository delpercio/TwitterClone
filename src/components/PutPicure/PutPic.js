import React, { useState, useRef, useEffect } from "react";
import API from "../../utils/api";
import { useSelector } from "react-redux";
import "./PutPic.css";
import { Card, Button, Form } from "react-bootstrap";

export function PutPic(props) {
  const currentUsername = useSelector((state) => state.auth.username);
  const [resultMessage, setMessage] = useState("");
  const [usersPic, setUsersPic] = useState(
    `https://kwitter-api.herokuapp.com/users/${currentUsername}/picture`
  );
  const form = useRef(null);
  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
      const result = API.getCurrentPic(currentUsername);
      if (result.response === undefined) {
        setUsersPic(
          `https://kwitter-api.herokuapp.com/users/${currentUsername}/picture`
        );
      } else {
        setUsersPic(defaultPic);
      }  
  });
  const defaultPic =
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/01/17/twitter-egg.jpg";

  const getPic = async () => {
    let pic = await API.getCurrentPic(currentUsername);
    setUsersPic(pic);
  };

  return (
    <Card border="primary" bg="info" className="putPic">
      <Card.Title>{currentUsername}'s current picture</Card.Title>
      <Card.Img
        style={{ width: "400px" }}
        src={usersPic ? usersPic : defaultPic}
        alt="user's profile"
      />
      <Card.Body>
        <Form
          border="variant"
          ref={form}
          value="picture"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(form.current);
            let result = await API.setPic(currentUsername, formData);
            setMessage(() => {
              if (result.statusCode === 200) {
                return `Picture updated!`;
              } else {
                return "Upload failed (Could possibly be that the picture is more than 200kb)";
              }
            });
          }}
        >
          <Form.File
            className="chooseFile"
            name="picture"
            type="file"
            accept=".gif,.jpeg,.png"
          />
          <Form.Text>(gif, jpeg, or png files only)</Form.Text>
          <Button onClick={getPic} type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
      <div id="currentPic">
        <h2 style={{width: "400px"}}>{resultMessage}</h2>
      </div>
    </Card>
  );
}
