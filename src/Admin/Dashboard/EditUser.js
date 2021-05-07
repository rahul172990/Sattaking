import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../../store/actions/Admin";
import { Table, Button, Pagination, Spin } from "antd";
import clsx from "clsx";
import { useStyles } from "../../components/style";
import Header from "../../components/Header";
import NavCard from "../../components/NavCard";
import SideNav from "../../components/SideNav";

const EditUser = (props) => {
  //   const { record  = route;
  const dispatch = useDispatch();
  const [name, setName] = useState(props?.location?.state?.editData?.name);
  const [password, setPassword] = useState(
    props?.location?.state?.editData?.password
  );

  const _id = props?.location?.state?.editData?._id;

  console.log("route.params", props?.location?.state?.editData);
  console.log("updated value", name, password);

  const onEditUser = () => {
    dispatch(addUserAction({ _id, name, password }));
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
            <NavCard title="Edit User">
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

                <button className="add-user-btn-style" onClick={onEditUser}>
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

export default EditUser;
