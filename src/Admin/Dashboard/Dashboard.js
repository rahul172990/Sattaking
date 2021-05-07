import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserBlockStatusAction,
  getUserList,
} from "../../store/actions/Admin";
import { useHistory } from "react-router-dom";
import { Table, Button, Pagination, Spin } from "antd";
import clsx from "clsx";
import { useStyles } from "../../components/style";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import NavCard from "../../components/NavCard";
import "../../antdStyle/customAntd.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userListData, onLoad, onChangeStatus } = useSelector(
    (state) => state.userListReducer
  );
  const [userBlock, setUserBlock] = useState(false);
  const classes = useStyles();
  const { appState } = useSelector((state) => state);
  // const classes = useStyles();
  const { sidebarDrawerToggleState } = appState;
  console.log("onChangeStatus", onChangeStatus);
  console.log("userlistData", userListData);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  useEffect(() => {
    // console.log("rehit api");
    if (userBlock === true && onLoad === false) {
      dispatch(getUserList());
      console.log("rehit api");
      // dispatch(getUserList());
      setUserBlock(false);
    }
  });

  const columns = [
    {
      title: "Sr.No",
      dataIndex: "sr.no",
      render: (text, record, index) => (
        <div>
          <span>{index + 1}</span>
        </div>
      ),
    },

    {
      title: "Name",
      dataIndex: "name",

      sorter: true,
      render: (text, record) => (
        <div
          style={{
            minWidth: "50px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="text-dots3">{record?.name}</span>
        </div>
      ),
    },
    {
      title: "Password",
      dataIndex: "password",

      sorter: {
        compare: (a, b) => a.email - b.email,
        multiple: 1,
      },
      render: (text, record) => (
        <div
          style={{
            minWidth: "50px",
            textAlign: "justify",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="text-dots3">{record?.password}</span>
        </div>
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="action-style">
            {/* <Button className="action-button-inline-style" type="primary">
              <span style={{ fontWeight: 600, marginTop: 1 }}>VIEW</span>
            </Button> */}
            <Button
              // className="action-button-inline-style"
              type="primary"
              onClick={() =>
                history.push("/editUser", {
                  editData: record,
                })
              }
            >
              <span style={{ fontWeight: 600, marginTop: 1 }}>EDIT</span>
            </Button>

            <Button
              type="primary"
              onClick={() =>
                history.push("/addGame", {
                  gameData: record,
                })
              }
            >
              <span style={{ fontWeight: 600, marginTop: 1 }}>ADD GAME</span>
            </Button>

            <Button
              type="primary"
              style={{ width: 100, fontWeight: 600 }}
              onClick={() => {
                setUserBlock(true);
                dispatch(
                  changeUserBlockStatusAction({
                    _id: record._id,
                    is_blocked: !record.is_blocked,
                  })
                );
              }}
            >
              <span style={{ fontWeight: 600, marginTop: 1 }}>
                {record.is_blocked ? "UNBLOCK" : "BLOCK"}
              </span>
            </Button>
          </div>
        );
      },
    },
  ];

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
          <div className="col-sm align-table">
            <NavCard title="Users">
              <Table
                className="table-responsive user-table-style"
                columns={columns}
                dataSource={userListData}
                pagination={false}
                showSorterTooltip={false}
                rowKey={(record) => record._id}
                loading={{
                  indicator: (
                    <div>
                      <Spin />
                    </div>
                  ),
                  spinning: onLoad ? true : false,
                }}
              />
            </NavCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
