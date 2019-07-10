
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import '../navBar/navBar.css'
import SearchIcon from '@material-ui/icons/Search';
import SwipeableTemporaryDrawer from './MenuList'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Home from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';
 async function getData(url, data) {
  // Default options are marked with *
  let options = {

    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  let response = await fetch(url, options);
  return await response.json();
}
const useStyles ={
  root: {
    flexGrow: 1,
    top: 0,
    pos: 'fixed'
  },
 
  title: {
    flexGrow: 1,
    display: 'block',
  },
  search: {
    position: 'relative',
  
    marginright: 0,
    marginLeft: 100,
    width: "10%",
   
  },
  searchIcon: {
   
    height: '100%',
    position: 'fixed',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
  },
  inputRoot: {
    color: '#eeeeee',
  },
  inputInput: {
    
    width: '10%',
   
  },
};
export default class SearchAppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            size: [],
            menuOpen:false,
        }
    }
 
  handleClick=(event)=> {
  
    this.setState({value:event.target.value})
  }
//


   handleClose=(event)=> {
      this.setState({value:null})
    event.preventDefault();
    
    getData(`http://localhost:5000/logout`)

        .then(data => {
            console.log("delete", JSON.stringify(data))
          
        })
     
        .catch(error => console.error(error));
     


  
  }
  render(){
     const classes =useStyles
  
  return (
    <div className={classes.root}>
      <AppBar position="static" top="0" style={{ background: "#9b0f07" }}>
        <Toolbar>
          <SwipeableTemporaryDrawer />

          <IconButton
            edge="start"
            className={classes.menuButton}

            aria-label="Open drawer"
          >

          </IconButton>
          <Typography className={classes.title} className="title" variant="h4" noWrap style={{ fontFamily: "Times New Roman" }} >
            Pizza Shop
          </Typography>

   
          <div id="wrap">
            <form action="" autoComplete="on">
              <input id="search" name="search" type="text" /><input id="search_submit" value="Rechercher" type="submit" />
            </form>
          </div>

            <div>
      <Home aria-controls="simple-menu" aria-haspopup="true" style={{fontSize:"40px",paddingLeft:"5px"}} onClick={this.handleClick} />
       
    
      <Menu
        id="simple-menu"
       // anchorEl={anchorEl}
       anchorEl={this.state.menuOpen}
        open={Boolean(this.state.menuOpen)}
        keepMounted
        //open={Boolean(anchorEl)}
          
        onClose={this.handleClose}
      >
    
       <Link to="/admin"> <MenuItem onClick={this.handleClose}>Logout</MenuItem></Link>
      </Menu>
    </div>
        </Toolbar>
 
      </AppBar>
    </div>
  );
  }
}
