import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarSharpIcon from '@mui/icons-material/StarSharp';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CollectionsIcon />
      </ListItemIcon>
      <ListItemText primary="Configurator" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Products" secondary="Lifting tools" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <StarSharpIcon />
      </ListItemIcon>
      <ListItemText primary="My collection"/>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems: React.JSX.Element = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Privacy statement" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Terms & Conditions" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <InfoOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItemButton>
  </React.Fragment>
);

export const topBarListItems:React.JSX.Element = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Sign out" />
    </ListItemButton>
  </React.Fragment>
)
