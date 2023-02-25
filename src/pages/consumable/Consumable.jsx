import "./consumable.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Consumabletable from "../../components/consumabletable/Consumabletable"

const Cosnumable = ({socket}) => {
  return (
    <div className="consumable">
      <Sidebar/>
      <div className="consumableContainer">
        <Navbar/>
        < Consumabletable socket={socket}/>
      </div>
    </div>
  )
}

export default Cosnumable