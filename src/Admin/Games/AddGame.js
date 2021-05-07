import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGamesAction } from "../../store/actions/Admin";
import { Table, Button, Pagination, Spin } from "antd";
import clsx from "clsx";
import { useStyles } from "../../components/style";
import Header from "../../components/Header";
import NavCard from "../../components/NavCard";
import SideNav from "../../components/SideNav";

const AddGame = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [userId, setUserId] = useState(props?.location?.state?.gameData?._id);

  const onAddGame = () => {
    dispatch(addGamesAction({ user_id: userId, name: name }));
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
            <NavCard title="Add Game">
              <div className="add-user-spacing-style">
                <input
                  placeholder="Enter name"
                  type="text"
                  className="input-style"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  disabled
                  placeholder="Enter user id"
                  type="text"
                  className="input-style"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />

                <button className="add-user-btn-style" onClick={onAddGame}>
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

export default AddGame;
