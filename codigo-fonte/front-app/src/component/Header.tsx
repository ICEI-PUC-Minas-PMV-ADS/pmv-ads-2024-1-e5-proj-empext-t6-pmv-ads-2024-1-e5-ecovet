import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import UserMenuComponent from './UserMenu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import LinearProgress from '@mui/material/LinearProgress';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const HeaderComponent = () => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading)
  const {isAuthorized, role, id} = useSelector((state: RootState) => state.user)
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
  const dispatch = useDispatch<AppDispatch>()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuOptions, setMenuOptions] = useState<any>([]);
  const [pages, setPages] = useState([]);
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


  useEffect(() => {
    if(role == 'Profissional'){
      setPages([
        //@ts-ignore
        {
          name: 'Buscar Vagas', options: [  ], link: 'veterinario'
        },
        //@ts-ignore
        {
          name: 'Meu perfil', options: [ ], link: `perfilprofessional/publico/${id}`
        }
      ])
    }else if(role == 'Clínica'){
      setPages([
        //@ts-ignore
        {
          name: 'Minhas vagas', options: [  ], link: 'clinica'
        }
      ])
    }
  }, [role]) 


  return (
    <AppBar position="static" sx={{ 
      backgroundColor: '#fff !important', 
      color: '#000', 
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'flex-end' }}>
      <Container maxWidth="xl">
        <Toolbar 
        >
          
          <Box 
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' }
            }}
            >
              
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
          
         
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',   justifyContent: 'center'  } }}>
                {isAuthorized && pages && pages.map((page) => (

                  <Button
                  //@ts-ignore
                    onClick={(event) => page.link ? handleMenuClick(page.link) : handleMenu(event, page.options)}
                    //@ts-ignore
                    key={page.name}
                    sx={{ ml: 5, my: 2, display: 'block', fontFamily: "red-hat-display" }}
                  >
                    {
                      //@ts-ignore
                      page.name
                    }
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

          <Box sx={{ 
            flexGrow: 2,
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'flex-end' }}>
            {isAuthorized ?
              <UserMenuComponent />: <Button sx={{fontFamily: "red-had-display"}} variant="outlined" onClick={() => navigate('/login')}>Login</Button>
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