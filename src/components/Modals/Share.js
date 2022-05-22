import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {orange} from '@mui/material/colors'
import Box from '@mui/material/Box';
import vector_3 from '../../images/Vector_3.png'
import Modal from '@mui/material/Modal';
import {AttachEmail, AttachFile} from '@mui/icons-material'
import { makeStyles } from '@material-ui/core';
import {TextField, InputAdornment} from '@mui/material';




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
    padding: '2%',
  },
  header: {
    marginTop: '10%',
    cursor: 'pointer',
  },
  span: {
    display: 'block',
    margin: '5% 0 3%',
  },
  personal_details: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  aside: {
    width: '48%',
  },
  input: {
    width: '100%',
  },
  radio: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    padding: '2% 5%',
    border: 0,
    outline: 0,
    width: '50%',
    color: 'white',
    borderRadius: '5px',
    fontSize: '1.4em',
    background: '#FF5C00',
    marginTop: '5%',
    marginLeft: '50%',
  }
}))




export default function Share () {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h3 onClick={handleOpen} className={classes.header}> SHARE YOUR OWN STORY </h3> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.container}>
          <h2> Share your Amazing Story </h2>
          <span> Upload your picture </span>
          <TextField
            // type='file'
            fullWidth
            InputProps={{ StopAdornment: <InputAdornment position="start"> <AttachFile /> </InputAdornment>, }}
          />

          <div className={classes.personal_details}>
            <aside className={classes.aside}>
              <span className={classes.span}> First Name </span>
              <TextField className={classes.input} />
            </aside>
            <aside className={classes.aside}>
              <span className={classes.span} align='right'> Last Name </span>
              <TextField className={classes.input} />
            </aside>
          </div>

          <span className={classes.span}> Share your Story </span>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            fullWidth
          />

          <div className={classes.radio}>
            <aside> <span> What did you interact with Vasiti as? </span> </aside>
            <aside> 
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Customer"  sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 18,
                  },
                }}/>
              <FormControlLabel value="male" control={<Radio />} label="Vendor"  sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 18,
                  },
                }}/>

            </RadioGroup>

            </aside>
          </div>

          <span className={classes.span}> City or Higher Insitution (for students) </span>
          <TextField fullWidth/>

          <button className={classes.button}> Share </button>
        </Box>
      </Modal>
    </div>
  );
}