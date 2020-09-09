import React from "react";
import { Link } from "react-router-dom";
import {MenuContainer} from '../components/menu'

const NotFound = ({ location }) => (
  <>
  <MenuContainer/>
    <h2>404 Page</h2>
    <p>Page not found for {location.pathname}</p>
    <Link to="/">Go Home</Link>
    
  </>
  
);

export const NotFoundScreen = NotFound;
