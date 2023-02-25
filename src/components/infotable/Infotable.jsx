import "./infotable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const List = ({name}) => {
  const [rows, setRows] = useState([])
  const handleFetchData = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_BASE_USER_URL + `asset/getMany/${name}`)
      setRows(res.data)
    } catch (error) {
      console.log("err:", error);
    }
  }
  useEffect(()=>{
    if(name) {
      handleFetchData()
    }
  },[name])
  // const rows = [
  //   {
  //       id: 2235235,
  //       model: "Macbook Pro M1",
  //       img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
  //       category: "Laptops",
  //       local: "Anya",
  //       price: 2000,
  //       status: "active",
  //       isLink:"/users/test",
  //     },
  //   {
  //       id: 2235236,
  //       model: "Macbook Pro M1",
  //       img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
  //       category: "Laptops",
  //       local: "Jack",
  //       price: 2000,
  //       status: "active",
  //       isLink:false,
  //   },
  //   {
  //       id: 2235237,
  //       model: "Macbook Pro M1",
  //       img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
  //       category: "Laptops",
  //       local: "Katy",
  //       price: 2000,
  //       status: "active",
  //       isLink: false,
  //     },
  //     {
  //       id: 2235238,
  //       model: "Macbook Pro M1",
  //       img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
  //       category: "Laptops",
  //       local: "",
  //       price: 2000,
  //       status: "unused",
  //       isLink:false,
  //     },
  //     {
  //       id: 2235239,
  //       model: "Macbook Pro M1",
  //       img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
  //       category: "Laptops",
  //       local: "",
  //       price: 2000,
  //       status: "unused",
  //       isLink: false,
  //     },
  // ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Asset ID</TableCell>
            <TableCell className="tableCell">Model</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Local</TableCell>
            <TableCell className="tableCell">Purchase Cost</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 && rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell"><Link to={`/assets/${row._id}`}>{ row._id}</Link></TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={`http://localhost:5000/public/images/${row.img}`}  alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{ row.category}</TableCell>
              <TableCell className="tableCell">
                <Link to={`/users/${row.local}`}>{ row.local}</Link>
              </TableCell>
              <TableCell className="tableCell">{ row.purchaseCost}</TableCell>
              <TableCell className="tableCell">
                <span className={ `status ${row.status}`}>{ row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
