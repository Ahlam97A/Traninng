import React from'react'
import Grid from '@material-ui/core/Grid';
export default class Pizza extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <Grid item xs={12}  sm={6} style={{ textAlign: "center",background: "rgba(255,0,0,0.1)" }}>
                    <InputLabel style={{ color: "#000", alignContent: "Center", fontSize: "18px", fontFamily: "Comic Sans MS" }}> رقمك</InputLabel>
                </Grid>
                <Grid item xs={12}  sm={6}>
                    <input required style={styleInput} type="number" />
                </Grid>
            </div>
        );
    }
}