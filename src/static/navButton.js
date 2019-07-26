import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Exit from '@material-ui/icons/ExitToApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    width: "100%",
    //position:'flex',
    position: 'fixed',
    bottom: 0

  },
});
export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <BottomNavigation style={{ color: "white", background: "#9b0f07" }} value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction component={Link} to="/address" style={{ fontSize: "30px", color: "white" }}  icon={<LocationOnIcon style={{ width: "40%", fontSize: "30px", color: "white" }} />} />
      <BottomNavigationAction component={Link} to="/" style={{ fontSize: "50px", color: "white" }} label="Back" icon={<Exit style={{ width: "40%", fontSize: "30px", color: "white" }} />} />
      <BottomNavigationAction component={Link} to="/search" style={{ fontSize: "50px", color: "white" }} label="Search" icon={<Search style={{ width: "40%", fontSize: "30px", color: "white" }} />} />

      {/*} <BottomNavigationAction style={{fontSize:"50px", color:"white"}} label="Nearby" icon={<MailIcon style={{width:"50%",fontSize:"30px", color:"white"}}  />} />*/}
    </BottomNavigation>
  );
}