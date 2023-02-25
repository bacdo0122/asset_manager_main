import "./consumabletable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { consumableColumns, consumableRows } from "../../dataasset";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setConsumable } from "../../reducer/consumable";

const Consumabletable = ({socket}) => {

  const data = useSelector(state => state.consumable.consumables)
  const user = useSelector((state)=>state.auth.user)
  const dispatch = useDispatch()
  const handleFetchData = async () => {
   
    try {
      const res = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + 'consumable');
      dispatch(setConsumable(res.data))
    } catch (error) {
      console.log("error:", error);
    }
  }
   useEffect(()=>{
    handleFetchData();
  },[])

  const handleDelete = async (id) => {
    try {
       await axios.delete(process.env.REACT_APP_API_BASE_USER_URL + `consumable/delete/${id}`);
       socket.emit("reset_consumable")
    } catch (error) {
      console.log("error:", error);
    }
  };


  // const initialText = 'Accept';
  // const [buttonText, setButtonText] = useState(initialText);

  // const handleClick = () => {
  //   setButtonText("Done");
  // }

  const actionColumn= [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={user?.role === "admin" ? "/consumable/checkout" : "#"} style={{ textDecoration: "none" }}>
              <div className="viewButton">Check out</div>
            </Link>
            
            <div
              className="deleteButton"
              onClick={user?.role === "admin" ? () => handleDelete(params.row._id) : ()=>{}}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        List Comsumable
      </div>
      {data && <DataGrid
        className="datagrid"
        rows={data}
        columns={consumableColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row)=>row._id}
      />}
    </div>
  );
};

export default Consumabletable;
