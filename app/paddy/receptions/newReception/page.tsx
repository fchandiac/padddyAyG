"use client";

import {
  Autocomplete,
  Box,
  Divider,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";

interface Reception {
  guide: string;
  producerRut: string;
  producerName: string;
  producerId: string;
  documentDate: Date;
  typeRiceId: string;
  weihgt: number;
  tare: number;
  netWeight: number;
  notes: string;
  humidity: number;
  green: number;
  impurity: number;
  hualcacho: number;
  brokenGrain: number;
  plateNumber: string;
}

const producers = [
  {
    rut: "12345678-9",
    name: "Juan Perez",
  },
  {
    rut: "12345678-0",
    name: "Pedro Perez",
  },
];

const ricesTypes = [
  {
    id: "rice-type-1",
    name: "Arroz Blanco",
  },
  {
    id: "rice-type-2",
    name: "Arroz Integral",
  },
];

const factors = {
  humidity: 1.5,
  green: 1.5,
  impurity: 1.5,
  hualcacho: 1.5,
  brokenGrain: 1.5,
};

export default function Page() {
  const [reception, setReception] = useState<Reception>({
    guide: "",
    producerRut: "",
    producerName: "",
    producerId: "",
    documentDate: new Date(),
    plateNumber: "",
    typeRiceId: "",
    weihgt: 0,
    tare: 0,
    netWeight: 0,
    notes: "",
    humidity: 0,
    green: 0,
    impurity: 0,
    hualcacho: 0,
    brokenGrain: 0,
  });

  useEffect(() => {
    setReception((prev) => ({
      ...prev,
      netWeight: prev.weihgt - prev.tare,
    }));
  }, [reception.weihgt, reception.tare]);

  const handleProducerChange = (event: any, value: any) => {
    if (value) {
      setReception((prev) => ({
        ...prev,
        producerRut: value.rut,
        producerName: value.name,
      }));
    }
  };

  const handleProductChange = (event: any, value: any) => {
    if (value) {
      setReception((prev) => ({
        ...prev,
        typeRiceId: value.id,
      }));
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <Typography variant="h5">Nueva Recepción</Typography>
          </Grid>
          {/* Autocomplete for Producer */}
          <Grid item lg={12}>
            <Autocomplete
              options={producers}
              size="small"
              getOptionLabel={(option) => option.rut + " - " + option.name}
              onChange={handleProducerChange}
              renderInput={(params) => (
                <TextField {...params} label="Productor" />
              )}
            />
          </Grid>

          {/* Autocomplete for Product */}
          <Grid item lg={3}>
            <Autocomplete
              size="small"
              options={ricesTypes}
              getOptionLabel={(option) => option.name}
              onChange={handleProductChange}
              renderInput={(params) => (
                <TextField {...params} label="Tipo de Arroz" />
              )}
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              label="Fecha de Documento"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>

          <Grid item lg={3}>
            <TextField size="small" label="Guía" fullWidth />
          </Grid>

          <Grid item lg={3}>
            <TextField size="small" label="Placa" fullWidth />
          </Grid>

          <Grid item lg={3}>
            <TextField
              size="small"
              label="Peso"
              fullWidth
              value={reception.weihgt}
              type="number"
              onChange={(e) => {
                setReception((prev) => ({
                  ...prev,
                  weihgt: Number(e.target.value),
                }));
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Kg</InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={3}>
            <TextField 
            size="small" 
            label="Tara" 
            value={reception.tare}
            type="number"
            onChange={(e) => {
              setReception((prev) => ({
                ...prev,
                tare: Number(e.target.value),
              }));
            }}
            InputProps={
              {
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>
              }
            }

            fullWidth />
          </Grid>
          <Grid item lg={6} textAlign={"right"}>
            <Typography variant="h6">Peso Neto: {reception.netWeight + ' Kg'}</Typography>
          </Grid>
          <Grid item lg={12}>
            <Divider />
          </Grid>

          <Grid item lg={3}>
            <TextField
              size="small"
              label="Humedad"
              value={reception.humidity}
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              label="Verde"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              label="Impureza"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              label="Hualcacho"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              label="Grano Quebrado"
              value={reception.brokenGrain}
              type="number"
              onChange={(e) => {
                setReception((prev) => ({
                  ...prev,
                  brokenGrain: Number(e.target.value),
                }));
              }}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {reception.brokenGrain * factors.brokenGrain}%
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item lg={9} textAlign={"right"}>
            <Typography variant="h6">Castigo:</Typography>
          </Grid>
          <Grid item lg={12}>
            <Divider />
          </Grid>
          <Grid item lg={12}>
            <TextField
              size="small"
              label="Observaciones"
              fullWidth
              multiline
              rows={3}
            />
          </Grid>

          <Grid item lg={12} textAlign={"right"}>
            <Button variant="contained">Guardar</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
