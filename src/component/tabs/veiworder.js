import React from 'react'
import './order.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
export async function getData(url, data) {
    // Default options are marked with *
    let options = {

        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    let response = await fetch(url, options);
    return await response.json();
}


export default class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            size: []
        }
    }
    componentDidMount() {
        var th = this;
        getData(`http://localhost:5000/order`, this.state)

            .then(data => {
                console.log("get", JSON.stringify(data))
                this.setState({ data: data })
            })
            .catch(error => console.error(error));
    }
    render() {
        return (
            <div  style={{ fontFamily: " comic sans ms" ,fontSize:"50px" }}>

                <Grid item xs={12}>
                    <Paper align="center" style={{ fontFamily: " comic sans ms" ,fontSize:"50px" }}>
                        <Table>
                            <TableHead  style={{ fontFamily: " comic sans ms" ,fontSize:"50px" ,background:"#eeeeee",fontWeight:"bold"}} align="center">
                                <TableRow style={{ fontFamily: " comic sans ms" ,fontSize:"50px" }}>
                                    <TableCell  style={{fontWeight: 'bold',fontSize:"20px"}} align="center">Type pizza</TableCell>
                                    <TableCell  style={{fontWeight: 'bold',fontSize:"30px"}}>Size</TableCell>
                                    <TableCell  style={{fontWeight: 'bold',fontSize:"20px"}} align="center">Quantity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >                            
                            {
                                this.state.data.map((item, key) =>

                                    <TableRow align="center" className="grid" key={key} style={{ fontFamily: " comic sans ms",fontSize:"50px" }}>
                                       <TableCell style={{fontWeight: 'bold',fontSize:"20px"}} > {item.type_pizza} </TableCell>
                                       <TableCell style={{fontWeight: 'bold',fontSize:"20px"}} > {item.size} </TableCell>
                                       <TableCell style={{fontWeight: 'bold',fontSize:"20px"}} > {item.quantity} </TableCell>
                                    </TableRow>
                                )
                            }
                            </TableBody>

                        </Table>
                    </Paper>


                </Grid>
<br /><br />
            </div>
        )
    }
}