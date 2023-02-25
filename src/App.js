import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Asset from "./pages/asset/Asset";
import Single from "./pages/single/Single";
import Info from "./pages/info/Info";
import New from "./pages/new/New";
import Pending from "./pages/pending/Pending";
import Consumable from "./pages/consumable/Consumable";
import Edituser from "./pages/edituser/Edituser";
import Editasset from "./pages/editasset/Editasset";
import Checkout from "./pages/checkout/Checkout";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import React,{ useContext, useEffect, useRef, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Payment from "./pages/payment/Payment";
import { useDispatch, useSelector } from "react-redux";
import { SWRConfig } from "swr";
import Layout from "./components/layout";
import NewAsset from "./pages/new/NewAsset";
import Profile from "./pages/profile/Profile";
import Notification from "./pages/notification/Notification";
import socketIOClient from "socket.io-client";
import axios from "axios";
import { setNotification } from "./reducer/notification";
import { getAccessToken } from "./helper/localStorage";
import { setEmployee } from "./reducer/user";
import { setAsset } from "./reducer/asset";
import { setPending } from "./reducer/pending";
import { setConsumable } from "./reducer/consumable";

const host = "https://asset-manager.onrender.com";
const socket = socketIOClient.connect(host)

function App() {
  const darkMode = useSelector((state) => state.darkMode.darkMode)
  const user = useSelector((state) => state.auth.user)
  const ditpatch = useDispatch()
  useEffect(() => {

    socket.on("borrow_asset", async ()=>{
      try {
       
        if(user.role === "admin") handleFetchNotification()
      } catch (error) {
          throw new Error("can't post socket")
      }
    })
    socket.on("reset_user", async (data)=>{
      ditpatch(setEmployee(data))
    })
    socket.on("reset_asset", async (data)=>{
      ditpatch(setAsset(data))
    })
    socket.on("reset_pending", async (data)=>{
      ditpatch(setPending(data))
    })
    socket.on("reset_consumable", async (data)=>{
      ditpatch(setConsumable(data))
    })
    socket.on("allow_borrow_asset", async ()=>{
      try {
        if(user.role === "employee"){
          handleFetchNotification()
        }
      } catch (error) {
          throw new Error("can't post socket")
      }
    })
    socket.on("expired_asset", async ()=>{
      try {
        if(user.role === "admin") handleFetchNotification()
      } catch (error) {
          throw new Error("can't post socket")
      }
    })
    handleFetchNotification()
    return () => socket.disconnect();
  }, []);

  const handleFetchNotification = async  () => {
    try {
      const data = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + 'notification',{
        headers: {
          Authorization: `Bearer ` + getAccessToken()
        }
      })
  
     ditpatch(setNotification(data.data))
    } catch (error) {
      throw new Error("can't get axios")
    }
  }
  

  return (
    <div className={darkMode ? "app dark" : "app"}>
       <SWRConfig value={{}}>
      <BrowserRouter> 
        <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile socket={socket}/>} />
            <Route path="users">
              <Route index element={<List socket={socket}/>} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New socket={socket} inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="users/edit/:id" element={<Edituser socket={socket}/>} />
            <Route path="assets">
              <Route index element={<Asset socket={socket}/>} />
              <Route path=":assetId" element={<Info socket={socket}/>} />
              <Route
                path="new"
                element={<NewAsset socket={socket} inputs={productInputs} title="Add New Asset" />}
              />
            </Route>
            <Route path="assets/edit/:id" element={<Editasset socket={socket}/>} />
            <Route path="pending" element={<Pending socket={socket}/>} />
            <Route path="consumable" element={<Consumable socket={socket}/>} />
            <Route path="consumable/checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />}  />
            <Route path="notification" element={<Notification />}  />
          </Route>
        </Routes>
      </Layout>
      </BrowserRouter>
      </SWRConfig>
    </div>
  );
}

export default App;
