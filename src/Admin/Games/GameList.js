import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamesListAction } from "../../store/actions/Admin";
import { useHistory } from "react-router-dom";
import { Table, Button, Pagination, Spin } from "antd";
import clsx from "clsx";
import moment from "moment";
import { useStyles } from "../../components/style";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import NavCard from "../../components/NavCard";
import "../../antdStyle/customAntd.css";

const GameList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { gamesListData, onLoad, onChangeStatus } = useSelector(
    (state) => state.gamesReducer
  );
  const [userBlock, setUserBlock] = useState(false);
  const classes = useStyles();
  const { appState } = useSelector((state) => state);
  // const classes = useStyles();
  const { sidebarDrawerToggleState } = appState;
  //   console.log("onChangeStatus", onChangeStatus);
  console.log("gameListData", gamesListData);

  const getConvertedDate = (timestamp) => {
    var ts = timestamp;

    console.log("local", new Date(timestamp).toLocaleString());

    // convert unix timestamp to milliseconds
    var ts_ms = ts * 1000;

    // initialize new Date object
    var date_ob = new Date(ts_ms);

    // year as 4 digits (YYYY)
    var year = date_ob.getFullYear();

    // month as 2 digits (MM)
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // date as 2 digits (DD)
    var date = ("0" + date_ob.getDate()).slice(-2);

    // hours as 2 digits (hh)
    var hours = ("0" + date_ob.getHours()).slice(-2);

    // minutes as 2 digits (mm)
    var minutes = ("0" + date_ob.getMinutes()).slice(-2);

    // seconds as 2 digits (ss)
    var seconds = ("0" + date_ob.getSeconds()).slice(-2);

    // date as YYYY-MM-DD format
    console.log(
      "Date as YYYY-MM-DD Format: " + date + "-" + month + "-" + year
    );

    console.log("\r\n");

    // date & time as YYYY-MM-DD hh:mm:ss format:
    console.log(
      "Date as YYYY-MM-DD hh:mm:ss Format: " +
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
    );

    console.log("\r\n");

    // time as hh:mm format:
    console.log("Time as hh:mm Format: " + hours + ":" + minutes);
  };

  useEffect(() => {
    dispatch(getGamesListAction());
  }, []);

  //   useEffect(() => {
  //     // console.log("rehit api");
  //     if (userBlock === true && onLoad === false) {
  //       dispatch(getGamesListAction());
  //       console.log("rehit api");
  //       // dispatch(getUserList());
  //       setUserBlock(false);
  //     }
  //   });

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
      title: "Username",
      dataIndex: "username",
      render: (text, record) => (
        <div
          style={{
            minWidth: "50px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="text-dots3">{record?.user_id?.name}</span>
        </div>
      ),
    },

    {
      title: "Points",
      dataIndex: "points",
      render: (text, record) => (
        <div
          style={{
            minWidth: "50px",
            textAlign: "justify",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="text-dots3">{record?.points || 0}</span>
        </div>
      ),
    },

    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   render: (text, record) => {
    //     return (
    //       <div className="action-style">
    //         <Button
    //           className="action-button-inline-style"
    //           type="primary"
    //           // onClick={() =>
    //           //   history.push("/bandDetails", {
    //           //     Data: record,
    //           //   })
    //           // }
    //         >
    //           <span style={{ fontWeight: 600, marginTop: 1 }}>VIEW</span>
    //         </Button>
    //         <Button
    //           // className="action-button-inline-style"
    //           type="primary"
    //           onClick={() =>
    //             history.push("/editUser", {
    //               editData: record,
    //             })
    //           }
    //         >
    //           <span style={{ fontWeight: 600, marginTop: 1 }}>EDIT</span>
    //         </Button>
    //         {/* <Button
    //           // disabled={inProgress}
    //           // className="action-button-inline-style danger-color"
    //           type="primary"
    //           style={{ width: 100, fontWeight: 600 }}
    //           onClick={() => {
    //             setUserBlock(true);
    //             dispatch(
    //               changeUserBlockStatusAction({
    //                 _id: record._id,
    //                 is_blocked: !record.is_blocked,
    //               })
    //             );
    //           }}
    //         >
    //           <span style={{ fontWeight: 600, marginTop: 1 }}>
    //             {record.is_blocked ? "UNBLOCK" : "BLOCK"}
    //           </span>
    //         </Button> */}
    //       </div>
    //     );
    //   },
    // },
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
                dataSource={gamesListData}
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

export default GameList;
