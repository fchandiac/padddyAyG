import React from 'react';
import { Drawer, Box, Typography, MenuItem, List } from '@mui/material';
import { useRouter } from 'next/navigation';

interface SideBarProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

export default function SideBar({ open, toggleDrawer }: SideBarProps) {
    const router = useRouter();
  return (
    <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 250, padding: 2 }}>
        {/* Main Typography */}
        <Typography variant="h5" align="center" gutterBottom>
          Paddy AyG
        </Typography>

        {/* Smaller Typography with version */}
        <Typography variant="body2" align="center" color="textSecondary" paragraph>
          Version 1.0.0
        </Typography>

        {/* Menu Items */}
        <List>
        <MenuItem onClick={() => {
            router.push('/paddy');
            toggleDrawer(false);
        }}>Dashboard</MenuItem>
          <MenuItem onClick={() => {
            router.push('/paddy/receptions/newReception');
            toggleDrawer(false);
          }}>nueva Recepcción</MenuItem>
          <MenuItem onClick={() => {
            router.push('/paddy/receptions');
            toggleDrawer(false);
          }}>Recepciones</MenuItem>
          <MenuItem onClick={() => {
            router.push('/paddy/producers');
            toggleDrawer(false);
          }}>Productores</MenuItem>
          <MenuItem onClick={() => console.log('Ventas clicked')}>Anticipos</MenuItem>
          <MenuItem onClick={() => console.log('Ventas clicked')}>Liquidaciones</MenuItem>
          <MenuItem onClick={() => console.log('Usuarios clicked')}>Usuarios</MenuItem>
          <MenuItem onClick={() => console.log('Cerrar Sesión clicked')}>Cerrar Sesión</MenuItem>
        </List>
      </Box>
    </Drawer>
  );
}
