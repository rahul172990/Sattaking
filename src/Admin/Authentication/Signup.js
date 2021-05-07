import React from "react";

const Signup = () => {
  return (
    <div className="signin-div-style">
      <input placeholder="Enter email" type="text" className="input-style" />
      <input
        placeholder="Enter password"
        type="password"
        className="input-style"
      />
      <input
        placeholder="Confirm password"
        type="password"
        className="input-style"
      />

      <button className="auth-btn-style">
        <span className="btn-text-style">Sign up</span>
      </button>
    </div>
  );
};

export default Signup;
