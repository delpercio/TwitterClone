import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, NotFoundScreen } from "../../screens";

import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import { RegisterForm } from "../register-form";

import { MessageFeedContainer } from "../../components";

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />

      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username"
        component={ProfileScreen}
      />
      <ConnectedRoute 
      exact 
      isProtected
      path="/users"
      component ={Users}
      />
      <ConnectedRoute path="/register" component={RegisterForm}/>
      <ConnectedRoute path="/messagefeed" component={MessageFeedContainer}/>
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
