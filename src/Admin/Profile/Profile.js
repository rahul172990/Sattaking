import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from "../../store/actions/Admin";
import { Table, Button, Pagination, Spin } from "antd";
import clsx from "clsx";
import { useStyles } from "../../components/style";
import Header from "../../components/Header";
import NavCard from "../../components/NavCard";
import SideNav from "../../components/SideNav";

const Profile = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onProfileUpdate = () => {
    dispatch(updateProfileAction({ email, password }));
  };

  //   const { userListData } = useSelector((state) => state.gameReducer);
  const classes = useStyles();
  const { appState } = useSelector((state) => state);
  // const classes = useStyles();
  const { sidebarDrawerToggleState } = appState;
  //   console.log("userlistData", userListData);

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
            <NavCard title="Update Profile">
              <div className="add-user-spacing-style">
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

                <button
                  className="add-user-btn-style"
                  onClick={onProfileUpdate}
                >
                  <span className="btn-text-style">Update</span>
                </button>
              </div>
            </NavCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
