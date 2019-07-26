import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
async function postData(url, data) {
  // Default options are marked with *
  let options = {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  let response = await fetch(url, options);
  return await response.json();
}

const useStyles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center"
  },
  formControl: {
    minWidth: "100%",
    textAlign: "center",
    display: "block",
    margin: "3px",
    fontSize: "15px"
  },
  selectEmpty: {}
};
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      name: "",
      sel_s: "",
      size: "",
      qaun: "",
      checka: false,
      checkb: false,
      checkc: false,
      checkd: false,
      checke: false
    };
  }
  updateInput = event => {
    let state = [];
    state[event.target.name] = event.target.value;
    this.setState(state);
  };
  handleChange = event => {
    this.setState({ checka: !this.state.checka });
  };
  handleChange1 = event => {
    this.setState({
      checkb: !this.state.checkb
    });
  };
  handleChange2 = event => {
    this.setState({
      checkc: !this.state.checkc
    });
  };
  handleChange3 = event => {
    this.setState({
      checkd: !this.state.checkd
    });
  };
  handleChange4 = event => {
    this.setState({
      checke: !this.state.checke
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://training.iscosoft.com:5000/addrec`, this.state)
      .then(data => console.log("insert", JSON.stringify(data)))
      .catch(error => console.error(error));
    this.setState({
      type: "",
      checke: false,
      name: "",
      checka: false,
      sel_s: "",
      checkb: false,
      size: "",
      checkc: false,
      qaun: "",
      checkd: false
    });
    return swal("😉 تم تخزين طلبك بنجاح")
  };

  render() {
    const classes = useStyles;
    return (
      <div
        style={classes.root}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form
          onSubmit={this.handleSubmit}
          onChange={this.updateInput}
          style={{ textAlign: "center", display: "inline-block" }}
        >
          <Grid item xs={12} style={{ width: "100%" }}>
            <Paper style={{ width: "100%", background: "#e7e7e9" }}>
              <h1
                style={classes.formControl}
                style={{
                  fontFamily: "Times New Roman",
                  backgroung: "#e7e7e9",
                  fontSize: "25px"
                }}
              >
                Order
              </h1>
            </Paper>
          </Grid>
          <Paper style={{ width: "100%", background: "#f4f4f5" }}>
            <FormControl style={classes.formControl}>
              <label style={classes.formControl}>Choose Type of Pizza</label>
              <select
                name="sel_s"
                required
                onChange={this.updateInput}
                value={this.state.sel_s}
              >
                <option name="sel_s" value="--" />
                <option name="sel_s">Vegetables Pizza</option>
                <option name="sel_s">Italian Vegetable Pizza</option>
                <option name="sel_s">Cheese Pizza</option>
                <option name="sel_s">Meat Pizza</option>
              </select>
            </FormControl>
            <br />
            <FormControl style={classes.formControl}>
              <label style={classes.formControl}>حجم البيتزا</label>
              <select
                name="size"
                required
                value={this.state.size}
                onChange={this.updateInput}
              >
                <option name="size" value="--" />
                <option name="size">صغير</option>
                <option name="size">وسط</option>
                <option name="size">كبير</option>
              </select>
            </FormControl>
            <br />

            <h1
              style={classes.formControl}
              style={{
                fontFamily: "Amiri",
                backgroung: "#e7e7e9",
                fontSize: "25px"
              }}
            >
              المكونات المطلوبه في الطلب
            </h1>
            <Paper
              style={{
                width: "100%",
                heigth: "100%",
                textAlign: "center",
                fontSize: "30px"
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checka}
                    name="a"
                    value="جبنه"
                    onClick={this.handleChange}
                    color="primary"
                  />
                }
                label="جبنه"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkb}
                    name="b"
                    value="طماطم"
                    onClick={this.handleChange1}
                    color="primary"
                  />
                }
                label="طماطم"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkc}
                    name="c"
                    value="فلفل"
                    onClick={this.handleChange2}
                    color="primary"
                  />
                }
                label="فلفل"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkd}
                    name="d"
                    value="زيتون"
                    onClick={this.handleChange3}
                    color="primary"
                  />
                }
                label="زيتون"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checke}
                    name="e"
                    value="ذرة"
                    onClick={this.handleChange4}
                    color="primary"
                  />
                }
                label="ذرة"
              />
            </Paper>
            <FormControl style={classes.formControl}>
              <TextField
                id="standard-name"
                value={this.state.qaun}
                required
                label="الكمية"
                margin="normal"
                type="number"
                required
                name="qaun"
                onChange={this.updateInput}
              />
            </FormControl>
            <br />
            <br />
            <FormControl style={classes.formControl}>
              <Button
                variant="contained"
                required
                type="submit"
                style={{
                  background: "#9b0f07",
                  fontSize: "15px",
                  color: "white"
                }}
              >
                اضف الطلب
              </Button>
            </FormControl>
            <br />
            <br />
            <br />
          </Paper>
        </form>
      </div>
    );
  }
}
