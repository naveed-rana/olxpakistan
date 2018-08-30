import React, { Component } from 'react';
import DailyAds from '../dailyAds';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Card from '../HomeCards';


class Home extends Component {
  render() {
    return (
      <div>
       <Grid container spacing={8}> 
       
        <Grid item xs={12} md={8}>
        <Paper className="shaddowNone" elevation={5}>
        <Card />
        </Paper>
          
        </Grid>
      
      </Grid>
      </div>
    )
  }
}
export default  Home;