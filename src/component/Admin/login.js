import React, { Component } from 'react';
import img from '../../img/Capture.PNG'
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link} from 'react-router-dom'
import { Redirect } from 'react-router';
export async function getData(url, data) {
  // Default options are marked with *
  let options = {

    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Token':window.Token
    },
    body: JSON.stringify(data)
  }
  let response = await fetch(url, options);
  return await response.json();
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      redirect: false,
      name:'',
      password:'',
      submit:false,
      loading: false,
      error: ''

    }
  }
  handelSubmit=(event)=> {
    event.preventDefault();
    console.log(this.state);
    this.setState({ submit: true });
    getData(`http://localhost:5000/login`, this.state)

        .then(data => {
            console.log("get", JSON.stringify(data))
            let token=JSON.stringify(data)
            console.log(token)
            let x=data["token"]
            window.Token=x
            console.log(window.Token) 
            localStorage.setItem('Token',window.Token)
            
           
            this.setState({ value: data,
              redirect:true 
              })
            if(data["error"]=="error"){
              this.setState({ 
                redirect:false 
                })
                return <div style={{ color: "#9b0f07", alignContent: "Center", fontSize: "18px", 
                fontFamily: "Comic Sans MS" ,fontWeight:"bold"}}>ahlam</div>
            }
        })
      
        .catch(error => console.error(error));
     
    
  }

  handelChange = (event) => {
    let state = [];
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  render() {
   
    const styleInput = {
      width: "80%",
      alignContent: "Center",
      height: "35px",
     
      border: "1px solid #000",
      margin: "30px 30px 10px 30px" ,
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
      fontSize: "20px",
      background:"#faeded"
      
    };
 
  if(this.state.redirect){
    return <Redirect path to ="/tab" />
  }
  else {
 
    return (
      <div style={{ textAlign: "center",}}>
        <br /><br />
        <form onChange={this.handelChange} onSubmit={this.handelSubmit}>

          <Grid item xs={12} sm={6} style={{ textAlign: "center", background: "rgba(255,0,0,0.1)" }}>
            <InputLabel style={{ color: "#000", alignContent: "Center", fontSize: "18px", fontFamily: "Comic Sans MS",fontWeight:"bold" }}> الاسم</InputLabel>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <input  style={styleInput} value={this.state.name}  name="name"  placeholder="username" />
          </Grid>
          {this.state.submit && !this.state.name &&
            <div style={{ color: "#9b0f07", alignContent: "Center", fontSize: "18px", fontFamily: "Comic Sans MS" ,fontWeight:"bold"}}>Username is required</div>
          }
          <Grid item xs={12} sm={6} style={{ textAlign: "center", background: "rgba(255,0,0,0.1)" }}>
            <InputLabel style={{ color: "#000", alignContent: "Center", fontSize: "18px", fontFamily: "Comic Sans MS" ,fontWeight:"bold"}}>كلمه السر</InputLabel>
          </Grid>
          <Grid item xs={12} sm={6}>
            <input  style={styleInput} value={this.state.password}  name="password" type="password" placeholder="password" />
          </Grid>
          {this.state.submit && !this.state.password &&
            <div style={{ color: "#9b0f07", alignContent: "Center", fontSize: "18px", fontFamily: "Comic Sans MS" ,fontWeight:"bold"}}>Password is required</div>
          }
          <br />
        <Button variant="contained" type="submit" style={{ background: "#9b0f07", fontSize: "15px", color: "white", textAlign: "center", width: "50%", }}>
            Login
          </Button>
        </form>
      </div>
    );}
  }
}
export default Login;
