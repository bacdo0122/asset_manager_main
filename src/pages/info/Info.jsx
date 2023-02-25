import "./info.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import List from "../../components/infotable/Infotable";
import { useEffect, useState } from "react";
import axios from "axios";

const Info = ({socket}) => {
  const {assetId} = useParams()
  const navigate = useNavigate()
    const [data, setData] = useState(null)
    const handleFetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + `asset/getOne/${assetId}`)
        console.log("res:", res.data);
        setData(res.data)
      } catch (error) {
        console.log(error);
      }
    }
 
    useEffect(()=>{
      handleFetchData()
    },[assetId])

    const handelClickDelete = async (e) => {
      e.preventDefault()
      try {
        await axios.delete(process.env.REACT_APP_API_BASE_USER_URL + `asset/delete/${assetId}`)
        socket.emit("reset_asset")
        navigate("/assets")
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div className="info">
        <Sidebar />
        <div className="infoContainer">
          <Navbar />
          <div className="top">
            <div className="left">
              <Link to={`/assets/edit/${assetId}`}> 
                <div className="editButton">Edit</div>
              </Link>
              <div className="deleteButton" onClick={handelClickDelete} >Delete</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src={data && `https://asset-manager.onrender.com/public/images/${data.img}`}
                  alt=""
                  className="itemImg"
                  
                />
                
                <div className="details">
                  <h1 className="itemTitle">{data && data.name}</h1>
                  <div className="detailItem">
                    <span className="itemKey">ID:</span>
                    <span className="itemValue">{data && data._id}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Local:</span>
                    <Link to="/users/test">
                      <span className="itemValue">{data && data.local}</span>
                    </Link>
                    
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Purchase date:</span>
                    <span className="itemValue">{data && data.purchaseDate.split("T")[0]}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Out of date:</span>
                    <span className="itemValue">{data && data.outOfDate.split("T")[0]}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Seri:</span>
                    <span className="itemValue">
                    {data && data.seri}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Category:</span>
                    <span className="itemValue">{data && data.category}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Purchase cost:</span>
                    <span className="itemValue">{data && data.purchaseCost}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Shopping place:</span>
                    <span className="itemValue">{data && data.shoppingPlace}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Stock:</span>
                    <span className="itemValue">{data && data.stock}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Description:</span>
                    <span className="itemValue">
                    {data && data.description}
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
          <div className="bottom">
        <h1 className="title">Assets</h1>
          <List name={data && data.name}/>
        </div>
        </div>
      </div>
      
    );
  };
  
  export default Info;
