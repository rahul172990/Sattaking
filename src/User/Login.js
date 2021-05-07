import React, { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../store/actions/User/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    console.log("sign in click");
    dispatch(userLoginAction({ name, password }));
  };

  return (
    <div className="auth-screen-style">
      <div className="auth-selection-style">
        <div className="auth-signin">
          <span className="auth-span-style">Login</span>
        </div>
      </div>

      <div className="signin-div-style">
        <input
          placeholder="Enter email"
          type="text"
          className="input-style"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter password"
          type="password"
          className="input-style"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-btn-style" onClick={onSignIn}>
          <span className="btn-text-style">Login</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
