import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
export  class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [], 
        text: '' 
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
        const styleInput = {
            width: "80%",
            alignContent: "Center",
            height: "25px",
            margin: "0 auto",
            border: "1px solid #000",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            fontSize: "20px",
       
            bottom: "60px",
      
          
        };
        const styleButton = {
            
            textAlign:"center",
            width: "20%",
            alignContent: "Center",
            height: "30px",
            textAlign:"center",
           
            border: "1px solid #000",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            fontSize: "20px",
            

            
           
        };
      return (
        <div  style={{ textAlign: "center", }}>
          <h3 style={{ textAlign: "center", }}>send Massage</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit} >
            <input align="middle" style={styleInput}
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button  align="right" style={styleButton} > send </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <div style={{background:"white"}}>
            <Grid item xs={12}  sm={6} style={{ textAlign: "left",background: "rgba(275,0,0,0.1)" }}>
          {this.props.items.map(item => (
            <h4 key={item.id}>{item.text}</h4>
          ))}
          </Grid>
        
            </div>
      );
    }
  }
  
 
 