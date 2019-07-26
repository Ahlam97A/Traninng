import React from "react";
import "./order.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
export async function getData(url, data) {
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

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      size: []
    };
  }
  componentDidMount() {
    var th = this;
    getData(`http://training.iscosoft.com:5000/order`, this.state)
      .then(data => {
        //console.log("get", JSON.stringify(data));
        this.setState({ data: data });
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <div className="div_hover"
        style={{
          fontFamily: " comic sans ms",
          fontSize: "50px",
          width: "100%",
          textAlign: "center"
        }}
      >

          <Table>
            <TableHead
              style={{
                fontFamily: " comic sans ms",
                background: "#eeeeee",
                fontWeight: "bold"
              }}
           
            >
              <TableRow className="font">
                <TableCell
                  style={{ fontWeight: "bold",color:"black",  fontSize: "15px" ,
                  fontFamily: "comic sans ms"}}                
                >
                  Type pizza
                </TableCell>
                <TableCell style={{ fontWeight: "bold",color:"black", fontSize: "15px" ,fontFamily: "comic sans ms"}}>
                  Size
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", color:"black", fontSize: "15px",fontFamily: "comic sans ms" }}             
                >
                  Quantity
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map((item, key) => (
                <TableRow
                  align="center"
                  className="grid"
                  key={key}
                 
                >
                  <TableCell style={{ fontWeight: "bold", fontSize: "10px" }}>
                    
                    {item.type_pizza}
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", fontSize: "15px" }}>
                   
                    {item.size}
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", fontSize: "15px" }}>
                   
                    {item.quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
       
     
        <br />
      </div>
    );
  }
}
