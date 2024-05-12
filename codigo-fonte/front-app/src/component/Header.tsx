import * as React from 'react';
import { useState, useEffect } from 'react';
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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const HeaderComponent = () => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading)
  const isAuthorized = useSelector((state: RootState) => state.user.isAuthorized)
  const role = useSelector((state: RootState) => state.user.role)
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

  let pages = [
    {
      name: 'Minhas vagas', options: [  ], link: 'clinica'
    },
    {
      name: 'Procurar Veterinários', options: [ ], link: 'preproject'
    }
  ];

  useEffect(() => {
    if(role == 'Profissional'){
      pages = [
        {
          name: 'Buscar Vagas', options: [  ], link: 'perfil/clinic'
        },
        {
          name: 'Vagas aceitas', options: [ ], link: ''
        }
      ];
    }
  }, []) 


  return (
    <AppBar position="static" sx={{ 
      backgroundColor: '#fff !important', 
      color: '#000', 
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'flex-end' }}>
      <Container maxWidth="xl">
        <Toolbar >
          
          <Box 
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' }
            }}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  fontFamily: "Red Hat Display",
                  fontWeight: 800,
                  color: '#2563EB',
                  textDecoration: 'none',
                }}
              >
                Eco
            </Typography>

            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  fontFamily: "Red Hat Display",
                  fontWeight: 800,
                  color: '#1677CC',
                  textDecoration: 'none',
                }}
              >
                Vet
            </Typography>
          </Box>
          
            <Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {isAuthorized && pages.map((page) => (
                  <Button
                    onClick={(event) => page.link ? handleMenuClick(page.link) : handleMenu(event, page.options)}
                    key={page.name}
                    sx={{ ml: 5, my: 2, display: 'block' }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
  
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

          <Box sx={{ 
            flexGrow: 2,
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'flex-end' }}>
            {isAuthorized ?
              <UserMenuComponent />: <Button variant="outlined" onClick={() => navigate('/login')}>Login</Button>
            }
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
        {/* <DialogComponent open={isDialogOpen} handleClose={() => dispatch(setDialogIdle())} /> */}
      </Container>
    </AppBar>
  );
}

export default HeaderComponent