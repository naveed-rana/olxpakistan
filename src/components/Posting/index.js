import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Forms from '../PostingForms';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import {LOGIN} from '../constants';


class Posting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adsViewOf:true
    }
  }
  
  adsViewOff = ( ) => {
    this.setState({adsViewOf:false});
  }

  componentDidMount() {

    document.title = "Posting";
    if(!this.props.user){
      this.props.history.push(LOGIN);
    }
 }  

    render() { 
       const {adsViewOf} = this.state;
        return (
            <div>
            <Grid container spacing={8}> 
              <Hidden smDown>
              <Grid item xs={1} md={2}>
              {adsViewOf ? 
              <img width="100%" onClick={this.adsViewOff} src={require('../resource/images/ads1.JPG')} alt=""/>
              :""}
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
              {adsViewOf ? 
              <img width="100%" onClick={this.adsViewOff} src={require('../resource/images/ads1.JPG')} alt=""/>
              :""}
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
