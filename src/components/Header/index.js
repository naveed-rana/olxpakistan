import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

class HeaderBar extends Component {
    render() {
        return (
            <div>
                <Router>
                <Paper className="headerFix" elevation={5}>
                 <Grid container spacing={8}>
                   <Hidden smDown>
                   <Grid item xs={12} md={9} >
                     <Typography variant="caption" className="paddingLeft" > 
                     <Link to="">Daily Ads</Link> | <Link to="">Posting</Link> |  <Link to="">Help</Link> | <Link to="">Contact</Link>
                     </Typography>
                   </Grid>
                   </Hidden> 
                   <Grid item xs={12} md={3} align="center">
                     <Typography variant="caption" > 
                     Hi! <Link to=""> Sign in </Link> or <Link to=""> Register </Link>
                     
                     </Typography>
            
                   </Grid>
                 </Grid>
                </Paper>
                </Router>
            </div>
        )
    }
}


export default HeaderBar;