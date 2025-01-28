import { Box, Grid } from "@mui/material";
import React from "react";
import ProducerForm from "./ui/ProducerForm";
import AppDataGrid from "@/components/appDataGrid/AppDataGrid";

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
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Nombre", width: 200 },
    { field: "businessName", headerName: "Nombre Empresa", width: 200 },
    { field: "rut", headerName: "Rut", width: 200 },
    { field: "address", headerName: "Dirección", width: 200 },
    { field: "phone", headerName: "Teléfono", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
  ];
  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Grid container>
          <Grid item xs={3}>
            <ProducerForm />
          </Grid>
          <Grid item xs={9}>
            <AppDataGrid rows={producersList} columns={columns} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
