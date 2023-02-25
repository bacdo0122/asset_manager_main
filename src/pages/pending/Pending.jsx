import "./pending.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Pendingtable from "../../components/pendingtable/Pendingtable"

const Pending = ({socket}) => {
  return (
    <div className="pending">
      <Sidebar/>
      <div className="pendingContainer">
        <Navbar/>
        <Pendingtable socket={socket}/>
      </div>
    </div>
  )
}

export default Pending