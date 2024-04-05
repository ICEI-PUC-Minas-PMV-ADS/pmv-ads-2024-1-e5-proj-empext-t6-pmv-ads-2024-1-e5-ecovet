import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../reducers/store'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const UserMenuComponent = ({field}: any) => {
  const { name } = useSelector((state: RootState) => state.user)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLogout = () => {
    // instance.logoutRedirect({
    //   postLogoutRedirectUri: "/",
    // });
  };

  return (
    <Box>
      <div>
        <Grid 
          container 
          display="flex"
          spacing={0}
          justifyContent="center"
          alignItems="center"
          rowSpacing={1} 
          columnSpacing={{ xs: 2, sm: 2, md: 2 }}
          style={{cursor: "pointer"}}
          onClick={handleMenu}>
          <Grid item xs={3}>
            <IconButton
              size="large"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Grid>
          <Grid item xs={9} container>
            <Grid item xs={12}>
              <Typography>{name}</Typography>
            </Grid>
            <Grid item xs={12} 
              aria-label="account of current user" 
              aria-controls="menu-appbar" 
              aria-haspopup="true">
              <Typography>Admin</Typography>
            </Grid>
          </Grid>

        </Grid>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Configurações</MenuItem>
          <MenuItem onClick={handleLogout}>Sair</MenuItem>
        </Menu>
      </div>
    </Box>
  );
}

export default UserMenuComponent