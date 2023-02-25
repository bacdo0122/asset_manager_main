import "./Profile.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ProfileTable from '../../components/profile/profileTable'
const Profile = () => {
  return (
    <div className="pending">
      <Sidebar/>
      <div className="pendingContainer">
        <Navbar/>
        <ProfileTable />
      </div>
    </div>
  )
}

export default Profile