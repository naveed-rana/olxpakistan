import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import * as routes from '../constants';
import { connect } from 'react-redux';


class HeaderBar extends Component {
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
                     <Typography variant="caption" > 
                     Hi! <Link to={routes.LOGIN}> Sign in </Link> or <Link to={routes.SIGNUP}> Register </Link>
                     
                     </Typography>
            
                   </Grid>
                 </Grid>
                 <Divider />
                </Paper>
             
            </div>
        )
    }
}


export default HeaderBar;