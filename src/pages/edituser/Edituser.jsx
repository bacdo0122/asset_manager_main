import "./edituser.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import LockIcon from '@mui/icons-material/Lock';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";


const Edituser = ({ socket }) => {
  const [user, setUser] = useState(null)
  const [file, setFile] = useState("");
  const {id} = useParams()
  const navigate = useNavigate()

  const [dataInputs, setDataInputs] = useState({
    name: '',
    phone: '',
    address: '',
    gender: '',
    username: '',
    employeeID: '',
    email: '',
    department: '',
    dateOfBirth: '',
    password: '',
    img: ''
  })

  const handleGetUser = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + `user/${id}`)
      setUser(res.data)
      setDataInputs(res.data)
    } catch (error) {
      console.log("error:", error);
    }
  }

  useEffect(()=>{
    handleGetUser()
  },[])
  const handleFormatPhone = (phone) => {
    if(phone.slice(0,1) === "0"){
     return "+84 " + phone.slice(1)
      
    }
    return phone;
  }

  const handleChangeInput = (e) => {
    setDataInputs({...dataInputs, [e.target.name] : e.target.value})
  }

  const handleUpdate =  async (e) => {
    e.preventDefault()
    try {
      await axios.put(process.env.REACT_APP_API_BASE_USER_URL + `user/edit/${id}`, dataInputs)
      socket.emit("reset_user")
      navigate("/users")
    } catch (error) {
      console.log("err:", error);
    }
  }

  return (
    <div className="edit">
      <Sidebar/>
      <div className="user">
      <Navbar/>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to={"/users/new"}>
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={user && `http://localhost:5000/public/images/${user.img}`}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user && user.name}</span>
              <span className="userShowUserTitle">{user && user.department}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user && user.username}</span>
            </div>
            <div className="userShowInfo">
              <LockIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user && user.password}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user && handleFormatPhone(user.phone)}</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user && user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user && user.address}</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user && user.dateOfBirth.split("T")[0]}</span>
            </div>
            <div className="userShowInfo">
              <ConfirmationNumberIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user && user.employeeID}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="an.hlIT3149"
                  className="userUpdateInput"
                  value={dataInputs.username}
                  name="username"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="*********"
                  className="userUpdateInput"
                  value={dataInputs.password}
                  name="password"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Lê Hoài An"
                  className="userUpdateInput"
                  value={dataInputs.name}
                  name="name"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="anan98@gmail.com"
                  className="userUpdateInput"
                  value={dataInputs.email}
                  name="email"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+84 978 564 312"
                  className="userUpdateInput"
                  value={dataInputs.phone}
                  name="phone"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Hoàng Mai - Hà Nội"
                  className="userUpdateInput"
                  value={dataInputs.address}
                  name="address"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Date of birth</label>
                <input
                  type="date"
                  placeholder="15/12/2000"
                  className="userUpdateInput"
                  value={dataInputs.dateOfBirth.split("T")[0]}
                  name="dateOfBirth"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Department</label>
                <input
                  type="text"
                  placeholder="IT - Software"
                  className="userUpdateInput"
                  value={dataInputs.department}
                  name="department"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Employee ID</label>
                <input
                  type="text"
                  placeholder="IT3149"
                  className="userUpdateInput"
                  value={dataInputs.employeeID}
                  name="employeeID"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : `http://localhost:5000/public/images/${dataInputs.img}`
                  }
                  alt=""
                />
                <label htmlFor="file">
                  <DriveFolderUploadOutlinedIcon className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => {
                    setFile(e.target.files[0])
                    setDataInputs({...dataInputs, img: e.target.files[0].name})
                  }}
                  style={{ display: "none" }}
                />
              </div>
              <button className="userUpdateButton" onClick={handleUpdate}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Edituser