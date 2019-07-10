import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Pizza11 from '../../img/pizza11.jpg';
import Pizza1 from '../../img/images.png';
import Pizzza from '../../img/pizzza.jpg';
import Pizz2 from '../../img/pizz2.jpg'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: "#eeeeee",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));
export default function SingleLineGridList1() {
  const classes = useStyles();
  const tileData = [
    {
      img: Pizza11,
      title:'Meat Pizza',
      author: 'author1',
      
    }, {
      img: Pizza1,
      title: 'Meat Pizza',
      author: 'author2',
    }, {
      img: Pizzza,
      title: 'Meat Pizza',
      author: 'author3',
    }, {
        img: Pizz2,
        title: 'Meat Pizza',
        author: 'author3',
      }

  ];


  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar 
              title={tile.title}
              classes={{
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