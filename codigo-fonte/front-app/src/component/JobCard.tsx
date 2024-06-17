import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import DialogComponent from "../component/Dialog";
import { red } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import { setDialogIdle } from "../reducers/dialogReducer";
import { useNavigate } from "react-router-dom";
import {  Collapse, styled } from "@mui/material";
import type { AppDispatch, RootState } from "../reducers/store";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TypographyMold = styled(Typography)({
  fontFamily: "red-hat-display",
});

const CustomCardHeader = styled(CardHeader)(({ theme }) => ({
  '& .MuiCardHeader-title': {
    fontFamily: 'red hat display, sans-serif',
     fontWeight: 400
  },
  '& .MuiCardHeader-subheader': {
    fontFamily: 'red hat display, sans-serif',
     fontWeight: 400
  },
}));

const JobCard = ({ job, role, handleDeleteJob, applied }: any) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen);
  
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const candidaturaVaga = (idClinica: string, idvaga: string) => {
    navigate(`/clinica/${idClinica}/vaga/${idvaga}`);
  };

  const verCandidaturas = (idvaga: string) => {
    navigate(`/candidaturas/${idvaga}`);
  };

  const editarVaga = (idvaga: string) => {};

  const decisorExp = (exp: number) => {
    switch (exp) {
      
      case 1: {
        return "Menos de 1 ano de experiência";
      }
      case 2: {
        return "Entre 1 à 2 anos de experiência";
      }
      case 3: {
        return "Entre 2 à 6 anos de experiência";
      }
      default: {
        return "Mais de 6 anos de experiência";
      }
    }
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ width: 345,
        background: 'linear-gradient(135deg, #F0F4FF, #D8DFFF, #BEC7FF)',
       }}
    >
      <DialogComponent
        open={isDialogOpen}
        handleClose={() => dispatch(setDialogIdle())}
      />
      <CustomCardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], fontFamily: "red-hat-display" }}
            aria-label="recipe"
          >
            {job.clinicaVaga.nome?.substring(0, 1)}
          </Avatar>
        }
        title={<TypographyMold>{job.clinicaVaga.nome}</TypographyMold>}
        subheader={<TypographyMold>{job.clinicaVaga.endereco}</TypographyMold>}
     
      />
      <CardMedia
        sx={{ height: 140 }}
        image="https://firstaff.ie/wp-content/uploads/2020/10/job-search-in-newspaper-vector.jpg"
      />
      <CardContent>
        <TypographyMold gutterBottom variant="h5">
          {job.tituloVaga}
        </TypographyMold>

        <TypographyMold
          variant="body2"
          color="text.secondary"
          sx={{ height: 50 }}
        >
          {job.descricao?.length > 80
            ? job.descricao.slice(0, 80) + "..."
            : job.descricao}
        </TypographyMold>
        {/* 
        <Box>
          <TypographyMold variant="body2" color="text">
            Requisitos:
          </TypographyMold>

          <TypographyMold variant="body2" color="text.secondary">
            - {job.requisitos.slice(0, 150) + "..."}
          </TypographyMold>
        </Box> */}

        <Chip
          sx={{ fontFamily: "red-hat-display" }}
          label={decisorExp(job.experiencia)}
          color="primary"
          variant="outlined"
        />
      </CardContent>
      {role === "Profissional" && !applied ? (
        <CardActions>
          <Button
            sx={{ fontFamily: "red-hat-display" }}
            size="small"
            onClick={() =>
              candidaturaVaga(job.clinicaVaga.idClinica, job.idVaga)
            }
          >
            Ver mais
          </Button>

          <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      ) : role === "Clínica" ? (
        <CardActions>
          <Button
            size="small"
            sx={{ fontFamily: "red-hat-display" }}
            onClick={() => verCandidaturas(job.idVaga)}
          >
            Ver Candidaturas
          </Button>
          <Button
            size="small"
            sx={{ fontFamily: "red-hat-display" }}
            color="error"
            onClick={() => handleDeleteJob(job.idVaga, job.tituloVaga)}
          >
            Deletar
          </Button>

          <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      ) : null}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TypographyMold  variant="body2" color="text">
            Requisitos:
          </TypographyMold>

          <TypographyMold variant="body2" color="text.secondary">
            {job.requisitos?.length > 300
              ? "- " + job.requisitos.slice(0, 300) + "..."
              : "- " + job.requisitos}
          </TypographyMold>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default JobCard;
