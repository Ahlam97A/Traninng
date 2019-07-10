import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Pizza1 from '../../img/1.jpg';
import Pizza2 from '../../img/download.png'
import Pizza3 from '../../img/pizza1.jpg'
import Pizza4 from '../../img/pizza.jpg'
import Cap from '../../img/Cap.PNG'
import Grid1 from './Grid1'
import Pizzm from '../../img/pizzm.jpg';
import { Link } from 'react-router-dom'
import { getData } from '../tabs/veiworder'


const tileData = [
  {
    id: '1',
    img: Pizzm,
    title: <Grid1 />,//<SimpleModal />,
    author: 'Met Pizz',
    cols: 2,
    featured: true,
    background: "#e7e7e9",
  },
  {
    id: '2',
    img: Pizza1,
    title: <p style={{ fontSize: "11px" }}>Vegetables Pizza</p>,
    author: 'Vegetables Pizza',
  },
  {
    id: '3',
    img: Pizza3,
    title: <p style={{ fontSize: "12px" }}>Cheese Pizza</p>,
    author: 'Cheese Pizza',
  },
  {
    id: '4',
    img: Pizza4,
    title: <p style={{ fontSize: "12px" }}>Italian Vegetable Pizza</p>,
    author: 'Italian Vegetable Pizza',
  }

];
export default class SingleLineGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],

    }
  }
  componentDidMount() {
    var th = this;
    getData(`http://localhost:5000/image`, this.state)

      .then(data => {
        console.log("get image", JSON.stringify(data))
        this.setState({ image: data })
      })
      .catch(error => console.error(error));
  }
  render() {
    let classes = styles
    return (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden', background: "#e7e7e9"
      }}  >
        <p style={{ fontFamily: 'Amiri', background: "#e7e7e9", fontSize: "25px", color: "black" }}>الاكثر شهرة</p>

        <GridList style={{ ...styles.gridList, ...{ width: "100%" } }} cols={2.5} >

          {this.state.image.map((tile, key) => (

            <GridListTile key={key}>

              <Link to={"/item/" + tile.id}><img src={tile.img} alt={tile.title} width="100%" height="100%" /></Link>

                  <GridListTileBar style={{ fontSize: "20px", fontSize: "35px" }}
                    key={key}
                    title={tile.descr}
                    style={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />

            </GridListTile>
          ))}

        </GridList>

      </div>

    );
  }
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    //backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'black',
    fontSize: '30px',

  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    fontSize: '20px'
  },
}
