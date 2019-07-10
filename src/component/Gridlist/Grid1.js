import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Route, Link, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
export default class Grid1 extends React.Component {
    switch = () => {
        window.$.push('/address')
        console.log(window.$)
    }
    render() {
        return (
            <div>
              <Link to="/meat"> <Button style={{background:"#eeeeee",width:"100%",color:"#7e0f0f"}} onClick={this.Switch}>Meat Pizza</Button>.</Link> 
            </div>
        );
    }
}
