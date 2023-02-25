import "./assettable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { assetColumns, assetRows } from "../../dataasset";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAsset } from "../../reducer/asset";

const Assettable = ({socket}) => {
  const data = useSelector(state => state.asset.assets)
  const user = useSelector((state)=>state.auth.user)
  const dispatch = useDispatch()
  const handleFetchData = async () => {
   
    try {
      const res = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + 'asset');
      dispatch(setAsset(res.data))
    } catch (error) {
      console.log("error:", error);
    }
  }
   useEffect(()=>{
    handleFetchData();
  },[])


  const handleBorrow =  async (name, id) => {
    try {
      const getUnusedAsset = await axios.post(process.env.REACT_APP_API_BASE_USER_URL + `asset/borrow/${name}`,{
        username: user.username
      });
      await axios.post(process.env.REACT_APP_API_BASE_USER_URL + `pending/add`,{
        assetID: getUnusedAsset.data._id,
        employeeID:user._id
      })
      socket.emit("reset_asset")
      socket.emit("reset_pending")
      socket.emit("borrow_asset", {
        userID: user._id,
        assetName: name,
        title: "borrow_asset"
      })
    } catch (error) {
      console.log("error:", error);
    }
  };

  const actionColumn= [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link  to={user?.role === 'admin' ? `/assets/${params.row.id}` : '#'} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            { params.row.availability > 0 ? <div
              className="deleteButton"
              onClick={()=>handleBorrow(params.row._id, params.row.id)}
            >
              Borrow
            </div> : <div
              className="deleteButton"
            
            >
              Borrow
            </div>}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Asset
        <Link to={user?.role === 'admin' ? `/assets/new` : '#'} className="link">
          Add New
        </Link>
      </div>
      {data && <DataGrid
        className="datagrid"
        rows={ data}
        columns={assetColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row)=>row._id}

      />}
    </div>
  );
};

export default Assettable;
