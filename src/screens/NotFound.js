import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import {MenuContainer} from '../components/menu'
import './NotFound.css'

const NotFound = ({ location }) => (
  <>
  <MenuContainer/>
  <div className="notFound">
    <p>404..</p>
    <p>:(</p>
    <p>{location.pathname} does not exist....</p>
    <Link to="/">Go Home</Link>
  </div>
    
    
  </>
  
);

export const NotFoundScreen = NotFound;
