import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import { useTheme } from "@mui/material";

import { randomId } from '@mui/x-data-grid-generator';

import { tokens } from "../../theme";

import Header from "../../components/Header";

import Users from "../../data/muse_users";
import { mockDataContacts } from "../../data/mockData";

import { useState, useEffect } from "react";


function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(users);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [users, setUsers] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  useEffect(()=>{
    Users().then(data => setUsers(data));

  }, []);

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };


  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", editable: true },
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
      type: "datetime",
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
      type: "datetime",
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
      headerName: "",      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
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
        <DataGridPro
          rows={users}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          components={{
            Toolbar: EditToolbar,
          }}
          componentsProps={{
            toolbar: { setRows, setRowModesModel },
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Box>
  );
};
