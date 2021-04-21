import React from "react";
const Button = (props) => {
  return (
    <div
      className="btn-style"
      style={{
        backgroundColor: props.color,
        width: props.width,
      }}
    >
      <span
        style={{
          color: "white",
          fontSize: 18,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 600,
        }}
      >
        {props.text}
      </span>
    </div>
  );
};

export default Button;
