import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react'

interface ProducerFormProps {
    update?: boolean;
    afterSubmit?: () => void;
    id?: string;
    name?: string;
    socialReason?: string;
    rut?: string;
    address?: string;
    phone?: string;
    email?: string;
}

export default function ProducerForm(
    {
        update = false,
        afterSubmit = () => {},
    }: ProducerFormProps
) {
  return (
    <form>
        <Grid container spacing={1} direction={'column'}>
            <Grid item >
                <Typography variant="h6">
                    {update ? 'Actualizar' : 'Nuevo'} Productor
                </Typography>
            </Grid>
            <Grid item >
               <TextField 
                label="Nombre"
                variant="outlined"
                fullWidth
                size='small'
                />
            </Grid>

            <Grid item >
               <TextField 
                label="Razón Social"
                variant="outlined"
                fullWidth
                 size='small'
                />
            </Grid>
            <Grid item >
                <TextField 
                 label="Rut"
                 variant="outlined"
                 fullWidth
                  size='small'
                 />
            </Grid>
            <Grid item >
                <TextField 
                 label="Dirección"
                 variant="outlined"
                 fullWidth
                  size='small'
                 />
            </Grid>
            <Grid item >
                <TextField 
                 label="Teléfono"
                 variant="outlined"
                 fullWidth
                  size='small'
                 />
            </Grid>
            <Grid item >
                <TextField 
                 label="Email"
                 variant="outlined"
                 fullWidth
                  size='small'
                 />
            </Grid>
        </Grid>
    </form>
  )
}
