import { Route, Redirect } from "react-router-dom";
import React from "react";

console.log(localStorage);
const PrivateRoute = ({ component: Component, ...rest }) =>
  localStorage.token ? <Component {...rest} /> : <Redirect to="/admin" />;
// <Route {...rest} render={(props) => <Component {...props} />} />

export default PrivateRoute;
