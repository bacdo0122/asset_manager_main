import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NewAsset = ({socket, inputs, title }) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user)
  const [dataInputs, setDataInputs] = useState({
    seri: '',
    purchaseCost: '',
    purchaseDate: '',
    shoppingPlace: '',
    name: '',
    category: '',
    stock: '',
    outOfDate: '',
    description: '',
    img: ''
  })
  const [file, setFile] = useState("");

  const handleCreateNewAsset = async (e) => {
    e.preventDefault()
    try {
       await axios.post(process.env.REACT_APP_API_BASE_USER_URL + 'asset/add', {...dataInputs, img: file.name})
       socket.emit("reset_asset")
      navigate("/assets")
    } catch (error) {
      console.log("err:", error);
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
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

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} name={input.name} placeholder={input.placeholder} 
                  onChange={(e)=>setDataInputs({...dataInputs, [e.target.name]: e.target.value})} />
                </div>
              ))}
              <button onClick={user.role === "admin" ? handleCreateNewAsset : ()=>{}}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAsset;