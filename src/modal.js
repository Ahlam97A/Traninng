import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Scroll from './scroll.js'
import SingleLineGridList from './GridList'
import SingleLineGridList1 from './GridList2'
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

function SimpleModal() {
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      <Typography gutterBottom></Typography>
      <Button onClick={handleOpen} color="primary" style={{fontSize:"15px",color:"white"}}>Meat Pizza</Button>
      <Modal style={{width:"100%",textAlign:"center"}}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h4" id="modal-title">
              Another Image
          </Typography>
          <SingleLineGridList1 />
          <Typography  id="simple-modal-description">
             {/*} <Scroll />*/}
             
          </Typography>
          <Typography variant="h4" id="simple-modal-description">
          Component of Pizza
         
          </Typography>
          
        </div>
      </Modal>
    </div>
  );
}

export default SimpleModal;
