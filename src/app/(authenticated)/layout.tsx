'use client';

import * as React from 'react';
import {ThemeProvider, createTheme} from "@mui/material/styles";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';

import AppBar from "@/components/system/AppBar";
import Drawer from "@/components/system/Drawer";

import {mainListItems, secondaryListItems, topBarListItems} from './listitems';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff2200',
    }
  }
});
export default function Dashbboard({children}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Welcome Marijke
              </Typography>
              {/*<List component="nav">*/}
                { topBarListItems }
              {/*</List>*/}
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <KeyboardDoubleArrowLeftRoundedIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              {mainListItems}
              <Divider sx={{ my: 1 }} />
              {secondaryListItems}
            </List>
          </Drawer>
          {children}
        </Box>
      </ThemeProvider>
    </>
  )
}
