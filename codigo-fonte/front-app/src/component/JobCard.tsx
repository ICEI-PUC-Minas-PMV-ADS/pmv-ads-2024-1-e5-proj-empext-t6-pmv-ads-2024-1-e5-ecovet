import * as React from 'react';
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

const JobCard = ({job, role}: any) => {
  console.log("job")
  console.log(job)
  return (   
    <Card sx={{ width: 345, minHeight: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            N
          </Avatar>
        }
        action={
          role == 'Clínica' && <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Nome da petshop"
        subheader="Data da publicação"
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
        role == 'Profissional' &&
        <CardActions>
          <Button size="small">Me candidatar</Button>
        </CardActions>
        
      }
    </Card>
  );
}

export default JobCard;
