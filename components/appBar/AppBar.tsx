"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";

interface AppBarProps {
  userName?: string;
}

const TopBar: React.FC<AppBarProps> = ({ userName = "Invitado" }) => {
  const [openUserInfoDialog, setOpenUserInfoDialog] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleOpenDialog = () => {
    setOpenUserInfoDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenUserInfoDialog(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Left Section */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            Paddy AyG
            <Typography variant="caption" ml={1}>
              v1.0.0
            </Typography>
          </Typography>

          {/* Right Section */}
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            {userName}
          </Typography>
          <IconButton color="inherit" onClick={handleOpenDialog}>
            <PersonIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => setOpenSideBar(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* User Info Dialog */}
      <Dialog open={openUserInfoDialog} onClose={handleCloseDialog}>
        <Box p={3}>
          <Typography variant="h6">Información de Usuario</Typography>
        </Box>
      </Dialog>

      {/* SideBar */}
      <SideBar open={openSideBar} toggleDrawer={setOpenSideBar} />
    </Box>
  );
};

export default TopBar;
