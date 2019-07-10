import React from 'react';
import SingleLineGridList1 from "./GridList2";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Carousel from './carousel_img'
const data = [
    {id: 1, property: 'Dashboard', link: '/'},
    {id: 2, property: 'Login', link: '/login'},
    {id: 3, property: 'About Us', link: '/About'},
  ];

export default class Meat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            mokawinat: [],
            
        }
    }
    countUP = (e) => {
        this.setState({
            counter: e.target.value,
        })
    }
    countDown = () => {
    }
  
    render() {
      
        return (
            <div style={{ fontFamily: 'Amiri', background: "#e7e7e9", textAlign: "center", fontSize: "25px", color: "black" }} >


                <Carousel />
                <h2  > صور اخرى لبيتزا اللحم</h2>
                <SingleLineGridList1 /><br />
                <Grid item xs={12} style={{ width: "100%", background: "#f5f5f5" }}>
                    <Paper style={{ width: "100%", heigth: "100%", background: "#f5f5f5" }}>
                        <h2 style={{ textAlign: "right" }} >: مكونات البيتزا</h2>
                        <h3 style={{ fontFamily: 'Times New Roman', fontSize: "25px" }}>
                            جبنه + طماطم  + فلفل + زيتون + ذرة +لحم
                    </h3>
                    </Paper>
                </Grid>
                <Paper >
                    <h2 style={{ textAlign: "right", background: "#f5f5f5" }} >  :حجم البيتزا و سعرها</h2>
                    <Table style={{ width: "100%", textAlign: "center", fontSize: "20px" }} >
                        <TableBody>
                            <TableRow >
                                <TableCell align="right" style={{ textAlign: "center", fontSize: "20px" }}>20</TableCell>
                                <TableCell align="right" style={{ textAlign: "center", fontSize: "20px" }}>صغير</TableCell>
                                <TableCell align="right" style={{ textAlign: "center", fontSize: "20px" }}><Checkbox /></TableCell>

                            </TableRow>
                            <TableRow style={{ textAlign: "center", fontSize: "20px" }}>
                                <TableCell align="right" style={{ textAlign: "center", fontSize: "20px" }}>30</TableCell>
                                <TableCell align="right" style={{ textAlign: "center", fontSize: "20px" }}>وسط</TableCell>
                                <TableCell align="right" style={{ textAlign: "center", fontSize: "20px" }}><Checkbox /></TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell align="right" style={{ textAlign: "center", fontSize: "20px" }}>45</TableCell>
                                <TableCell align="right" style={{ textAlign: "center", fontSize: "20px" }}>كبير</TableCell>
                                <TableCell align="right" style={{ textAlign: "center", fontSize: "20px" }}><Checkbox /></TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
                <h2 style={{ textAlign: "right" }} > :الكمية</h2>
                <input type="number" style={{ width: "50%" }} />
                <br /><br />
                <Button variant="contained" style={{ background: "#9b0f07", fontSize: "15px", color: "white" }}>
                    اطلب
                </Button>
                <br /> <br /> <br />

            </div>
        );
    }
}
