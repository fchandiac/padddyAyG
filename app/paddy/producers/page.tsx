import { Box, Grid } from "@mui/material";
import React from "react";
import ProducerForm from "./ui/ProducerForm";

export default function page() {
  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Grid container>
          <Grid item>
            <ProducerForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
