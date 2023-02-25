export const userColumns = [
  {   field: 'id' , 
  headerName: 'ST', 
  filterable: false,
  renderCell:(index) => index.api.getRowIndex(index.row._id) + 1
  , width: 70 },
  {
    field: "employeeID",
    headerName: "ID",
    width: 90,
  },
  {
    field: "user",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={`https://asset-manager.onrender.com/public/images/${params.row.img}`} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "department",
    headerName: "Department",
    width: 200,
    renderCell: (params) => {
      return (
        <div className={`cellWithDepartment ${params.row.department}`}>
          {params.row.department}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    employeeid: "IT3149",
    username: "Lê Hoài An",
    img: "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1656473044.0987_Y3UVY8_n.jpg",
    department: "IT software",
    email: "anan98@gmail.com",
    age: 23,
  },
  {
    id: 2,
    employeeid: "SL5423",
    username: "Nguyễn Văn Đức",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    department: "Sales department",
    email: "ducanh33@gmail.com",
    age: 42,
  },
  {
    id: 3,
    employeeid: "AC4512",
    username: "Lê Mai Chi",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    department: "Accounting department",
    email: "chile88@gmail.com",
    age: 45,
  },
  {
    id: 4,
    employeeid: "IT3849",
    username: "Cố Trường Ca",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    department: "IT software",
    email: "coca90@gmail.com",
    age: 26,
  },
  {
    id: 5,
    employeeid: "IT4149",
    username: "Phạm Duy Anh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    department: "IT software",
    email: "anhle99@gmail.com",
    age: 22,
  },
  {
    id: 6,
    employeeid: "IT5149",
    username: "Trịnh Văn Thắng",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    department: "IT software",
    email: "thang1233@gmail.com",
    age: 25,
  },
  {
    id: 7,
    employeeid: "IT3356",
    username: "Đỗ Nguyên Long",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    department: "IT software",
    email: "long323@gmail.com",
    age: 34,
  },
  {
    id: 8,
    employeeid: "IT4549",
    username: "Nông Thị Linh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    department: "IT software",
    email: "linh4276@gmail.com",
    age: 36,
  },
  {
    id: 9,
    employeeid: "IT4124",
    username: "Trịnh Văn Mạnh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    department: "IT- software",
    email: "manhca98@gmail.com",
    age: 35,
  },
  {
    id: 10,
    employeeid: "IT4649",
    username: "Hoàng Lê Anh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    department: "IT software",
    email: "anh125@gmail.com",
    age: 27,
  },
];
