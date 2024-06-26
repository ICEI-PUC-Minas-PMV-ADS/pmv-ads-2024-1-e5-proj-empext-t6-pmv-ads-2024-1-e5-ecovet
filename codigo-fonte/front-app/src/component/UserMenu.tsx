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
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from "react-router-dom";
import { logout } from '../reducers/userReducer';
import ClinicPerfilModal from './ClinicPerfilModal';
import VeterinarioPerfilModal from './VeterinarioPerfilModal';
import { styled } from '@mui/material';

var ls = require('local-storage');

const TypographyMold = styled(Typography)({
  fontFamily: "red-hat-display",
});

const UserMenuComponent = ({ field }: any) => {
  const { name, userName, role } = useSelector((state: RootState) => state.user)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();
  const [openModalEditarClinica, setOpenModalEditarClinica] = useState(false);
  const [openModalEditarVeterinario, setOpenModalEditarVeterinario] = useState(false);
  // const [user, setUser] = useState<any>();

  // useEffect(() => {
  //   const userFromStorage = ls.get('user');
  //   console.log(userFromStorage)
  //   setUser(userFromStorage);
  // }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const editarPerfil = () => {
    if(role == "Clínica")
    {
      setOpenModalEditarClinica(true);

    }
    else
    {
      setOpenModalEditarVeterinario(true);
    }
  };

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
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
          <Grid item xs={8} container>
            <Grid item xs={12}>
              <TypographyMold>{name}</TypographyMold>
            </Grid>

          </Grid>

          <Grid item xs={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{name?.substring(0, 1)}</Avatar>
          </Grid>

          <Grid item xs={1}>
            <KeyboardArrowDownIcon />
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
          <MenuItem sx={{fontFamily: "red-hat-display"}} onClick={editarPerfil}>Configurações</MenuItem>
          <MenuItem sx={{fontFamily: "red-hat-display"}} onClick={handleLogout}>Sair</MenuItem>
        </Menu>
      <ClinicPerfilModal
        open={openModalEditarClinica}
        setOpen={() => setOpenModalEditarClinica(false)}
      />
      <VeterinarioPerfilModal
        open={openModalEditarVeterinario}
        setOpen={() => setOpenModalEditarVeterinario(false)}
      />
      </div>
    </Box>
  );
}

export default UserMenuComponent
