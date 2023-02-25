export const assetColumns = [
  {   field: 'id' , 
  headerName: 'ST', 
  filterable: false,
  renderCell:(index) => index.api.getRowIndex(index.row._id) + 1
  , width: 70 },
    {
      field: "_id",
      headerName: "Asset Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={`http://localhost:5000/public/images/${params.row.img}`} alt="avatar" />
            {params.row._id}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
    },
  
    {
      field: "purchaseCost",
      headerName: "Purchase Cost",
      width: 150,
    },
    {
      field: "availability",
      headerName: "Availability",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const assetRows = [
    {
      id: 1,
      assetname: "Macbok Pro M1",
      img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
      status: "active",
      category: "Laptops",
      purchasecost: 2000,
      availability: 2,
    },
    {
      id: 2,
      assetname: "Macbok Air",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/220715121407-macbook-air-m2-review-1.jpg?c=original",
      status: "active",
      category: "Laptops",
      purchasecost: 2000,
      availability: 3,
    },
    {
      id: 3,
      assetname: "Iphone 13",
      img: "https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-12.png",
      status: "active",
      category: "Phones",
      purchasecost: 1000,
      availability: 5,
    },
    {
      id: 4,
      assetname: "Macbok Pro M2",
      img: "https://photos5.appleinsider.com/gallery/51113-100955-45240-88149-The-new-MacBook-Pro-16-inch-xl-xl.jpg",
      status: "active",
      category: "Laptops",
      purchasecost: 2000,
      availability: 4,
    },
    {
      id: 5,
      assetname: "Macbok Pro",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp16touch-silver-gallery-2019?wid=1250&hei=1200&fmt=jpeg&qlt=95&.v=1582233083340",
      status: "unavailable",
      category: "Laptops",
      purchasecost: 2000,
      availability: 0,
    },
    {
      id: 6,
      assetname: "Macbok Air",
      img: "https://macmall.vn/uploads/pro-m1-13inch-2020-gray_1605757126.png",
      status: "active",
      category: "Laptops",
      purchasecost: 2000,
      availability: 10,
    },
    {
      id: 7,
      assetname: "Macbok M1",
      img: "https://vtv1.mediacdn.vn/thumb_w/1000/2021/10/19/photo-1-16345827475301425991351-1634599970594165475782.jpg",
      status: "active",
      category: "Laptops",
      purchasecost: 2000,
      availability: 10,
    },
    {
      id: 8,
      assetname: "Ipad",
      img: "https://cdn.tgdd.vn/Products/Images/522/269327/ipad-pro-m1-11-inch-wifi-1tb-2021-bac-thumb-600x600.jpeg",
      status: "active",
      category: "Laptops",
      purchasecost: 2000,
      availability: 6,
    },
    {
      id: 9,
      assetname: "Iphone 11 PRO MAX",
      img: "https://bizweb.dktcdn.net/100/463/685/products/untitled-1c-1a6899b2-aeec-41c7-bde4-d89d8ed437c4.png?v=1675215882860",
      status: "active",
      category: "Laptops",
      purchasecost: 2000,
      availability: 11,
    },
    {
      id: 10,
      assetname: "Macbok Pro M1",
      img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
      status: "active",
      category: "Laptops",
      purchasecost: 2000,
      availability: 5,
    },
  ];
  
  export const pendingColumns = [
    {   field: 'id' , 
    headerName: 'ST', 
    filterable: false,
    renderCell:(index) => index.api.getRowIndex(index.row._id) + 1
    , width: 70 },
    {
      field: "assetname",
      headerName: "Asset Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={`http://localhost:5000/public/images/${params.row.assetID.img}`} alt="avatar" />
            {params.row.assetID.name}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 230,
      valueGetter: (params) =>{
        return params.row.assetID.category
       }
    },
  
    {
      field: "employee",
      headerName: "Employee",
      width: 200,
      valueGetter: (params) =>{
        return params.row.employeeID.username
       }
    },
    
    {
      field: "department",
      headerName: "Department",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.employeeID.department}`}>
            {params.row.employeeID.department}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const pendingRows = [
    {
      id: '2235235',
      assetname: "Macbok Pro M1",
      img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
      department: "IT software",
      category: "Laptops",
      employee: "Lê Hoài An",
    },
    {
      id: '214354',
      assetname: "Macbok Air",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/220715121407-macbook-air-m2-review-1.jpg?c=original",
      department: "IT software",
      category: "Laptops",
      employee: "Nguyễn Văn Đức",
    },
    {
      id: '142526',
      assetname: "Iphone 13",
      img: "https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-12.png",
      department: "IT software",
      category: "Phones",
      employee: "Lê Mai Chi",
    },
    {
      id: '542401',
      assetname: "Macbok Pro M1",
      img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
      department: "IT software",
      category: "Laptops",
      employee: "Phạm Duy Anh",
    },
    {
      id: '354156',
      assetname: "Macbok Pro M1",
      img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
      department: "IT software",
      category: "Laptops",
      employee: "Trịnh Văn Thắng",
    },
    {
      id: '471025',
      assetname: "Macbok Pro M1",
      img: "https://vietbis.vn/Image/Picture/Laptop/vietbis-macbook-pro-m1-la-gi.jpg",
      department: "IT software",
      category: "Laptops",
      employee: "Đỗ Nguyên Long",
    },
   
  ];


  export const consumableColumns = [
    { field: "id", headerName: "Asset ID", width: 220,
      valueGetter: (params) =>{
        return params.row.id
      }
  },
    {
      field: "assetname",
      headerName: "Asset Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
          <img className="cellImg" src={`http://localhost:5000/public/images/${params.row.img}`} alt="avatar" />
          {params.row.name}
        </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 230,
      valueGetter: (params) =>{
        return params.row.category
       }
    },
  
    {
      field: "purchasecost",
      headerName: "Purchase cost",
      width: 200,
      valueGetter: (params) =>{
        return params.row.purchaseCost
       }
    },
    
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const consumableRows = [
    {
      id: '5412368',
      assetname: "License Key Adobe",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
      status: "expired",
      category: "Software",
      purchasecost: 500,
    },
    
   
  ];
  

  export const assetProfileColumns = [
    {   field: 'id' , 
    headerName: 'ST', 
    filterable: false,
    renderCell:(index) => index.api.getRowIndex(index.row._id) + 1
    , width: 20 },
    {
      field: "_id",
      headerName: "asset ID",
      width: 150,
      valueGetter: (params) =>{
        return params.row._id
       }
    },
      {
        field: "name",
        headerName: "Asset Name",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src={`http://localhost:5000/public/images/${params.row.img}`} alt="avatar" />
              {params.row.name}
            </div>
          );
        },
      },
      {
        field: "category",
        headerName: "Category",
        width: 150,
      },
    
      {
        field: "purchaseCost",
        headerName: "Purchase Cost",
        width: 150,
      }
     
    ];