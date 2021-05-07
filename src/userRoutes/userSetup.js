import React from "react";
import { Link, Route, Switch, Redirect, Router } from "react-router-dom";
// import PrivateRoute from "./protectedRoute";
import SignIn from "../Admin/Authentication/Signin";
import { routeConfig } from "./routeConfig";

import PrivateRoute from "./protectedRoute";
import history from "../utils/history";
import AuthComponent from "../Admin/Authentication/AuthComponent";
import UserPage from "../User/UserPage";
import Login from "../User/Login";
import MyGames from "../User/MyGames";

const UserSetup = () => {
  console.log("localStorage.userToken", localStorage.userToken);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => <UserPage />} />
        <Route
          path="/user/dashboard"
          exact
          render={() =>
            localStorage.userToken ? (
              <Redirect to="/user/dashboard" />
            ) : (
              <UserPage />
            )
          }
        />

        <Route
          path="/login"
          exact
          render={() =>
            localStorage.userToken ? (
              <Redirect to="/user/dashboard" />
            ) : (
              <Login />
            )
          }
        />

        {routeConfig.map((route, i) => (
          <PrivateRoute
            exact={route.exact}
            key={route}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default UserSetup;
