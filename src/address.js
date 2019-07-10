import React, { Component } from 'react';
import './App.css';
import SearchAppBar from './static/navBar/navbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Address extends React.Component {
    render() {
        return (
            <div >

                <br /><br />
                <Grid item xs={12} style={{ width: "100%" }}>
                    <Paper style={{ width: "100%", heigth: "100%", background: "#e7e7e9" }}>
                        <h2 style={{ fontFamily: 'Amiri', background: "#e7e7e9", fontSize: "25px", textAlign: "center", color: "black" }}>عنوان المطعم</h2>
                        <img src={"https://image.freepik.com/free-vector/hand-drawn-pizza-delivery-man-with-scooter_23-2147674445.jpg"} height="10%" width="100%" />
                    </Paper>
                </Grid>

      
                {/*}
                <div class="container">
               
                    <div class="content">

                        <div class="content-overlay"></div>
                        <img class="content-image"  src={"https://image.freepik.com/free-vector/hand-drawn-pizza-delivery-man-with-scooter_23-2147674445.jpg"} />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title">This is a title</h3>
                            <p class="content-text">This is a short description</p>
                        </div>


                    </div>
                </div>
        */}

            </div>
        );
    }
}
export default Address;
