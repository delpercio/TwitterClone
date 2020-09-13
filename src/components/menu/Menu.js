import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import Nav from "react-bootstrap/Nav";
import "./Menu.css";
import { Navbar } from "react-bootstrap";

export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  return (
    <Navbar id="menu">
      <Navbar.Brand href="/">
        <span className="kwitterLogo">Kwitter</span>
      </Navbar.Brand>

      <div id="menu-links">
        {isAuthenticated ? (
          <>
            <Link to="/">Profile</Link>

            <Link to="/users">Users</Link>
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
        ) : null}
      </div>
    </Navbar>
  );
};
