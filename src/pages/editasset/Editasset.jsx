import "./editasset.scss"
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
import { useEffect, useState } from "react";
import axios from "axios";


const Editasset = ({ socket,inputs, title }) => {
  const [asset, setAsset] = useState(null)
  const [file, setFile] = useState("");
   const {id} = useParams()
   const navigate = useNavigate()

   const [dataInputs, setDataInputs] = useState({
    purchaseDate: '',
     outOfDate: '',
     seri: '',
     category: '',
     purchaseCost: '',
     shoppingPlace: '',
     description: '',
     img: ''
   })

   const handleGetAsset = async () => {
     try {
       const res = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + `asset/getOne/${id}`)
       setAsset(res.data)
     
       setDataInputs(res.data)
     } catch (error) {
       console.log("error:", error);
     }
   }

   useEffect(()=>{
     handleGetAsset()
   },[])
   

   const handleChangeInput = (e) => {
     setDataInputs({...dataInputs, [e.target.name] : e.target.value})
   }

   const handleUpdate =  async (e) => {
     e.preventDefault()
     try {
       await axios.put(process.env.REACT_APP_API_BASE_USER_URL + `asset/update/${id}`, {...dataInputs, img:file.name})
       socket.emit("reset_asset")
       navigate("/assets")
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
        <h1 className="userTitle">Edit Asset</h1>
        <Link to={"/assets/new"}>
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
             src={asset && `http://localhost:5000/public/images/${asset.img}`}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{asset && asset.name}</span>
              <span className="userShowUserTitle">ID: {asset && asset._id}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="detailItem">
                <span className="itemKey">Purchase date:</span>
                <span className="itemValue">{asset && asset.purchaseDate.split("T")[0]}</span>
            </div>
            <div className="detailItem">
                <span className="itemKey">Out of date:</span>
                <span className="itemValue">{asset && asset.outOfDate.split("T")[0]}</span>
                </div>
            <div className="detailItem">
                <span className="itemKey">Seri:</span>
                <span className="itemValue">
                {asset && asset.seri}
                </span>
            </div>
            <div className="detailItem">
                <span className="itemKey">Category:</span>
                <span className="itemValue">{asset && asset.category}</span>
                </div>
            <div className="detailItem">
                <span className="itemKey">Purchase cost:</span>
                <span className="itemValue">{asset && asset.purchaseCost}</span>
                </div>
            <div className="detailItem">
                <span className="itemKey">Shopping place:</span>
                <span className="itemValue">{asset && asset.shoppingPlace}</span>
            </div>
            <div className="detailItem">
                <span className="itemKey">Stock:</span>
                <span className="itemValue">{asset && asset.stock}</span>
            </div>
            <div className="detailItem">
                <span className="itemKey">Description:</span>
                <span className="itemValue">
                {asset && asset.description}
                </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              
              <div className="userUpdateItem">
                <label>Purchase date</label>
                <input
                  type="date"
                  placeholder=""
                  className="userUpdateInput"
                  value={dataInputs.purchaseDate.split("T")[0]}
                  name="purchaseDate"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Out of date</label>
                <input
                  type="date"
                  placeholder=""
                  className="userUpdateInput"
                  value={dataInputs.outOfDate.split("T")[0]}
                  name="outOfDate"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Seri</label>
                <input
                  type="text"
                  placeholder="2b8a8010-16c8-3bd0-a1ce-da27a5ec03b9"
                  className="userUpdateInput"
                  value={dataInputs.seri}
                  name="seri"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Category</label>
                <input
                  type="text"
                  placeholder="Laptops"
                  className="userUpdateInput"
                  value={dataInputs.category}
                  name="category"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Purchase cost</label>
                <input
                  type="number"
                  placeholder="2000"
                  className="userUpdateInput"
                  value={dataInputs.purchaseCost}
                  name="purchaseCost"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Shopping place</label>
                <input
                  type="text"
                  placeholder="15/12/2000"
                  className="userUpdateInput"
                  value={dataInputs.shoppingPlace}
                  name="shoppingPlace"
                  onChange={handleChangeInput}
                />
              </div>
              
              <div className="userUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                   value={dataInputs.description}
                  name="description"
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
                      : (asset && `http://localhost:5000/public/images/${asset.img}`)
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

export default Editasset