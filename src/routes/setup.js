import React from "react";
import { Link, Route, Switch, Redirect, Router } from "react-router-dom";
import SignIn from "../Admin/Authentication/Signin";
import { routeConfig } from "./routeConfig";
import PrivateRoute from "./protectedRoute";
import history from "../utils/history";
import AuthComponent from "../Admin/Authentication/AuthComponent";

const Setup = () => {
  console.log("localStorage.token", localStorage.token);
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/admin"
          render={() =>
            localStorage.token ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="admin/login" />
            )
          }
        />
        <Route
          path="/admin/login"
          render={() =>
            localStorage.token ? (
              <Redirect to="/dashboard" />
            ) : (
              <AuthComponent />
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

export default Setup;
