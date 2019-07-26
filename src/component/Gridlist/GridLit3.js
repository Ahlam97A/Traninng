import React,{ useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import A from '../../img/1.jpg'
import B from '../../img/2.jpg'
import C from '../../img/3.jpg'
import D from '../../img/4.jpg'
import E from '../../img/5.jpg'
import F from '../../img/6.jpg'
import G from '../../img/7.jpg'
import H from '../../img/8.jpg'
//import I from '../../img/9.jpg'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      font :"xx-large",
      textAlign:'center'
  },
  icon: {
    color: 'white',
    fontSize:1000
  },
}));
export default function AdvancedGridList() {
  const classes = useStyles();
  const [imges,setimges]=React.useState([])
  const [data,setdata]=React.useState()
  const tileData = [
    {
      img: A,
      title:'Vegetables Pizza',
      author: 'author1',
      
      
    }, {
      img: B,
      title: 'Meat Pizza',
      author: 'author2',
     
    }, {
      img:C,
      title: 'Tomatoes Pizza',
      author: 'author3',
    }, {
        img: D,
        title: 'Margarita Pizza',
        author: 'author3',
      }, {
        img: E,
        title: 'Meat Pizza',
        author: 'author3',
      }, {
        img: F,
        title: 'Sausage Pizza',
        author: 'author3',
      }, {
        img: G,
        title: 'Mushroom Pizza',
        author: 'author3',
      }, {
        img: H,
        title: 'Olives Pizza',
        author: 'author3',
      }

  ];
  
 async function getData(url,data) {
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

useEffect(() =>{
getData(`http://training.iscosoft.com:5000/img11`)

.then(data => {
  setimges(data)
 
})
.catch(error =>{console.error(error)
console.log(error)} );

},[])
  return (
    <div className={classes.root} style={{ background:"#e7e7e9",color:"black"}}>
      <p style={{fontFamily:'Amiri',fontSize:"25px"}}>القائمة</p>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {imges.map((tile,id) => (
          <GridListTile key={tile.image} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img  src={'http://training.iscosoft.com:5000/static/img/'+tile.image}  alt={tile.name}/> 
            
            <GridListTileBar style={{fontSize : "25px"}}
              title={tile.name}
              titlePosition="top"        
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

/*
<GridListTile key={id} component={Link} to={"image/"+item.id}>
<img  src={'http://localhost:5000/static/images/'+item.id+'/'+item.name} /> 
 <GridListTileBar
   title={item.name}
   classes={{
     root: classes.titleBar,
     title: classes.title,
   }}
*/