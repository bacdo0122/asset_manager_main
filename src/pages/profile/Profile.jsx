import "./Profile.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ProfileTable from '../../components/profile/profileTable'
const Profile = ({socket}) => {
  return (
    <div className="pending">
      <Sidebar/>
      <div className="pendingContainer">
        <Navbar/>
        <ProfileTable socket={socket}/>
      </div>
    </div>
  )
}

export default Profile