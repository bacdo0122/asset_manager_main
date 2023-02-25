import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { assetProfileColumns } from '../../dataasset'
import './profileTable.scss'
const ProfileTable =  ({socket}) => {
    const user = useSelector(state => state.auth.user)
    const [data, setData] = useState([]);

    const handleFetchData = async () => {
      try {
        const getAsset = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + `asset/getAssetByUser/${user.username}`);
        console.log("getAsset:", getAsset);
        setData(getAsset.data)
      } catch (error) {
        console.log("error:", error);
      }
    }
     useEffect(()=>{
      handleFetchData();
    },[])
    const handleClickRePay = async (id) => {
        try {
             await axios.post(process.env.REACT_APP_API_BASE_USER_URL + `asset/repay/${id}`);
             socket.emit("reset_asset")
             handleFetchData();
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
                 <div
                  className="repayButton"
                  onClick={()=>handleClickRePay(params.row._id)}
                >
                  Repay
                </div>
              </div>
            );
          },
        },
      ];
    return(
        <div className='profile-table'>
            <div className='profile-wrap'>
                <div className="background"></div>
                <div className="profile-inner">
                    <div className="row-1">
                        <div className="profile-img-name">
                            <img src={user && `https://asset-manager.onrender.com/public/images/${user.img}`} alt={user && user.username} />
                            <div className="profile-name">
                                <span className="name">{user && user.name}</span>
                                <span className="department">{user && user.department}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="profile_info">
                            <div className='profile-info-header'>Profile Infomation</div>
                            <span className="info-inner">Address: <p>{user && user.address}</p></span>
                            <span className="info-inner">Date Of Birth: <p>{user && user.dateOfBirth.split("T")[0]}</p></span>
                            <span className="info-inner">Email: <p>{user && user.email}</p></span>
                            <span className="info-inner">employeeID: <p>{user && user.employeeID}</p></span>
                            <span className="info-inner">password: <p>{user && user.password}</p></span>
                            <span className="info-inner">Phone: <p>{user && user.phone}</p></span>
                            <span className="info-inner">Role: <p>{user && user.role}</p></span>
                            <span className="info-inner">username: <p>{user && user.username}</p></span>

                        </div>
                        <div className="list-assets">
                            <h3>List Asset</h3>
                            <DataGrid
                                className="datagrid"
                                rows={data.length> 0 && data}
                                columns={assetProfileColumns.concat(actionColumn)}
                                pageSize={9}
                                rowsPerPageOptions={[9]}
                                checkboxSelection
                                getRowId={(row)=>row._id}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTable
