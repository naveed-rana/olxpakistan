import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux';

 class AccountHome extends Component {
    render() {
        return (
            <div>
                <Paper className="paddingBottom" elevation={5}>
         <Grid container spacing={8}> 
           <Grid item  md={2}> </Grid>
           <Grid item md={8} align="center">
             <Grid item>
             <img src={require('../resource/images/4.png')} alt="account"/>
             </Grid>
             <Grid item>
             <Typography variant="display2" > 
               {this.props.user.name}
             </Typography>
             <Divider />
             <Typography variant="body2" > 
               Account Status : active
             </Typography>
             <Typography variant="body2"> 
               Your Name:{this.props.user.name}
             </Typography>
             <Typography variant="body2"> 
               Id:{this.props.user._id}
             </Typography>
             <Typography variant="body2"> 
             Cell No:{this.props.user.cellNo}
             </Typography>
             <Typography variant="body2" > 
               Email : {this.props.user.email}
             </Typography>
            
             <Divider />
             <Typography variant="caption" > 
             Address : {this.props.user.address}
             </Typography>
             <Typography variant="caption" > 
             City : {this.props.user.city}
             </Typography>
             <Typography variant="caption" > 
             Province : {this.props.user.province}
             </Typography>
             
             </Grid>
           </Grid>
           <Grid item md={2}></Grid>
         </Grid>
        </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user : state.user.user,
  })

export default connect(mapStateToProps,null)(AccountHome);