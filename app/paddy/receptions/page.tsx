import AppDataGrid from "@/components/appDataGrid/AppDataGrid";
import { Grid, TextField } from "@mui/material";
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
    { field: "id", headerName: "ID", width: 100 },
    { field: "guide", headerName: "Guía", width: 200 },
    { field: "producerRut", headerName: "Rut Productor", width: 200 },
    { field: "producerName", headerName: "Nombre Productor", width: 200 },
    { field: "documentDate", headerName: "Fecha Documento", width: 200 },
    { field: "typeRiceId", headerName: "Tipo Arroz", width: 200 },
    { field: "weihgt", headerName: "Peso", width: 200 },
    { field: "tare", headerName: "Tara", width: 200 },
    { field: "netWeight", headerName: "Peso Neto", width: 200 },
    { field: "notes", headerName: "Notas", width: 200 },
    { field: "humidityPercent", headerName: "Humedad (%)", width: 200 },
    { field: "greenPercent", headerName: "Verde (%)", width: 200 },
    { field: "impurityPercent", headerName: "Impureza (%)", width: 200 },
    { field: "hualcachoPercent", headerName: "Hualcacho (%)", width: 200 },
    {
      field: "brokenGrainPercent",
      headerName: "Grano Quebrado (%)",
      width: 200,
    },
    { field: "plateNumber", headerName: "Placa", width: 200 },
    { field: "discountPercent", headerName: "Descuento (%)", width: 200 },
    { field: "discount", headerName: "Descuento", width: 200 },
    { field: "totalWeight", headerName: "Peso Total", width: 200 },
  ];

  return (
    <>
      <Grid container spacing={1} mt={2} ml={1} mr={1}>
        <Grid item xs={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
        <Grid item xs={9}>
          <AppDataGrid rows={receptionsList} columns={columns} />
        </Grid>
      </Grid>
    </>
  );
}
