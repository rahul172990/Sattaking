import React, { useState } from "react";
import { Input, Select } from "antd";
import "./customComponentStyle.css";

const { Search } = Input;

const NavCard = (props) => {
  const { onChange, filteredBandList } = props;
  const { Option } = Select;

  function handleChange(value) {
    props.onSelectBandAction(value);
  }

  return (
    <>
      <div className="top-Header">
        <div className="table-header-style">
          <span className="table-title">{props.title}</span>
          <div className="responsive-search-style">
            {/* {props?.selectFilter && (
              <Select
                className="select-responsive select-responsive1"
                defaultValue="All"
                style={{ width: 150 }}
                onChange={handleChange}
              >
                <Option value="all">All</Option>;
                {filteredBandList?.map((item) => {
                  return <Option value={item._id}>{item.bandName}</Option>;
                })}
              </Select>
            )} */}

            {/* {props.noSearch ? null : (
              <Search
                className="table-search-input"
                placeholder="Search"
                onChange={onChange}
                onSearch={() => {}}
                style={{
                  width: 200,
                  marginLeft: 20,
                }}
              />
            )} */}
          </div>
        </div>
      </div>
      <div
        className={`nav-Card  ${
          props.noResponsive ? null : "table-responsive"
        } ${props.extraClass}`}
      >
        {props.children}

        {/* {props.noSearch ? null : (
          <div className="search-show-style">
            <Search
              className="table-search-input"
              placeholder="search"
              onSearch={() => {}}
              onChange={onChange}
            />
          </div>
        )} */}

        {/* {props.selectFilter && (
          <div className="show-select-style">
            <Select
              defaultValue="All"
              style={{ width: 150 }}
              onChange={handleChange}
              className="text-dots3 "
            >
              <Option value="all">All</Option>;
              {filteredBandList?.map((item) => {
                return <Option value={item._id}>{item.bandName}</Option>;
              })}
            </Select>
          </div>
        )} */}
      </div>
    </>
  );
};

export default NavCard;
