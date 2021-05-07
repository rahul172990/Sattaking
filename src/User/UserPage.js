import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllGamesAction } from "../store/actions/User/userActions";
import CustomHeaderDiv from "../components/CustomHeaderDiv";
import Result from "../components/Result";
import NavCard from "../components/NavCard";
import { Table, Pagination, Spin } from "antd";
import UserHeader from "../components/UserHeader";
import Button from "../components/Button";

const UserPage = () => {
  const dispatch = useDispatch();
  const { allGamesListData } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(listAllGamesAction());
  }, []);

  console.log("allGamesListData", allGamesListData);

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
  ];

  return (
    <>
      <div>
        <UserHeader />
      </div>
      <div style={{ marginTop: 80, backgroundColor: "black" }}>
        <div
          className="row mt-1"
          style={{
            marginLeft: 3,
            marginRight: 3,
          }}
        >
          <div className="col-3">
            <CustomHeaderDiv title="Satta King" />
          </div>
          <div className="col-3">
            <CustomHeaderDiv title="Satta Leak" />
          </div>
          <div className="col-6">
            <CustomHeaderDiv title="Result Chart" />
          </div>
        </div>

        <marquee className="marquee-text-style my-1" direction="left">
          Satta king, Sattaking, Satta king 2020, Satta king up, Satta result,
          Satta king result, Satta king online, Gali result, Desawar result,
          Satta king chart, Satta king live, Gali satta, Deshawar live result,
          Gali live result, Satta matka, Satta matka king, Satta king up, Satta
          king 2020 chart, Satta king desawar, Satta king gali, Gali live
          result, Disawar live result, Satta Number, Satta Game, Gali Number,
          Delhi Satta king, Satta Bazar, Black satta king, Gali Single Jodi,
          Black Satta Result, Desawar Single Jodi
        </marquee>

        <div
          className="details-div-style p-3"
          style={{
            marginTop: -5,
          }}
        >
          <div className="row">
            <h3 className="satta-text-style">
              SATTA KING, SATTAKING, SATTA RESULT
            </h3>
          </div>
          <div className="row site-shadow">
            <h2
              style={{
                color: "red",
                fontSize: 20,
                paddingBottom: 10,
                fontWeight: 700,
              }}
            >
              WWW.SATTAKINGG.IN
            </h2>
          </div>
        </div>

        <div className="details2-div-style">
          <div className="row">
            <span style={{ fontSize: 14, fontWeight: 600 }}>
              Special Dhamaka April
            </span>
          </div>
          <div className="row">
            <span
              style={{
                textAlign: "justify",
                paddingLeft: 20,
                paddingRight: 20,
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              GAME डेली पास होती है हमारे साथ जितने लोग जुड़े हुआ है डेली सबका
              लाखो रूपये का प्रॉफिट होता हैं सिंगल जोड़ी लीक 1011% गारंटी से पास
              आज तक जितने लोग हमसे जुड़े हैं 20- 25 लाख रुपये महीना कमा रहे हैं
            </span>
          </div>
          <div
            className="row"
            style={{
              fontWeight: 600,
            }}
          >
            <span
              style={{
                textAlign: "center",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              गेम पासिंग प्रूफ देखने के लिये हमे WhatsApp करें
            </span>
          </div>

          <div className="row">
            <span
              style={{
                color: "green",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              शिल्पा गुप्ता क्वीन ऑफ सट्टा
            </span>
          </div>

          <div className="row">
            <span
              style={{
                color: "#F433FF",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              सट्टा कंपनी ऑफ चेयरमैन
            </span>
          </div>

          <div className="row">
            <span
              style={{
                color: "#A52A2A",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              07355935177
            </span>
          </div>

          <div className=" row btn-alignment">
            <Button color="green" text="WhatsApp Now" width={180} />
            <div style={{ marginLeft: 5 }} />
            <Button color="blue" text="Call Now" width={140} />
          </div>
        </div>

        <div className="details3-div-style">
          <div className="row">
            <span
              style={{
                fontSize: 16,
                paddingLeft: 20,
                paddingRight: 20,
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              आपको यहां मिलेगा डायरेक्ट कंपनी से लीक गेम फरीदाबाद गाज़ियाबाद गली
              देसावर जो होता है डायरेक्ट कंपनी से लीक आपका कितना भी लॉस हुआ हो
              कवर होगा, एक दिन में बस क्यूंकि यहां काम होता है गारन्टी के साथ
            </span>
          </div>

          <div className="row">
            <span
              style={{
                color: "blue",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              रचना चोपड़ा
            </span>
          </div>

          <div className="row">
            <span
              style={{
                color: "red",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              गली एंड देसावर कंपनी मैनेजर
            </span>
          </div>

          <div className="row">
            <span
              style={{
                color: "#A52A2A",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              07847021289
            </span>
          </div>

          <div className="row">
            <Button color="green" text="WhatsApp chat Me" width={210} />
          </div>
        </div>

        <div className="result-div-style">
          <Result title="JAI DURGA" number="WAIT" />
          <Result title="SUPERSULTAN" number="WAIT" />
          <Result title="HINDUSTAN" number={27} />
          <Result title="New Savera" number="WAIT" />
          <Result title="MEERUT GOLDEN" number={24} />
        </div>

        <div
          className="row"
          style={{
            marginTop: 150,
            width: "100%",
            marginLeft: 5,
          }}
        >
          <div className="col-sm align-table">
            <NavCard title="Games Runnig">
              <Table
                className="table-responsive user-table-style"
                columns={columns}
                dataSource={allGamesListData}
                pagination={false}
                showSorterTooltip={false}
                rowKey={(record) => record._id}
              />
            </NavCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
