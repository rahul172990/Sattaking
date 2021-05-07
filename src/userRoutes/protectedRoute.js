import { Route, Redirect } from "react-router-dom";
import React from "react";

console.log("LLLLLLLLLLLL", localStorage);
const PrivateRoute = ({ component: Component, ...rest }) =>
  localStorage.userToken ? <Component {...rest} /> : <Redirect to="/" />;
// <Route {...rest} render={(props) => <Component {...props} />} />

export default PrivateRoute;
