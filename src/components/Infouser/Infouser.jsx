import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import themeColor from '../../theme/themeColor';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Infouser(props) {
  return (
    <div>
        <Dialog
        open={props.infoUserWindow}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.closeWindowforUser}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Największa trudność"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <ThemeProvider theme={themeColor}>
        <Button 
          variant='contained'
          onClick={props.closeWindowforUser}>Zamknij</Button>
        </ThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  )
}
