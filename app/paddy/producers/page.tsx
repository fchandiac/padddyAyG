'use client'
import { Box, Grid } from "@mui/material";
import React from "react";
import ProducerForm from "./ui/ProducerForm";
import AppDataGrid from "@/components/appDataGrid/AppDataGrid";
import { GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const producersList = [
  {
    id: 1,
    name: "Juan Perez",
    businessName: "Juan Perez",
    rut: "12345678-9",
    address: "Calle Falsa 123",
    phone: "+56912345678",
    email: "mail@mail.com",
  },
  {
    id: 2,
    name: "Pedro Perez",
    businessName: "Pedro Perez",
    rut: "12345678-0",
    address: "Calle Falsa 123",
    phone: "+56912345678",
    email: "mail",
  },
];

export default function page() {
  const columns = [
    { field: "id", headerName: "Id", flex: .3 },
    { field: "name", headerName: "Nombre", flex: 1, },
    { field: "businessName", headerName: "Nombre Empresa", flex: 1 },
    { field: "rut", headerName: "Rut", flex: 1 },
    { field: "address", headerName: "Dirección", flex: 1 },
    { field: "phone", headerName: "Teléfono", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "actions",
      headerName: "",
      headerClassName: "data-grid-last-column-header",
      type: "actions",
      flex: 0.5,
      getActions: (params:any) => [
        <GridActionsCellItem
          label="delete"
          icon={<DeleteIcon />}
          onClick={async () => {
           
          }}
        />,

        <GridActionsCellItem
          label="edit"
          icon={<EditIcon />}
          onClick={async () => {
       
          }}
        />,
      ],
    },
  
  ];
  return (
    <>
      <Box sx={{ mt: 2 }}>
        <AppDataGrid rows={producersList} columns={columns} />
      </Box>
    </>
  );
}
