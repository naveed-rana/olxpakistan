import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Forms from '../PostingForms';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import {LOGIN} from '../constants';


class Posting extends Component {

  componentDidMount() {
    document.title = "Posting";
    if(!this.props.user){
      this.props.history.push(LOGIN);
    }
 }  

    render() {
        return (
            <div>
            <Grid container spacing={8}> 
              <Hidden smDown>
              <Grid item xs={1} md={2}>
              </Grid>
              </Hidden>
              <Grid item xs={12} md={8}>
                <Paper className="postingPaper" elevation={5}>
                 <Typography variant="body2" align="center"> 
                   POST AN ADD
                 </Typography>
                   <Divider />

                     <Forms />
                </Paper>
              </Grid>
              <Hidden smDown>
              <Grid item xs={1} md={2}>
              </Grid>
              </Hidden>
            </Grid>
            </div>
        )
    }
}
const mapStateToProps = state => ({
  user : state.user.user._id,
})

export default withRouter(connect(mapStateToProps,null)(Posting));
