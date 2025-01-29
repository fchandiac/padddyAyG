import AppDataGrid from "@/components/appDataGrid/AppDataGrid";
import { Box, Grid, TextField } from "@mui/material";
import React from "react";

const receptionsList = [
  {
    id: 1,
    guide: "123456",
    producerRut: "12345678-9",
    producerName: "Juan Perez",
    producerId: "1",
    documentDate: new Date(),
    typeRiceId: "rice-type-1",
    weihgt: 100,
    tare: 10,
    netWeight: 90,
    notes: "Notas",
    humidityPercent: 1,
    greenPercent: 1,
    impurityPercent: 1,
    hualcachoPercent: 1,
    brokenGrainPercent: 1,
    plateNumber: "ABC123",
    discountPercent: 1,
    discount: 1,
    totalWeight: 100,
  },
  {
    id: 2,
    guide: "123457",
    producer: "Pedro Perez",
    Rut: "12345678-0",
    producerId: "2",
    documentDate: new Date(),
    typeRiceId: "rice-type-2",
    weihgt: 100,
    tare: 10,
    netWeight: 90,
    notes: "Notas",
    humidityPercent: 1,
    greenPercent: 1,
    impurityPercent: 1,
    hualcachoPercent: 1,
    brokenGrainPercent: 1,
    plateNumber: "ABC123",
    discountPercent: 1,
    discount: 1,
    totalWeight: 100,
  },
];

export default function page() {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "guide", headerName: "Guía", flex: 0.5 },
    { field: "producerRut", headerName: "Rut Productor", flex: 1 },
    { field: "producerName", headerName: "Nombre Productor", flex: 1 },
    {
      field: "documentDate",
      headerName: "Fecha Documento",
      flex: 1,
      type: "date",
    },
    { field: "typeRiceId", headerName: "Tipo Arroz", flex: 1 },
    { field: "weihgt", headerName: "Peso", flex: 1 },
    { field: "tare", headerName: "Tara", flex: 1 },
    { field: "netWeight", headerName: "Peso Neto", flex: 1 },
    { field: "notes", headerName: "Notas", flex: 1 },
    { field: "humidityPercent", headerName: "Humedad (%)", flex: 1 },
    { field: "greenPercent", headerName: "Verde (%)", flex: 1 },
    { field: "impurityPercent", headerName: "Impureza (%)", flex: 1 },
    { field: "hualcachoPercent", headerName: "Hualcacho (%)", flex: 1 },
    {
      field: "brokenGrainPercent",
      headerName: "Grano Quebrado (%)",
      flex: 1,
    },
    { field: "plateNumber", headerName: "Placa patente", flex: 1 },
    { field: "discountPercent", headerName: "Descuento (%)", flex: 1 },
    { field: "discount", headerName: "Descuento", flex: 1 },
    { field: "totalWeight", headerName: "Peso Total", flex: 1 },
  ];

  return (
    <>
      <Box sx={{ m: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  label="Fecha inicial"
                  variant="outlined"
                  type="date"
                  fullWidth
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Fecha final"
                  variant="outlined"
                  type="date"
                  fullWidth
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <AppDataGrid rows={receptionsList} columns={columns} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
