import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import { Link, useParams } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Single = () => {
    const {userId} = useParams()
    const [data, setData] = useState(null)

    const handleFetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + `user/${userId}`)
        setData(res.data)
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      handleFetchData()
    },[])

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link to={`/users/edit/${userId}`}> 
              <div className="editButton">Edit</div>
            </Link>
            
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={data && `http://localhost:5000/public/images/${data.img}`}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data && data.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data && data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data && data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  {data && data.address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date of birth:</span>
                  <span className="itemValue">{data && data.dateOfBirth.split("T")[0]}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Gender:</span>
                  <span className="itemValue">{data && data.gender}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">{data && data.department}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Created At:</span>
                  <span className="itemValue">{data && data.createdAt.split("T")[0]}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Employee ID:</span>
                  <span className="itemValue">{data && data.employeeID}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Username</span>
                  <span className="itemValue">{data && data.username}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Password</span>
                  <span className="itemValue">{data && data.password}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="bottom">
        <h1 className="title">Assets</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
