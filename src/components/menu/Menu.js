import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import Nav from "react-bootstrap/Nav"
import "./Menu.css";
import { Navbar } from "react-bootstrap";

export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  return (
    <Navbar id="menu" >
      <Navbar.Brand href="/"><span className="kwitterLogo">Kwitter</span></Navbar.Brand>
      
      <div id="menu-links">
        {isAuthenticated ? (
          <>
          <Nav.Item as="span">
            <Nav.Link href="/">Profile</Nav.Link>
          </Nav.Item>
          
          <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/messagefeed">Message Feed</Nav.Link>
            <Nav.Link to="/" onClick={logout}>
              Logout
            </Nav.Link>
          </>
        ) : null}
      </div>
    </Navbar>
  );
};
