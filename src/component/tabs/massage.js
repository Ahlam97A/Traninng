import React, { Component } from 'react';
import img from '../../img/Capture.PNG'
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chat from './chat'
import swal from "sweetalert";
async function postData(url, data) {
    // Default options are marked with *
    let options={
        method:'POST',
        
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }
    let response = await fetch(url, options);
    return await response.json();
}
class Massage extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            data: [],
            size: [],
            feedback:'',
            id:''
        }
    }
     updateInput=(event) =>{
        let state = [];
        state[event.target.name] = event.target.value;
        this.setState(state);
    }
    
    handleSubmit=(event)=> {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://training.iscosoft.com:5000/feedback`, this.state)
          .then(data => console.log("feedback",JSON.stringify(data)))
          .catch(error => console.error(error));
          this.setState({feedback:"",id:""})
          return swal("😉  شكرا لتعليقك")
      
    }
    render() {
        const styleInput = {
            width: "100%",
            alignContent: "Center",
            height: "25px",
            margin: "3px 0",
            border: "1px solid #000",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            fontSize: "20px",
            color:"black"
        };
        const styleInput1 = {
            width: "100%",
            alignContent: "Center",
            height: "100px",
            margin: "3px 0",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            border: "1px solid #000",
            fontSize: "20px",
            display: "flex", 
            justifyContent: "center",
      
        };
        return (
            <div style={{ textAlign: "center", }}>
                  <form onSubmit={this.handleSubmit} onChange={this.updateInput}  >
                <h2 style={{ display: "inline", }}>   <img src={img} /> 🌸ارسل لنا تعليق  </h2>
                <Grid item xs={12}  sm={6} style={{ textAlign: "center",background: "rgba(255,0,0,0.1)" }}>
                    <InputLabel style={{ color: "#000", alignContent: "Center", fontSize: "18px", fontFamily: "Comic Sans MS" }}> رقمك</InputLabel>
                </Grid>
                <Grid item xs={12}  sm={6}>
                    <input required style={styleInput} type="number" name="id" value={this.state.id} />
                </Grid>
                <Grid item xs={12}  sm={6} style={{ textAlign: "center" ,background: "rgba(255,0,0,0.1)"}}>
                    <InputLabel style={{ color: "#000", alignContent: "Center", fontSize: "18px", fontFamily: "Comic Sans MS" }}>🎤 تعليقك</InputLabel>
                </Grid>
                <Grid item xs={12}  sm={6}>
                    <textarea required style={styleInput1} name="feedback" value={this.state.feedback}></textarea>
                </Grid>
                <Button   type="submit" variant="contained" style={{background:"#9b0f07",fontSize:"15px",color:"white",  textAlign: "center",  width: "50%",}}>
                       اضف تعليق
                </Button>
                <img width="100%" height="100%" src={"https://image.freepik.com/free-vector/italian-chef-hot-pizza-illustration_1308-2306.jpg"}/>
            
            </form>
            <Chat />
            </div>
        );
    }
}
export default Massage;
