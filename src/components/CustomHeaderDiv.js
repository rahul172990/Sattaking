import React from "react";
import "./componentStyle.css";

const CustomHeaderDiv = (props) => {
  return (
    <div className="header-div-style">
      <span className="title-style">{props.title}</span>
    </div>
  );
};

export default CustomHeaderDiv;
