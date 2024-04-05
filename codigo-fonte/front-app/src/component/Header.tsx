import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import UserMenuComponent from './UserMenu';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DialogComponent from '../component/Dialog'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from '../reducers/store'
import LinearProgress from '@mui/material/LinearProgress';
import Snackbar from '@mui/material/Snackbar';
import { useSelector, useDispatch } from 'react-redux'
import { setDialogIdle } from '../reducers/dialogReducer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const HeaderComponent = () => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading)
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
  const dispatch = useDispatch<AppDispatch>()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuOptions, setMenuOptions] = useState([]);
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>, options: any) => {
    setAnchorEl(event.currentTarget)
    setMenuOptions(options)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOptions([])
  };

  const handleMenuClick = (link: string) => {
    if(link === 'preproject') {
      // dispatch(newForm());
    }
    navigate(`/${link}`)
    setMenuOptions([])
  }

  const pages = [
    {
      name: 'PRÉ-PROJETOS', options: [
        { name: 'Cadastrar', link: 'preproject' },
        { name: 'Importar', link: 'preProject-incharge' },
        { type: 'divider' },
        { name: 'Ver Pré-Projetos', link: 'preprojects' },
        { name: 'Ver Importações', link: 'preProject-imports' }
      ], link: ''
    },
    {
      name: 'PROJETOS', options: [
        { name: 'Ver Projetos', link: '' }
      ], link: ''
    },
  ];


  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
      {/* <Container maxWidth="xl"> */}
      <Toolbar >
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              onClick={(event) => handleMenu(event, page.options)}
              key={page.name}
              sx={{ my: 2, display: 'block' }}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        {menuOptions.length > 0 &&
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {
              menuOptions.map((x: any) => {
                if (x.type === 'divider') {
                  return <Divider />;
                }
                return <MenuItem onClick={() => handleMenuClick(x.link)}>{x.name}</MenuItem>;
              })
            }
          </Menu>
        }

        <Box sx={{ flexGrow: 0 }}>
          <UserMenuComponent />
        </Box>
      </Toolbar>
      {isLoading && <LinearProgress />}
      {isLoading && <Snackbar
        open={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        autoHideDuration={6000}
        message="Carregando..."
      />}
      <DialogComponent open={isDialogOpen} handleClose={() => dispatch(setDialogIdle())} />
    </AppBar>
  );
}

export default HeaderComponent