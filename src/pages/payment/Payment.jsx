import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import './payment.scss'

const Payment = () =>{

    return(
        <div className="payment">
      <Sidebar/>
      <div className="paymentContainer">
        <Navbar/>
        <h1>Payment</h1>
      </div>
    </div>
    )
}

export default Payment