import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import addImg from '../resource/images/add_image.png';
class Media extends Component {
  constructor(props) {
    super(props)
    this.state={
       image1:addImg,
       image2:addImg,
       image3:addImg,
       image4:addImg,
       image5:addImg,
       image6:addImg
    }
    this.fileChangeHandler = this.fileChangeHandler.bind(this);
  }
   fileChangeHandler=(event)=>{
    const name = event.target.name;
    if(event.target.files[0]){
    this.setState({
         [name]: URL.createObjectURL(event.target.files[0])
    })
  }
   }
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
                    <label htmlFor="file-input">
                        <img src={this.state.image1}/>
                    </label>
                   <input id="file-input" accept="image/*" capture
                    name="image1"
                    type="file"
                   onChange={this.fileChangeHandler}
                   />
                  </div>
                  </Grid>
                  <Grid item xs={12} md={4}>                  
                  <div className="image-upload">
                    <label htmlFor="file-input1">
                        <img src={this.state.image2}/>
                    </label>
                   <input id="file-input1" accept="image/*" capture type="file"
                   name="image2"
                   onChange={this.fileChangeHandler}
                   />
                  </div>
                  </Grid>
                  <Grid item xs={12} md={4}>                  
                  <div className="image-upload">
                    <label htmlFor="file-input2">
                        <img src={this.state.image3}/>
                    </label>
                   <input id="file-input2" accept="image/*" capture 
                   name="image3"
                   onChange={this.fileChangeHandler}
                   type="file"/>
                  </div>
                  </Grid>
                  <Grid item xs={12} md={4}>                  
                  <div className="image-upload">
                    <label htmlFor="file-input3">
                        <img src={this.state.image4}/>
                    </label>
                   <input id="file-input3" accept="image/*" capture
                   name="image4"
                   onChange={this.fileChangeHandler}
                   type="file"/>
                  </div>
                  </Grid>
                  <Grid item xs={12} md={4}>                  
                  <div className="image-upload">
                    <label htmlFor="file-input4">
                        <img src={this.state.image5}/>
                    </label>
                   <input id="file-input4" accept="image/*" capture
                   name="image5"
                   onChange={this.fileChangeHandler}
                   type="file"/>
                  </div>
                  </Grid>
                  <Grid item xs={12} md={4}>                  
                  <div className="image-upload">
                    <label htmlFor="file-input6">
                        <img src={this.state.image6}/>
                    </label>
                   <input id="file-input6" accept="image/*"
                   name="image6"
                   onChange={this.fileChangeHandler}
                   capture type="file"/>
                  </div>
                  </Grid>
                </Grid>
            </div>
        )
    }
}
export default Media;