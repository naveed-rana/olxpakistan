import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={8}> 
                <Hidden smDown>
                <Grid item xs={4} md={4}> 
                </Grid>
                </Hidden>
                
                 <Grid item xs={12} md={4}>
                   <Paper className="loginPaper" elevation={10}>
                     
                     <Typography variant="body2" align="center">
                      SignUp<i className="material-icons iconSize">search
                </i>
                     </Typography>  
                     <Grid container spacing={8} className="LoginContainer"> 
                       <Grid item xs={12} md={12} className="paddingTop">
                       <TextField
                       type="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                              account_box
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  fullWidth={true}
                  required={true}
                  helperText=""
                  placeholder="Email"
                  />
                       </Grid>
                       <Grid item xs={12} md={12} className="paddingTop">
                       <TextField
                       type="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                              account_box
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  fullWidth={true}
                  required={true}
                  placeholder="Password"
                  />
                       </Grid>
                        
            <Grid item xs={12} md={12} align="right" className="paddingTop">
            <FormControlLabel
            control={
            <Checkbox
              value="checkedB"
              color="primary"
            />
          }
          label="Remember Me"
            />
            </Grid>

                <Grid item xs={12} md={12} align="center" >
                  <Button variant="contained" size="small" color="primary" className="loginbtn">
                  Submit
                  <i className="material-icons iconSize">
                send
                </i>
                </Button>
                  </Grid>
                  <Grid item xs={12} md={6} className="paddingTop">
                    <Typography variant="caption" > 
                      <Link to="">Register</Link>
                    </Typography>
                  </Grid>
                   <Hidden smDown>
                   <Grid item xs={12} md={6} align="right" className="paddingTop">
                  <Typography variant="caption" > 
                      <Link to="/">Forget Password</Link>
                    </Typography>
                  </Grid>
                   </Hidden>
                   <Hidden mdUp>
                   <Grid item xs={12} md={6}>
                  <Typography variant="caption" className="paddingTop" > 
                      <Link to="">Forget Password</Link>
                    </Typography>
                  </Grid>
                   </Hidden>
                     </Grid>
                 
                   </Paper> 
                 </Grid>

                <Hidden smDown>
                <Grid item xs={4} md={4}> 
                </Grid>
                </Hidden>
                </Grid>
            </div>
        )
    }
}
export default SignUp;