import React from "react";
import { Link } from "react-router-dom";
import {MenuContainer} from '../components/menu'

const NotFound = ({ location }) => (
  <>
  <MenuContainer/>
    <p>404...Page not found for {location.pathname}</p>
    <Link to="/">Go Home</Link>
  </>
);

export const NotFoundScreen = NotFound;
