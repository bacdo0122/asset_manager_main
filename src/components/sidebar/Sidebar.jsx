import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setdarkMode } from "../../reducer/darkMode";
import { removeAccessToken } from "../../helper/localStorage";
import { setAuth } from "../../reducer/auth";

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    removeAccessToken()
    dispatch(setAuth(false))
    navigate("/login")
  }
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">IT - Assets</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>People</span>
            </li>
          </Link>
          <Link to="/assets" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Assets</span>
            </li>
          </Link>
          <Link to="/pending" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>All Pending</span>
            </li>
          </Link>
          <Link to="/consumable" style={{ textDecoration: "none" }}>
            <li>
              <PaidIcon className="icon" />
              <span>Consumables</span>
            </li>
          </Link>
          
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Report</span>
          </li>
          <Link to="/notification" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          </Link>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Remote Server</span>
          </li>
          {/* <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li> */}
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch(setdarkMode(false))}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch(setdarkMode(true))}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
