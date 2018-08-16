import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

class Media extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={8}> 
                  <Grid item xs={12} md={12}>
                    <Typography variant="caption" align="center"> 
                      Please Add Your Products Images That Best Describe Your Product!
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    
                    <input type="file" id="file1" name="image" accept="image/*" capture style={{display:'none',fontSize: '20px',
                    height:'80px'}}/>
                    <img src={require('../resource/images/add.png')} id="upfile1" style={{cursor:'pointer'}} />
                  </Grid>
                  <TextField
                  type="file"
                   InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i className="material-icons iconFixfield">
                        phone
                        </i>
                      </InputAdornment>
                    ),
                  }}
                fullWidth={true}
                required={true}
                placeholder="Phone Number"
                />
                </Grid>
            </div>
        )
    }
}
export default Media;