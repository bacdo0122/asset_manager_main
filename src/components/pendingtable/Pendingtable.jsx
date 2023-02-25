import "./pendingtable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { pendingColumns, pendingRows } from "../../dataasset";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPending } from "../../reducer/pending";

const Pendingtable = ({socket}) => {
  const data = useSelector(state => state.pending.pendings)
  const user = useSelector((state)=>state.auth.user)
  const dispatch = useDispatch()
  const handleFetchData = async () => {
   
    try {
      const res = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + 'pending');
      dispatch(setPending(res.data))
    } catch (error) {
      console.log("error:", error);
    }
  }
   useEffect(()=>{
    handleFetchData();
  },[])


  const handleDelete = async (id, assetID) => {
    try {
       await axios.delete(process.env.REACT_APP_API_BASE_USER_URL + `pending/delete/${id}/${assetID}`);
       socket.emit("reset_pending")
       socket.emit("reset_asset")
    } catch (error) {
      console.log("error:", error);
    }
  };
  // const initialText = 'Accept';
  // const [buttonText, setButtonText] = useState(initialText);

  const handleClick = async (body, id, username) => {
   
    try {
      await axios.post(process.env.REACT_APP_API_BASE_USER_URL + `pending/accept/${id}/${username}`,body);
      handleFetchData();
      socket.emit("reset_pending")
      socket.emit("reset_consumable")
      socket.emit("allow_borrow_asset", {
        userID: body.employeeID._id,
        assetName: body.assetID.name,
        title: "allow_borrow_asset"
      })
   } catch (error) {
     console.log("error:", error);
   }
  }

  const actionColumn= [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={user?.role === "admin" ? `/assets/${params.row.assetID._id}` : `#`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <button
                 onClick={user?.role === "admin" ? () => handleClick(params.row, params.row._id, params.row.employeeID.username) : () => {}}
                className="acceptButton"
            >
                Accept
            </button>
            <div
              className="deleteButton"
              onClick={user?.role === "admin" ? () => handleDelete(params.row._id, params.row.assetID._id) : () => {}}
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
        List Pending
      </div>
     {data &&  <DataGrid
        className="datagrid"
        rows={data}
        columns={pendingColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row)=>row._id}
      />}
    </div>
  );
};

export default Pendingtable;
