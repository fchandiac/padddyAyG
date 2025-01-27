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
  humidityPercent: number;
  green: number;
  greenPercent: number;
  impurity: number;
  impurityPercent: number;
  hualcacho: number;
  hualcachoPercent: number;
  brokenGrain: number;
  brokenGrainPercent: number;
  plateNumber: string;
  discountPercent: number;
  discount: number;
  totalWeight: number;
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

// Definir pestañas y rutas
const tabs = [
  { label: "Productos", path: "/adminApp/products" },
  { label: "Categorías", path: "/adminApp/products/categories" },
  { label: "Familias", path: "/adminApp/products/families" },
];

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
    humidityPercent: 0,
    greenPercent: 0,
    impurityPercent: 0,
    hualcachoPercent: 0,
    brokenGrainPercent: 0,
    discount: 0,
    discountPercent: 0,
    totalWeight: 0,
  });

  useEffect(() => {
    setReception((prev) => ({
      ...prev,

      netWeight: prev.weihgt - prev.tare,

    }));
  }, [reception.weihgt, reception.tare]);

  useEffect(() => {
    const totalDiscountPercent = reception.greenPercent + reception.impurityPercent + reception.hualcachoPercent + reception.brokenGrainPercent;
    const totalDiscount = (totalDiscountPercent / 100) * reception.netWeight;
    setReception((prev) => ({
      ...prev,
      discountPercent: totalDiscountPercent,
      discount: totalDiscount,
      totalWeight: reception.netWeight - totalDiscount,
    }));

  }, [reception.greenPercent, reception.impurityPercent, reception.hualcachoPercent, reception.brokenGrainPercent, reception.netWeight]);

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
            <Typography variant="h6">Peso Neto: {reception.netWeight + 'Kg'}</Typography>
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
              type="number"
              value={reception.green}
              onChange={(e) => {
                setReception((prev) => ({
                  ...prev,
                  green: Number(e.target.value),
                  greenPercent: Number(e.target.value) * factors.green,
                }));
              }}
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">{reception.humidityPercent}%</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              label="Impureza"
              value={reception.impurity}
              onChange={(e) => {
                setReception((prev) => ({
                  ...prev,
                  impurity: Number(e.target.value),
                  impurityPercent: Number(e.target.value) * factors.impurity,
                }));
              }}
              type="number"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">{reception.impurityPercent}%</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              size="small"
              value={reception.hualcacho}
              type="number"
              label="Hualcacho"
              onChange={(e) => {
                setReception((prev) => ({
                  ...prev,
                  hualcacho: Number(e.target.value),
                  hualcachoPercent: Number(e.target.value) * factors.hualcacho,
                }));
              }}
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">{reception.hualcachoPercent}%</InputAdornment>,
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
                  brokenGrainPercent: Number(e.target.value) * factors.brokenGrain,
                }));
              }}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {reception.brokenGrainPercent}%
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item lg={9} textAlign={"right"}>
            <Typography variant="h6">Castigo:{' ' + reception.discountPercent + '% - ' + reception.discount + 'Kg'}</Typography>
          </Grid>
          <Grid item lg={12}>
            <Divider />
          </Grid>
          <Grid item lg={12}>

        <Typography variant="h6">Total Kilos Neto: {reception.totalWeight}</Typography>
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
