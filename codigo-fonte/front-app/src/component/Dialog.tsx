import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'
import type { RootState } from '../reducers/store'
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const DialogComponent = ({open, handleClose}: any) => {
  const navigate = useNavigate()
  const {title, message, messageArray, redirect} = useSelector((state: RootState) => state.dialog)

  const handleOkClick = () => {
    handleClose()
    if (redirect) {
      navigate(redirect)
    }
  }

  const processMessage = (message: any) => {
    return { __html: message };
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <span dangerouslySetInnerHTML={processMessage(message)} />
          {messageArray && 
            <ul>
              {messageArray.map((x: string)=> <li>{x[0]}</li>)}
            </ul>
          }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOkClick}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogComponent;