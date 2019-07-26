import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Send from "@material-ui/icons/Send";
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const styleInput = {
      width: "80%",
      alignContent: "Center",
      height: "28px",
      margin: "0 auto",
      border: "1px solid #000",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
      borderTopRightRadius: "5px",
      borderTopLeftRadius: "5px",
      fontSize: "20px",
      color: "black",
      fontFamily: "Times New Roman",
      bottom: "60px"
    };
    const styleButton = {
      textAlign: "center",
      width: "20%",
      alignContent: "Center",
      height: "30px",
      textAlign: "center",
      border: "1px solid #000",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
      borderTopRightRadius: "5px",
      borderTopLeftRadius: "5px",
      background: "pink"
    };
    return (
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#000000",
            fontFamily: "Times New Roman"
          }}
        >
          Send Massage
        </h2>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            align="middle"
            style={styleInput}
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button align="right" style={styleButton}>
            <Send style={{ fontSize: "20px", color: "#9b0f07" }} />
          </button>
        </form>
        <br/><br />
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
      text: ""
    }));
  }
}
//
class TodoList extends React.Component {
  render() {
    return (
      <div style={{  width:"100%",
      height: "300px",
      overflow: "auto",borderStyle: "solid",textAlign: "left",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",}} >
        {this.props.items.map(item => (
          <mark
            style={{
              textAlign: "left",
              background: "rgba(275,0,0,0.2)",
              fontFamily: "Times New Roman",
              fontSize:"20px",              
            
             
            }}
            key={item.id}
          >
            {item.text}<br />
          </mark>
        ))}
      </div>
    );
  }
}
