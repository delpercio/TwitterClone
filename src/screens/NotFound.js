import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"




const NotFound = ({ location }) => (
  <>
    <h2>404 Page</h2>
    <p>Page not found for {location.pathname}</p>
    <Link to="/">Go Home</Link>
    
  </>
  
);

export const NotFoundScreen = NotFound;
