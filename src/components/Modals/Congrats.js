import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, makeStyles } from '@material-ui/core';




const useStyles = makeStyles(() => ({
  container : {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    outline: 0,
    border: 0,
    background: 'white',
    boxShadow: '0 0 20px black',
    padding: '0% 10%',
    overflow: 'auto',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  header: {
    cursor: 'pointer',
    fontSize: '2em',
    marginBottom: '10%',
  },
  span: {
    display: 'block',
    margin: '5% 0 3%',
  },
  button: {
    padding: '2% 5%',
    border: 0,
    outline: 0,
    width: '50%',
    color: 'white',
    borderRadius: '5px',
    fontSize: '1.2em',
    background: '#FF5C00',
    marginTop: '5%',
    marginLeft: '50%',
    cursor: 'pointer',
    '&:hover': {
      background: '#c94a00'
    }
  },
  close: {
    padding: '2% 5%',
    border: 0,
    outline: 0,
    width: '50%',
    color: 'white',
    borderRadius: '5px',
    fontSize: '1.2em',
    background: '#FF5C00',
    marginTop: '5%',
    marginLeft: '25%',
    cursor: 'pointer',
  },





  '@media (max-width: 600px)' : {
    container: {
      width: '90%',
      padding: '4%'
    },
    button: {
      padding: '2% 5%',
      border: 0,
      outline: 0,
      width: '100%',
      color: 'white',
      borderRadius: '5px',
      fontSize: '1.2em',
      background: '#FF5C00',
      marginTop: '5%',
      marginLeft: '0%',
      cursor: 'pointer',
      '&:hover': {
        background: '#c94a00'
      }
    },
    close: {
      padding: '2% 5%',
      border: 0,
      outline: 0,
      width: '100%',
      color: 'white',
      borderRadius: '5px',
      fontSize: '1.2em',
      background: '#FF5C00',
      marginTop: '0%',
      marginLeft: '0%',
      cursor: 'pointer',
      '&:hover': {
        background: '#c94a00'
      }
    },
  }
}))




export default function Congrats ({close_share}) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={() => {
        handleOpen();
        // close_share();
        }} className={classes.button}> SHARE YOUR OWN STORY </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.container}>
          <h2 className={classes.header}> Thank You for Sharing Your Story! </h2>
          <span>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. 
          </span>
          <Button className={classes.close} onClick={() => {
            handleClose();
            close_share()
          }}>
            Close 
          </Button>
        </Box>
      </Modal>
    </div>
  );
}