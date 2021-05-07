import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../../store/actions/Admin";
import { Table, Button, Pagination, Spin } from "antd";
import clsx from "clsx";
import { useStyles } from "../../components/style";
import Header from "../../components/Header";
import NavCard from "../../components/NavCard";
import SideNav from "../../components/SideNav";

const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onAddUser = () => {
    dispatch(addUserAction({ name, password }));
  };

  const { userListData } = useSelector((state) => state.userListReducer);
  const classes = useStyles();
  const { appState } = useSelector((state) => state);
  // const classes = useStyles();
  const { sidebarDrawerToggleState } = appState;
  console.log("userlistData", userListData);

  return (
    <div>
      <Header />
      <SideNav />

      <div
        className={clsx(classes.content, {
          [classes.contentShift]: sidebarDrawerToggleState,
        })}
      >
        <div className="row">
          <div className="col-sm">
            <NavCard title="Add User">
              <div className="add-user-spacing-style">
                <input
                  placeholder="Enter name"
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

                <button className="add-user-btn-style" onClick={onAddUser}>
                  <span className="btn-text-style">Add</span>
                </button>
              </div>
            </NavCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
