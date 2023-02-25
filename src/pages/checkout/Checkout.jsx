import "./checkout.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from "react-router-dom"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Checkout = () => {

 

  return (
    <div className="checkout">
      <Sidebar/>
      <div className="checkoutContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            
            <div className="addpayment">
                <Link to="/payment">
                    <AddCircleOutlineIcon className="icon-icon-title"/>
                </Link>
                <h1 className="title">Payment method</h1>
            </div>
            <div className="item">
              <img
                src="https://proxy2.webshare.io/cards/48/visa.svg"
                alt=""
                className="itemImg"
              />
            </div>
          </div>
          <div className="left">
            
            <div className="addpayment">
            <Link to="/payment">
                    <AddCircleOutlineIcon className="icon-icon-title"/>
                </Link>
                <h1 className="title">Payment method</h1>
            </div>
            <div className="item">
              <img
                src="https://vinasupport.com/uploads/2020/08/Kinh-Nghiem-Su-Dung-Paypal.png"
                alt=""
                className="itemImg"
              /> 
            </div>
          </div>
          <div className="left">
            
            <div className="addpayment">
            <Link to="/payment">
                    <AddCircleOutlineIcon className="icon-icon-title"/>
                </Link>
                <h1 className="title">Payment method</h1>
            </div>
            <div className="item">
              <img
                src="https://proxy2.webshare.io/cards/48/amex.svg"
                alt=""
                className="itemImg"
              />
            </div>
          </div>
          <div className="left">
            <div className="addpayment">
            <Link to="/payment">
                    <AddCircleOutlineIcon className="icon-icon-title"/>
                </Link>
                <h1 className="title">Payment method</h1>
            </div>
            
            <div className="item">
              <img
                src="https://proxy2.webshare.io/cards/48/discover.svg"
                alt=""
                className="itemImg"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Checkout