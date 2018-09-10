import React, {Component} from 'react';
import * as routes from '../constants';
import {Link,withRouter} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeComp from '../AccountsHome';
import MyAds from '../Myads';
import Messages  from '../Messages';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Home,Visibility,Message} from '@material-ui/icons';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import {startSendTocken} from '../redux/actions/messageActions';

class HomePage extends Component {
  state = {
    value: 0
  };
  componentDidMount() {
     document.title = "Account";
     if(!this.props.user){
       this.props.history.push(routes.LOGIN);
     }
     else{
       let tocken = localStorage.getItem('token');
       if (tocken){
      let data = {
        tocken,
        userid:this.props.user
      }
      this.props.startSendTocken(data);
     }}
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
        <Paper className="" elevation={10}>
        
          <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                >
                <BottomNavigationAction 
                className="buttomNavigation"
                label="HOME"
                icon={<Home/>}
                component={Link} to={routes.ACCOUNT_HOME}
                />

                <BottomNavigationAction 
                className="buttomNavigation" 
                label="My Ads" 
                icon={<Visibility />} 
                component={Link} to={routes.MYADS}
                />


                <BottomNavigationAction
                className="buttomNavigation"
                label="Messages" 
                component={Link} to={routes.MESSAGE}
                icon={<Message />} />

              {/*  <BottomNavigationAction
                className="buttomNavigation"
                label="Saved Ads" 
                component={Link} to={routes.SAVEDADS}
              icon={<Icon>streetview</Icon>} /> */}

</BottomNavigation>

        </Paper>

        </Hidden>
          
        <Paper className="marginTop" style={{borderRadius:'0'}} elevation={5}>
                        
            <Route exact path={routes.MYADS} component={() => <MyAds />}/>
            <Route exact path={routes.MESSAGE} component={() =><Messages />}/>
            <Route exact path={routes.ACCOUNT_HOME} component={() =>< HomeComp />}/>
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


const mapStateToProps = state => ({
  user : state.user.user._id,
})

export default withRouter(connect(mapStateToProps,{startSendTocken})(HomePage));
