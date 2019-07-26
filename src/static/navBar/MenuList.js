import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Feedback from '@material-ui/icons/Feedback';
import MailIcon from '@material-ui/icons/Mail';
import Menu from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 200,
    height:500
  },
  fullList: {
    width: 'auto',
  },
  text :{
    color:"black",
    fontWeight:"bold",
    fontSize:"25px",
    fontFamily:"Times New Roman"
  },
  color:{
     color:"black",
     fontSize: "30px"

  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List style={{width:"100%"}}>
        <Link to="/Home">
          <ListItem button>
            <ListItemIcon className={classes.color}>
              <Home  />
              </ListItemIcon>
              <ListItemText primary="Home"  className={classes.text}/>
           
          </ListItem>
        </Link>

        <Link to="/Massege">
          <ListItem button>
            <ListItemIcon className={classes.color}> <MailIcon /> </ListItemIcon>
              
              <ListItemText primary={'Massage'} className={classes.text} />
           
          </ListItem>
        </Link>

        <Link to="/Feedback">
          <ListItem button>
            <ListItemIcon className={classes.color}> <Feedback /> </ListItemIcon>
              
              <ListItemText primary={'Feedback'}  className={classes.text}/>
           
          </ListItem>
        </Link>
        
      </List>
      
      
    </div>
  );
  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}> <Menu style={{ fontSize:"30px",color:"white" }} /> </Button>
      <SwipeableDrawer style={{height:100}}
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}
