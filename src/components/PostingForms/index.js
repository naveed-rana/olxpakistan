import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Map from '../googleMapApi';
import InputAdornment from '@material-ui/core/InputAdornment';
import Media from './media';
import addImg from '../resource/images/add_image.png';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Product Category', 'Product Details','Product Media','Personel Information'];
}

class VerticalLinearStepper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0,
      image1:addImg,
      image2:addImg,
      image3:addImg,
      image4:addImg,
      image5:addImg,
      image6:addImg,
      title:'',
      category:''
    };
  }


  onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
}

  getStepContent=(step)=> {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={8}> 
            <Grid item xs={12} md={12} className="paddingTop">
                <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                          subtitles
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  name="title"
                  onChange={this.onChangeHandler}
                  fullWidth={true}
                  placeholder="Title"
                  />
            </Grid>
            <Grid item xs={12} md={12} className="paddingTop">
                  
                    <i className="material-icons iconFixfield mangaeWithSelect">
                    business
                   </i>
                      <select name="category"
                      onChange={this.onChangeHandler}
                      className="selectSignUp">
                      <option selected disabled value="none">
                      Choose Category
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
                      <Divider />
                    </Grid>
    
          </Grid>
        );
            
      case 1:
        return  (
          <Grid container spacing={8}> 
            <Grid item xs={12} md={12} className="paddingTop">
            <TextField
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
                  placeholder="Your Name"
                  />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
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
            <Grid item xs={12} md={12} className="paddingTop">
                <Map />
            </Grid>
          </Grid>
        );
      case 2:
        return  (
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
        );
      case 3:
        return (
          <Grid container spacing={8}> 
            <Grid item xs={12} md={12} className="paddingTop">
            <Typography variant="caption" align="center"> 
                        Please Add Your Personel Information Consciously!
                      </Typography>
            <TextField
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
                  placeholder="Your Name"
                  />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
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
            <Grid item xs={12} md={12} className="paddingTop">
                <Map />
            </Grid>
          </Grid>
        );
      
      default:
        return 'Unknown step';
    }
  }
  
  

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  fileChangeHandler=(event)=>{
    const name = event.target.name;
    if(event.target.files[0]){
    this.setState({
         [name]: URL.createObjectURL(event.target.files[0])
    })
  }
   }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {this.getStepContent(index)}
                  <div className={classes.actionsContainer}>
                    <div className="paddingTop">
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
