import React, { useState } from "react";
import { Modal, Button } from "antd";

const PointUpdateModal = (props) => {
  return (
    <>
      <Modal
        title="Update Game Points"
        visible={props.visible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <input
          disabled
          type="text"
          className="input-style"
          value={props.gameId}
        />
        <input
          placeholder="Enter points"
          type="text"
          className="input-style"
          value={props.points}
          onChange={props.onChange}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <button
            className="auth-btn-style"
            style={{ marginRight: 8 }}
            onClick={props.onCancelSubmit}
          >
            <span className="btn-text-style">Cancel</span>
          </button>
          <button className="auth-btn-style" onClick={props.onUpdate}>
            <span className="btn-text-style">Update</span>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default PointUpdateModal;
