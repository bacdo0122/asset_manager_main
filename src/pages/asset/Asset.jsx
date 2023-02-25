import "./asset.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Assettable from "../../components/assettable/Assettable"

const Asset = ({socket}) => {
  return (
    <div className="asset">
      <Sidebar/>
      <div className="assetContainer">
        <Navbar/>
        <Assettable socket={socket}/>
      </div>
    </div>
  )
}

export default Asset