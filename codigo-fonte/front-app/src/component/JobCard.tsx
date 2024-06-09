import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DialogComponent from '../component/Dialog'
import type { AppDispatch, RootState } from '../reducers/store'
import { useSelector, useDispatch } from 'react-redux'
import { setDialog, setDialogIdle } from '../reducers/dialogReducer'
import { useNavigate } from "react-router-dom";

const JobCard = ({job, role, handleDeleteJob}: any) => {
  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const candidaturaVaga = (idvaga : string) =>{

  }

  const verCandidaturas = (idvaga : string) =>{
    navigate(`/candidaturas/${idvaga}`)
  }

  const editarVaga = (idvaga : string) =>{

  }

  return (   
    <Card sx={{ width: 345, minHeight: 300 }}>
      <DialogComponent open={isDialogOpen} handleClose={() => dispatch(setDialogIdle())} />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {job.clinicaVaga.nome?.substring(0, 1)}
          </Avatar>
        }
        title={job.clinicaVaga.nome}
        subheader={job.clinicaVaga.endereco}
      />
      <CardMedia
        sx={{ height: 140 }}
        image="https://firstaff.ie/wp-content/uploads/2020/10/job-search-in-newspaper-vector.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.tituloVaga}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ height: 50 }}>
          {job.descricao}
        </Typography>
      </CardContent>
      {
        role == 'Profissional' ? 
        <CardActions>
          <Button size="small" onClick={() => candidaturaVaga(job.idVaga)}>Me candidatar</Button>
        </CardActions> :
        <CardActions>
        <Button size="small" onClick={() => verCandidaturas(job.idVaga)}>Ver Candidaturas</Button>
        <Button size="small" color="error" onClick={() => handleDeleteJob(job.idVaga, job.tituloVaga)}>Deletar</Button>
        </CardActions>
        
      }
    </Card>
  );
}

export default JobCard;
