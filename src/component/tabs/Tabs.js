import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Order from './veiworder'
import Massage from './massage';
import Form from './form';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Home from './Home'
import Mail from '@material-ui/icons/Mail';
import Feedback from '@material-ui/icons/Feedback';
import Home1 from '@material-ui/icons/Home';
import Localpizza from '@material-ui/icons/LocalPizza'
import Phone from '@material-ui/icons/Phone'
import TodoApp from './sendMassage';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs style={{ fontSize: "10px", color: "secondary", background: "#e7e7e9" }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor="secondary"
        >
      
          <Tab style={{ fontSize: "10px", background: "#e7e7e9" }} color="secondary" label="Home" icon={<Home1 style={{fontSize:"24px",color:"black"}} />}/>         
          <Tab label="Add Order" icon={<Phone style={{fontSize:"24px",color:"black"}}/>} />
          <Tab label="View Order" icon={<Localpizza style={{fontSize:"24px",color:"black"}}/>} />
          <Tab label="Send Msg" icon={<Mail style={{fontSize:"24px",color:"black"}}/>} />
          <Tab label="Feedback" icon={<Feedback style={{fontSize:"24px",color:"#000000"}}/>} />

        </Tabs>
      </AppBar>

      {value === 0 && <TabContainer><Home /></TabContainer>}
      {value === 1 && <TabContainer><Form /></TabContainer>}
      {value === 2 && <TabContainer><Order /></TabContainer>}
      {value === 3 && <TabContainer><TodoApp /></TabContainer>}
      {value === 4 && <TabContainer><Massage /></TabContainer>}
  

    </div>
  );
}