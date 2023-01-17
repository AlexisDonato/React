import { Box, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import DeleteIcon from '@mui/icons-material/DeleteOutlineRounded';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";

import Header from "../../components/Header";

import Users from "../../data/muse_users";


const UsersIndex = () => {
  const [users, setUsers] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  useEffect(()=>{
    Users().then(data => setUsers(data));

  }, []);


  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "First Name", editable: true },
    {
      field: "lastName",
      headerName: "Last Name",
      editable: true
    },
    {
      field: "email",
      headerName: "Email",
      editable: true
      // headerAlign: "left",
      // align: "left",
    },
    {
      field: "role",
      headerName: "Roles",
      editable: true
    },
    {
      field: "phone",
      headerName: "Phone Number",
      editable: true
    },
    {
      field: "birthdate",
      headerName: "Birthdate",
      editable: true
    },
    {
      field: "address",
      headerName: "Address",
      editable: true
    },
    {
      field: "carts",
      headerName: "Carts",
      editable: true
    },
    {
      field: "registerDate",
      headerName: "Register Date",
      editable: true
    },
    {
      field: "agreeTerms",
      headerName: "Agree Terms",
      editable: true
    },
    {
      field: "isVerified",
      headerName: "Is Verified",
      editable: true
    },
    {
      field: "pro",
      headerName: "Pro",
      editable: true
    },
    {
      field: "vat",
      headerName: "VAT",
      editable: true
    },
    {
      field: "proCompanyName",
      headerName: "Pro Company Name",
      editable: true
    },
    {
      field: "proJobPosiiton",
      headerName: "Pro Job Posiiton",
      editable: true
    },
    {
      field: "proDuns",
      headerName: "Pro DUNS",
      editable: true
    },
    {
      field: "actions",
      headerName: "",
    },
  ];

    return (
      <Box m="20px">
        <Header title="Users Index" subtitle="List of all the users" />
        <Box height="75vh"
          m="40px 0 0 0"
          sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={users}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />

          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit">
            <CreateIcon />
          </IconButton>
          <IconButton aria-label="new">
            <AddCircleOutlineIcon />
          </IconButton>
      </Box>
    </Box>



    );
  };
  
  export default UsersIndex;