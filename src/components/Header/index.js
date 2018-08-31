import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import * as routes from '../constants';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {startLogoutUser} from '../redux/actions/userAction';


class HeaderBar extends Component {

    logout =()=>{
        this.props.startLogoutUser();
    }

    render() {
        return (
            <div>
                <Paper className="headerFix" elevation={1}>
                 <Grid container spacing={8}>
                   <Hidden smDown>
                   <Grid item xs={12} md={9} >
                     <Typography variant="caption" className="paddingLeft" > 
                     <Link to="">Daily Ads</Link> | <Link to={routes.POSTING}>Posting</Link> |  <Link to="">Help</Link> | <Link to="">Contact</Link>
                     </Typography>
                   </Grid>
                   </Hidden> 
                   <Grid item xs={12} md={3} align="center">
                   {this.props.user._id ? 
                      <Typography variant="caption" >   
                      <Link to="" component={Button} onClick={this.logout}> Logout </Link> or <Link to={routes.ACCOUNT}> Account </Link> 
                    </Typography>
                     :
                     <Typography variant="caption" > 
                     Hi! <Link to={routes.LOGIN}> Sign in </Link> or <Link to={routes.SIGNUP}> Register </Link>
                     </Typography>
                   }
            
                   </Grid>
                 </Grid>
                 <Divider />
                </Paper>
             
            </div>
        )
    }
}


const mapStateToProps = state => ({
    user : state.user.user,
  })

export default connect(mapStateToProps,{startLogoutUser})(HeaderBar);