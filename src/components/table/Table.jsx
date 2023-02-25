import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const List = () => {
  const rows = [
    {
      id: 1143155,
      model: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      category: "Laptops",
      date: "1 March",
      depreciation: '10%',
      price: 1100,
      status: "Active",
      isLink: false,
    },
    {
      id: 2235235,
      model: "Macbook Pro M1",
      img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
      category: "Laptops",
      date: "1 March",
      depreciation: '5%',
      price: 1200,
      status: "Active",
      isLink: "/assets/test",
    },
    {
      id: 2342353,
      model: "Samsung S22",
      img: "https://www.digitaltrends.com/wp-content/uploads/2022/05/galaxy-s22-angled-shot.jpg?p=1",
      category: "Phones",
      date: "1 March",
      depreciation: '15%',
      price: 750,
      status: "pending",
      isLink: false,
    },
    {
      id: 2357741,
      model: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      category: "Laptops",
      date: "1 March",
      depreciation: '20%',
      price: 1000,
      status: "Active",
      isLink: false,
    },
    {
      id: 2342355,
      model: "Photoshop CS6",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
      category: "Software",
      date: "1 March",
      depreciation: '40%',
      price: 100,
      status: "pending",
      isLink: false,
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Asset ID</TableCell>
            <TableCell className="tableCell">model</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Date</TableCell>
        
            <TableCell className="tableCell">Purchase Cost</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                <Link to={row.isLink}>{row.id}</Link>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.model}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
