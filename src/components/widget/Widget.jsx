import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { userColumns, userRows } from "../../datatablesource";
import Asset from "../../pages/asset/Asset";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Widget = ({ type }) => {
  let data;
  const [dataLength, setDataLength] = useState(0)
  const handleFetchData = async (name) => {
    try {
      const dataLength = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + `${name}`);

      setDataLength(dataLength.data.length)
    } catch (error) {
      console.log("err:", error);
    }
  }
  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "employee":
        handleFetchData("user")
      data = {
        title: "EMPLOYEES",
        isMoney: false,
        link: "See all users",
        isLink: "./users",
        number: dataLength,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "assets":
      handleFetchData("asset/getAll") 
      data = {
        title: "ASSETS",
        isMoney: false,
        link: "View all assets",
        isLink: "./assets",
        number: dataLength,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "pending":
      handleFetchData("pending")
      data = {
        title: "ALL PENDINGS",
        isMoney: false,
        link: "View all pending",
        isLink: "./pending",
        number: dataLength,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "consumables":
      handleFetchData("consumable")
      data = {
        title: "CONSUMABLES",
        isMoney: false,
        isLink: "./consumable",
        link: "See all consumables",
        number: dataLength,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.number}
        </span>
        <Link to={data.isLink}><span className="link">{data.link}</span></Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
