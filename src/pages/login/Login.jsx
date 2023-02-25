import "./login.scss"
import React, {useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setAccessToken } from "../../helper/localStorage";
import { useDispatch } from "react-redux";
import { setAuth } from "../../reducer/auth";
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const [input, setInput] = useState({
      username: '',
      password: ''
    })

  const handleLogin = async () => {
    try {
      const data = await axios.post(process.env.REACT_APP_API_BASE_USER_URL + "user/login", {
        username: input.username,
        password: input.password
      })
      if(data){
        setAccessToken(data.data.token)
        dispatch(setAuth(true))
        navigate("/")
      }
    } catch (error) {
      console.log("error:", error);
    }
  }

 
    return (  
      <form className="form" >
        <h3>Login</h3>
        <div className="mb-3">
          <AccountBoxIcon className="icon" />
          <label>Username</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter username"
            onChange={(e)=> setInput({...input, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <LockIcon className="icon"/>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=> setInput({...input, password: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <Link onClick={handleLogin}>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" >
              Login
            </button>
          </div>
        </Link>
        
      </form>
    
      
    )
  }


export default  Login