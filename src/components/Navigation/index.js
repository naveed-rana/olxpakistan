import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Map from '../googleMapApi';
import Search from '../SearchBar';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import Routes from '../Routes';
import {POSTING,SEARCH} from '../constants';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: 730,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
   
    
  },
  appBar: {
    position: 'absolute',
    backgroundColor:'white',
    color:'black',
    
  
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Navigation extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <Router>
      <div className={classes.root}>
            <AppBar className={classes.appBar}>
          <Toolbar>
          
            
            <Grid container spacing={8}> 
          <Grid item xs={6} md={3}>
            <Typography variant="body2" color="inherit">
              <img src={require('../resource/images/smallogo.png')} alt="logo"/>
              PAKISTAN
            </Typography>
            </Grid>

            <Hidden mdUp>
            <Grid item xs={6} md={1} align="right">
            
           <Link to=""><i className="material-icons iconFixOnSmile">
            search
            </i></Link>
           
            <Link to=""><i className="material-icons iconFixOnSmile">
            note_add
            </i></Link>

            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            </Grid>
            
            </Hidden>
          
            <Hidden smDown>   
              <Grid item xs={3} md={3} className="paddingTop">
                <Map />
              </Grid>
             
              <Grid item xs={5} md={3} className="paddingTop">
                <Search />
              </Grid>
               <Grid item xs={1} md={3} className="paddingTopButton">
               
               <Button component={Link} to={SEARCH} variant="outlined" size="small" color="primary" className={classes.button}>
               <i className="material-icons iconSize">
                search
                </i>
                  Search
                </Button>
                 <Button  component={Link} to={POSTING} variant="outlined" size="small" color="primary" className={classes.button}>
                 <i className="material-icons iconSize">
                  note_add
                  </i>
                 Post an Ad
                </Button>    
               </Grid>   
               </Hidden>

            </Grid>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Routes />
        </main>
        
      </div>
      </Router>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navigation);
