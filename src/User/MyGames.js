import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listUserGamesAction,
  updateGamePointsAction,
} from "../store/actions/User/userActions";
import { useHistory } from "react-router";
import { Table, Button, Pagination, Spin } from "antd";
import UserHeader from "../components/UserHeader";
import NavCard from "../components/NavCard";
import PointUpdateModal from "../components/PointUpdateModal";

const MyGames = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { onLoad, userGamesData } = useSelector((state) => state.userReducer);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameId, setGameId] = useState(null);
  const [gamePoints, setGamePoints] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      title: "Game Name",
      dataIndex: "gameName",

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
      title: "Game Points",
      dataIndex: "gamePoints",

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
          <span className="text-dots3">{record?.points}</span>
        </div>
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="action-style">
            <Button
              // className="action-button-inline-style"
              type="primary"
              onClick={
                () => {
                  setIsModalOpen(true);
                  setGameId(record?._id);
                  setGamePoints(record?.points);
                  console.log("userGamesData", userGamesData);
                }
                // history.push("/updateGamePoint", {
                //   editData: record,
                // })
              }
            >
              <span style={{ fontWeight: 600, marginTop: 1 }}>
                Update Points
              </span>
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(listUserGamesAction());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <UserHeader />
      <div
        className="row"
        style={{
          marginTop: 150,
          width: "80%",
        }}
      >
        <div className="col-sm align-table">
          <NavCard title="My Games">
            <Table
              className="table-responsive user-table-style"
              columns={columns}
              dataSource={userGamesData}
              pagination={false}
              showSorterTooltip={false}
              rowKey={(record) => record._id}
              //   loading={{
              //     indicator: (
              //       <div>
              //         <Spin />
              //       </div>
              //     ),
              //     spinning: onLoad ? true : false,
              //   }}
            />
          </NavCard>
        </div>
      </div>

      <PointUpdateModal
        visible={isModalOpen}
        gameId={gameId}
        onOk={handleOk}
        onCancel={handleCancel}
        onCancelSubmit={() => {
          setIsModalOpen(false);
        }}
        onChange={(e) => setGamePoints(e.target.value)}
        points={gamePoints}
        onUpdate={() => {
          dispatch(
            updateGamePointsAction({ game_id: gameId, points: gamePoints })
          );
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default MyGames;
