import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '../smallScreenResults';


class Search extends Component {
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
                   SEARCH AN ADD
                 </Typography>
                   <Divider />
                <Grid container spacing={8} className="paddingTop"> 
                 <Grid item xs={12} md={4} className="paddingTop">
                  
                      <select name="category"
                      value=""
                      onChange={this.onChangeHandler}
                      className="selectSignUp">
                      <option selected value="none">
                      Search by Category
                      </option>
                      <option value="mobiles">
                      Mobiles
                      </option>
                      <option value="vehicals">
                      Vehicals
                      </option>
                      <option value="bikes">
                      Bikes
                      </option>
                      <option value="animals">
                      Animals
                      </option>
                      <option value="laptops">
                      Laptops
                      </option>
                      <option value="furniture">
                      Furniture
                      </option>
                      </select>
                   
                    </Grid>
                 <Grid item xs={12} md={4} className="paddingTop">
                <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                          edit_location
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  name="title"
                  onChange={this.onChangeHandler}
                  fullWidth={true}
                  placeholder="Search by Locations"
                  value=""
                  />
                </Grid> 
                 <Grid item xs={12} md={4} className="paddingTop">
                <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                          find_in_page
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  name="title"
                  onChange={this.onChangeHandler}
                  fullWidth={true}
                  placeholder="Search by Title"
                  value=""
                  />
            </Grid>
                
                </Grid>
                </Paper>

                <Paper className="marginTop" elevation={5}>
                  
                  {/* <img width="100%" src={require('../resource/images/adsloading.gif')} alt=""/> */}

                  <Hidden only={['md', 'xl','lg']}>
                    <Card/>
                  </Hidden>
                  <Hidden only={['xs', 'sm']}>
                  largescreen
                  </Hidden>
                    
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

export default Search;
