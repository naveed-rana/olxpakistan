import React, {Component} from 'react';
import * as routes from '../constants';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SavedAds from '../SavedAds';
import Home from '../AccountsHome';
import MyAds from '../Myads';
import Setting  from '../settings';
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';


class HomePage extends Component {
  state = {
    value: 4,
  };
  componentDidMount() {
  
  
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
        
<Router>
        <Grid container spacing={8}> 
        <Hidden smDown>
        <Grid item xs={1} md={2}>
        </Grid>
        </Hidden>
        <Grid item xs={12} md={8}>
        <Hidden only={['xs','sm']}>
          <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                >
                <BottomNavigationAction 
                className="buttomNavigation"
                label="New Complaints"
                icon={<Icon>library_add</Icon>}
                component={Link} to={routes.SAVEDADS}
                />

                <BottomNavigationAction 
                className="buttomNavigation" 
                label="My Complaints" 
                icon={<Icon>visibility</Icon>} 
                component={Link} to={routes.ACCOUNT_HOME}
                />


                <BottomNavigationAction
                className="buttomNavigation"
                label="History" 
                component={Link} to={routes.SETTINGS}
                icon={<Icon>history</Icon>} />

                <BottomNavigationAction
                className="buttomNavigation"
                label="Account" 
                component={Link} to={routes.SETTINGS}
                icon={<Icon>account_circle</Icon>} />

                <BottomNavigationAction className="buttomNavigation" 
                component={Link} to={routes.ACCOUNT_HOME}
                label="Instructions"
                icon={<Icon>help_outline</Icon>} />

</BottomNavigation>

        </Hidden>
          
        <Paper className="marginTop" style={{borderRadius:'0'}} elevation={5}>
                        
            <Route exact path={routes.MYADS} component={() => <MyAds />}/>
            <Route exact path={routes.SETTINGS} component={() =><Setting />}/>
            <Route
                exact
                path={routes.SAVEDADS}
                component={() =><SavedAds />}/>
            <Route exact path={routes.ACCOUNT_HOME} component={() =>< Home />}/>
        </Paper>
          
        </Grid>
        <Hidden smDown>
        <Grid item xs={1} md={2}>
        </Grid>
        </Hidden>
      </Grid>
</Router>
    );
  }
}


export default HomePage;
