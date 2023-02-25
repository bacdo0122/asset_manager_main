import Navbar from "../../components/navbar/Navbar";
import NotificationTable from "../../components/notification/notification";
import Sidebar from "../../components/sidebar/Sidebar";
import './Notification.scss'
const Notification = () => {
    return (
        <div className="notification">
        <Sidebar/>
        <div className="notificationContainer">
          <Navbar/>
          <NotificationTable />
        </div>
      </div>
    )
} 

export default Notification;