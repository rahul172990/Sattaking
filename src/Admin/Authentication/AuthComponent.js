import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import "./authStyle.css";

const AuthComponent = () => {
  const [isAdminExist, setIsAdminExit] = useState(true);
  return (
    <div className="auth-screen-style">
      <div className="auth-selection-style">
        <div className="auth-signin" onClick={() => setIsAdminExit(true)}>
          <span
            className="auth-span-style"
            style={{
              color: isAdminExist ? "black" : "#CACFD2",
              borderBottomWidth: isAdminExist ? 1 : 0,
              borderBottomColor: isAdminExist ? "black" : "none",
              borderBottomStyle: isAdminExist ? "solid" : "none",
            }}
          >
            Sign In
          </span>
        </div>
        {/* <div className="auth-signup" onClick={() => setIsAdminExit(false)}>
          <span
            className="auth-span-style"
            style={{
              color: !isAdminExist ? "black" : "#CACFD2",
              borderBottomWidth: !isAdminExist ? 1 : 0,
              borderBottomColor: !isAdminExist ? "black" : "none",
              borderBottomStyle: !isAdminExist ? "solid" : "none",
            }}
          >
            Sign Up
          </span>
        </div> */}
      </div>
      <Signin />
      {/* {isAdminExist ? <Signin /> : <Signup />} */}
    </div>
  );
};

export default AuthComponent;
