import { Grid } from '@mui/material'
import React from 'react'
import ProducerForm from './ui/ProducerForm'

export default function page() {
  return (
    <>
    <Grid container>
        <Grid item>
            <ProducerForm />
        </Grid>
    </Grid>

    </>
  )
}
