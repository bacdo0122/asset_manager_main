import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEmployee } from "../../reducer/user";

const Datatable = ({socket}) => {
  // const [data, setData] = useState([]);
  const data = useSelector(state => state.user.users)
  const user = useSelector((state)=>state.auth.user)
  const dispatch = useDispatch()
  const handleFetchData = async () => {
   
    try {
      const res = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + 'user');
      dispatch(setEmployee(res.data))
    } catch (error) {
      console.log("error:", error);
    }
  }
  useEffect(()=>{
    handleFetchData();
  },[])
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(process.env.REACT_APP_API_BASE_USER_URL + `user/delete/${id}`);
      socket.emit("reset_user")
    } catch (error) {
      console.log("error:", error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={user?.role === 'admin' ? `/users/${params.row.username}` : '#'} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
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
        Add New User
        <Link  to={user?.role === 'admin' ? `/users/new` : '#'} className="link">
          Add New
        </Link>
      </div>
     {data &&  <DataGrid
        className="datagrid"
        rows={ data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId= {(row) => row._id}
      />}
    </div>
  );
};

export default Datatable;
