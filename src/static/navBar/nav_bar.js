
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import img from '../../img/imgePNG.PNG';
import { Route, Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    top: 0,
    pos: 'fixed'  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.0),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginright: 100,
    marginLeft: 100,
    width: '45%%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#9c27b0',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));
export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" top="0" style={{ background: "#9b0f07" }}>
        <Toolbar>
          <Link to="/user"><Button variant="contained" style={{ height: "100%", width: "100%" , }} >
            User
          </Button>
          </Link>
          <Link to ="/admin"><Button variant="contained" style={{ height: "100%", width: "100%" }} >
            Admin
          </Button>
          </Link>
        </Toolbar>
      </AppBar>  
      <br />
      <img src={"https://image.freepik.com/free-vector/pizza-cartoon-set_1284-11714.jpg"} width="100%" height="100%"/>
    </div>
  );
}
