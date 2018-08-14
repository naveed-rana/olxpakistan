import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class HeaderBar extends Component {
    render() {
        return (
            <div>
                <Paper className="" elevation={5}>
                 <Grid container spacing={8}>
                   <Hidden smDown>
                   <Grid item xs={12} md={9}>
                     
                   </Grid>
                   </Hidden> 
                   <Grid item xs={12} md={3}>
                     <Typography variant="caption" > 
                     Hi! <a href="">Sign in</a> or <a href="">register</a>
                     </Typography>
                     <Typography variant="caption" > 
                       
                     </Typography>
                   </Grid>
                 </Grid>
                </Paper>
            </div>
        )
    }
}


export default HeaderBar;