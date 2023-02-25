import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useEffect, useState } from "react";
import axios from "axios";

const Featured = () => {
  const [feature, setFeature] = useState({
    active: null,
    unused: null,
    pending: null
  })
  const handleFetchData = async () => {
    try {
      const getActive = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + `asset/getStatus/active`);
      const getUnused = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + `asset/getStatus/unused`);
      const getPending = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + `asset/getStatus/pending`);
      setFeature({
        active: getActive.data.length,
        unused: getUnused.data.length,
        pending: getPending.data.length,
      })
      // console.log("data:", (getActive.data.length / (getActive.data.length+ getUnused.data.length + getPending.data.length)));
    } catch (error) {
      console.log("err:", error);
    }
  }
  useEffect(()=>{
    handleFetchData()
  })
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Assets</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={80} text={`${parseFloat(Number(parseInt(feature.active) /
           (parseInt(feature.unused)+parseInt(feature.active) + parseInt(feature.pending)))*100).toFixed(2) }%`} strokeWidth={5} />
        </div>
        <p className="title">Total assets active</p>
        <p className="amount">{feature.active && feature.active}</p>
        <p className="desc">
        Assets by Status Type.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Active</div>
            <div className="itemResult negative">
              
              <div className="resultAmount">{feature.active ?feature.active: 0 }</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Unused</div>
            <div className="itemResult positive">
              
              <div className="resultAmount">{feature.unused ?feature.unused: 0}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Pending</div>
            <div className="itemResult positive">
              
              <div className="resultAmount" >{feature.pending ?feature.pending: 0}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
