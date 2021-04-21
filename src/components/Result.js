import React from "react";

const Result = (props) => {
  return (
    <div className="result-div-component-style">
      <div className="row">
        <span style={{ fontSize: 30, color: "white", fontWeight: 600 }}>
          {props.title}
        </span>
      </div>
      <div className="row">
        <span style={{ fontSize: 40, color: "#F7FF00", fontWeight: 600 }}>
          {props.number}
        </span>
      </div>
    </div>
  );
};

export default Result;
