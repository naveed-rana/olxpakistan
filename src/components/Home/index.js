import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image from '../resource/images/download (1).png';
 

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

 
  const tileData = [
    {
      img: image,
      title: 'Image',
      author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
      },
      {
        img: image,
        title: 'Image',
        author: 'author',
      }
      ,
      {
        img: image,
        title: 'Image',
        author: 'author',
      }
      ,
      {
        img: image,
        title: 'Image',
        author: 'author',
      }
      ,
      {
        img: image,
        title: 'Image',
        author: 'author',
      }
  ];
 
function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <GridList cols={3} cellHeight={180} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
