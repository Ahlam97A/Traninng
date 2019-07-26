import React from 'react'
import './search.css'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import Img from '../../img/pizza11.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Slider from './slider'
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

export default class x extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchString: "",
      idString: "",
      priceString: "",
      //products: data,
      //originalProducts: products,

    }
  }
  componentDidMount() {
    var th = this;
    getData(`http://training.iscosoft.com:5000/search`, this.state)
      .then(data => {
        //console.log("get", JSON.stringify(data));
        this.setState({ data: data })
      })
      .catch(error => console.error(error));
  }
  search = (event) => {
    event.preventDefault();
    if (event.target.value) {
      // console.log("event.target.value",event.target.value);
      let filtered = this.state.data.filter(item => {
        return (

          item.type_pizza.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.size.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.quantity == Number(event.target.value)

        );
      });
      this.setState({
        ...this.state,
        searchString: event.target.value,
        data: filtered
      });
    }
    else {
      this.setState({
        ...this.state,
        data: this.state.data,
        searchString: "",

      });
      setTimeout(() => {
        this.componentDidMount();
      }, 10);

    }
  }

  render() {
    const { searchString } = this.state;
    return (
      <div className="app">
        <h1 className="app__title">Search</h1>
        <div className="ib-cont">

          {/*}
        <input className="search-textbox ib-m ib-el"
          type="search"
          value={searchString}
          onChange={this.search}
          style={{ width: "100%", color: "#000", margin: "3px 0", height: "50px", border: "1px solid #000",background:"#wheat", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
          type="text"  name="search"
    />*/}
          <form id="demo-2">
            <input  placeholder="Search"
              type="text"
              style={{ color: "#000", fontSize: "20px", border: "1px solid #000", background: "#wheat",heigth:"70%" }}
             
              value={searchString}
              onChange={this.search}

            />
          </form>
        </div>
        <Table>
        <TableBody style={{ fontWeight: 'bold', fontSize: "20px", width: "100%" }}>
          {
            this.state.data.map((item, key) =>

              <TableRow align="center" className="grid" key={key} style={{ fontFamily: " comic sans ms", fontSize: "50px", width: "100%" }}>
                
                <TableCell style={{ fontWeight: 'bold', fontSize: "20px" }} > {item.type_pizza} </TableCell>
                <TableCell style={{ fontWeight: 'bold', fontSize: "20px" }} > {item.size} </TableCell>
                <TableCell style={{ fontWeight: 'bold', fontSize: "20px" }} > {item.quantity} </TableCell>
              </TableRow>
            )
          }
        </TableBody>
        </Table>

        <br />
     
       
     
     <br />
      </div>
    );
  }
}

