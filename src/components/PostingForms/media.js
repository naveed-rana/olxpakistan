import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import addImg from '../resource/images/add_image.png';
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
                  <Grid item xs={12} md={4}>                  
                  <div className="image-upload">
                    <label for="file-input">
                        <img src={addImg}/>
                    </label>
                   <input id="file-input" accept="image/*" capture type="file"/>
                  </div>
                  </Grid>
                  <Grid item xs={12} md={4}>                  
                  <div className="image-upload">
                    <label for="file-input">
                        <img src={addImg}/>
                    </label>
                   <input id="file-input" accept="image/*" capture type="file"/>
                  </div>
                  </Grid>
                  <Grid item xs={12} md={4}>                  
                  <div className="image-upload">
                    <label for="file-input">
                        <img src={addImg}/>
                    </label>
                   <input id="file-input" accept="image/*" capture type="file"/>
                  </div>
                  </Grid>
                  <Grid item xs={12} md={4}>                  
                  <div className="image-upload">
                    <label for="file-input">
                        <img src={addImg}/>
                    </label>
                   <input id="file-input" accept="image/*" capture type="file"/>
                  </div>
                  </Grid>
                  <Grid item xs={12} md={4}>                  
                  <div className="image-upload">
                    <label for="file-input">
                        <img src={addImg}/>
                    </label>
                   <input id="file-input" accept="image/*" capture type="file"/>
                  </div>
                  </Grid>
                  <Grid item xs={12} md={4}>                  
                  <div className="image-upload">
                    <label for="file-input">
                        <img src={addImg}/>
                    </label>
                   <input id="file-input" accept="image/*" capture type="file"/>
                  </div>
                  </Grid>
                </Grid>
            </div>
        )
    }
}
export default Media;