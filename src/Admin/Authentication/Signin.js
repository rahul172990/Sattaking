import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/actions/Admin";
import "./authStyle.css";

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    dispatch(loginAction({ email, password }));
  };

  return (
    <div className="signin-div-style">
      <input
        placeholder="Enter email"
        type="text"
        className="input-style"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Enter password"
        type="password"
        className="input-style"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <div className="forget-password-style">
        <span className="forget-password-text-style" onClick={() => {}}>
          Forget Password?
        </span>
      </div> */}
      <button className="auth-btn-style" onClick={onSignIn}>
        <span className="btn-text-style">Sign in</span>
      </button>
    </div>
  );
};

export default Signin;
