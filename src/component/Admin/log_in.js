import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import img from '../../img/11.jpg';
export default class Log extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Button variant="outlined" color="secondary" style={{ height: "100%",width:"100%" }} >
                    User
                </Button>
                <Button variant="outlined" color="secondary" style={{ height: "100%",width:"100%" }} >
                    Admin
                </Button>
        
        
            </div>
        );
    }
}
