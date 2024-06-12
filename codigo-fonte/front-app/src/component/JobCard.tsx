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
import Chip from '@mui/material/Chip';

const JobCard = ({job, role, handleDeleteJob, applied}: any) => {
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

  const candidaturaVaga = (idClinica: string, idvaga : string) =>{
    navigate(`/clinica/${idClinica}/vaga/${idvaga}`)

  }

  const verCandidaturas = (idvaga : string) =>{
    navigate(`/candidaturas/${idvaga}`)
  }

  const editarVaga = (idvaga : string) =>{

  }

  const decisorExp = (exp: number) =>{
    switch(exp){
      case 1: { 
        return "Menos de 1 ano de experiência"
      } 
      case 2: { 
        return "Entre 1 à 2 anos de experiência"
      } 
      case 3: { 
        return "Entre 2 à 6 anos de experiência"
      } 
      default: { 
        return "Mais de 6 anos de experiência"
      } 
    }
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

        <Typography 
          variant="body2" 
          color="text">
          Requisitos:
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary">
          - {job.requisitos}
        </Typography>
        <Chip label={decisorExp(job.experiencia)} color="success" variant="outlined" />
      </CardContent>
      {
        role == 'Profissional' && !applied ? 
        <CardActions>
          <Button size="small" onClick={() => candidaturaVaga(job.clinicaVaga.idClinica ,job.idVaga)}>Ver mais</Button>
        </CardActions> 
        : role == 'Clínica' ?  
        <CardActions>
        <Button size="small" onClick={() => verCandidaturas(job.idVaga)}>Ver Candidaturas</Button>
        <Button size="small" color="error" onClick={() => handleDeleteJob(job.idVaga, job.tituloVaga)}>Deletar</Button>
        </CardActions>
        : null
      }
    </Card>
  );
}

export default JobCard;
