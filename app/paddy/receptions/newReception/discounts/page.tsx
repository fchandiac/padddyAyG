"use client";
import AppDataGrid from "@/components/appDataGrid/AppDataGrid";
import { Autocomplete, Grid, TextField } from "@mui/material";
import React, {useState} from "react";


const discountTypes = [
  {
    id: 1,
    name: "Humedad",
    range: [
      { id: 1, start: 0, end: 12, percent: 0 },
      { id: 2, start: 13, end: 14, percent: 1 },
      { id: 3, start: 15, end: 16, percent: 2 },
      { id: 4, start: 17, end: 18, percent: 3 },
    ],
  },
  {
    id: 2,
    name: "Verde",
    range: [
      { id: 1, start: 0, end: 12, percent: 0 },
      { id: 2, start: 13, end: 14, percent: 1 },
      { id: 3, start: 15, end: 16, percent: 2 },
      { id: 4, start: 17, end: 18, percent: 3 },
    ],
  },
  {
    id: 3,
    name: "Impureza",
    range: [
      { id: 1, start: 0, end: 12, percent: 0 },
      { id: 2, start: 13, end: 14, percent: 1 },
      { id: 3, start: 15, end: 16, percent: 2 },
      { id: 4, start: 17, end: 18, percent: 3 },
    ],
  },
  {
    id: 4,
    name: "Hualcacho",
    range: [
      { id: 1, start: 0, end: 12, percent: 0 },
      { id: 2, start: 13, end: 14, percent: 1 },
      { id: 3, start: 15, end: 16, percent: 2 },
      { id: 4, start: 17, end: 18, percent: 3 },
    ],
  },
  {
    id: 5,
    name: "Grano Quebrado",
    range: [
      { id: 1, start: 0, end: 12, percent: 0.5 },
      { id: 2, start: 13, end: 14, percent: 1 },
      { id: 3, start: 15, end: 16, percent: 2 },
      { id: 4, start: 17, end: 18, percent: 3 },
    ],
  },
];


export default function page() {
  const [ selectedType, setSelectedType ] = useState(discountTypes[0]);
  const [ rangesList, setRangesList ] = useState(selectedType.range);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "start", headerName: "Inicio", width: 200 },
    { field: "end", headerName: "Fin", width: 300 },
    { field: "percent", headerName: "Porcentaje", width: 300 },
  ]




  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Autocomplete
            options={discountTypes}
            value={selectedType}
            size="small"
            onChange={(event, newValue: any) => {
              setSelectedType(newValue);
            }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} label="Tipo de Descuento" />
            )}
          />
        </Grid>
        <Grid item xs={9}>
          <AppDataGrid rows={rangesList} columns={columns} />
       
        </Grid>
      </Grid>
    </>
  );
}
