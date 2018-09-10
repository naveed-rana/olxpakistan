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
import InputAdornment from '@material-ui/core/InputAdornment';
import addImg from '../resource/images/add_image.png';
import Divider from '@material-ui/core/Divider';
import {ACCOUNT} from '../constants';
import { connect } from 'react-redux';
import {compose} from 'recompose';
import {Subtitles,Business,LocalAtm,CastConnected,Details,Attachment,AccountBox,LocationOn,Phone,Email} from '@material-ui/icons';
import {withRouter} from 'react-router-dom';
import {startAdsPosting,clearAdsPosting} from '../redux/actions/adsActions';
import CircularProgress from '@material-ui/core/CircularProgress';


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
      category:'none',
      condition:'none',
      price:'',
      discriptions:'',
      tag:'',
      loading:false,
      images:[]
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
          <div>
            <Typography variant="caption" align="center"> 
               Please add impressive Title and choose category!
            </Typography>
          <Grid container spacing={8} className=""> 
            <Grid item xs={12} md={12} className="paddingTop">
                <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
    
                          <Subtitles className="iconFixfield"/>
                        
                        </InputAdornment>
                      ),
                    }}
                  name="title"
                  autoFocus={true}
                  onChange={this.onChangeHandler}
                  fullWidth={true}
                  placeholder="Title"
                  value={this.state.title}
                  />
            </Grid>
            <Grid item xs={12} md={12} className="paddingTop">
                  
                     
                    <Business className="iconFixfield mangaeWithSelect" />
                  
                      <select name="category"
                      value={this.state.category}
                      onChange={this.onChangeHandler}
                      className="selectSignUp">
                      <option selected value="none">
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
                      <option value="property">
                      Property
                      </option>
                      <option value="books">
                      Books
                      </option>
                      </select>
                      <Divider />
                    </Grid>
          </Grid>
          </div>
        );
            
      case 1:
        return  (
          <Grid container spacing={8}> 
            <Grid item xs={12} md={12} className="paddingTop">
            <Typography variant="caption" align="center"> 
               Please add correct price and specfications of products for better experience and sell.
            </Typography>
            <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          
                          <LocalAtm className="iconFixfield" />
                           
                        </InputAdornment>
                      ),
                    }}
                  fullWidth={true}
                  name="price"
                  autoFocus={true}
                  value={this.state.price}
                  onChange={this.onChangeHandler}
                  required={true}
                  placeholder="price"
                  />
            </Grid>
            <Grid item xs={12} md={12} className="paddingTop">
                  
                    
                    <CastConnected className="iconFixfield mangaeWithSelect"/>
                  
                      <select name="condition"
                      value={this.state.condition}
                      onChange={this.onChangeHandler}
                      className="selectSignUp">
                      <option selected value="none">
                      Choose condition
                      </option>
                      <option value="new">
                      New
                      </option>
                      <option value="used">
                      Used
                      </option>
                      
                      </select>
                      <Divider />
                    </Grid>
            <Grid item xs={12} md={12} className="paddingTop">
            <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                         
                          <Details className="material-icons iconFixfield"/>
                         
                        </InputAdornment>
                      ),
                    }}
                  fullWidth={true}
                  name="discriptions"
                  value={this.state.discriptions}
                  onChange={this.onChangeHandler}
                  multiline={true}
                  placeholder="Discriptions"
                  />
            </Grid>
            <Grid item xs={12} md={12} className="paddingTop">
            <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                       
                          <Attachment className="iconFixfield"/>
                          
                        </InputAdornment>
                      ),
                    }}
                  fullWidth={true}
                  name="tag"
                  value={this.state.tag}
                  onChange={this.onChangeHandler}
                  placeholder="Tag , separated"
                  />
            </Grid>
          </Grid>
        );
      case 2:
        return  (
          <div>
                  <Grid container spacing={8}> 
                    <Grid item xs={12} md={12}>
                      <Typography variant="caption" align="center"> 
                        Please Add Your Products Images That Best Describe Your Product, Select at leaset one image!
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>                  
                    <div className="image-upload">
                      <label htmlFor="file-input">
                          <img src={this.state.image1} alt="image1"/>
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
                          <img src={this.state.image2}  alt="image2"/>
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
                          <img src={this.state.image3}  alt="image3"/>
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
                          <img src={this.state.image4}  alt="image4"/>
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
                          <img src={this.state.image5}  alt="image5"/>
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
                          <img src={this.state.image6}  alt="image6"/>
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
                        Please Check Your Personel Information Consciously!
            </Typography>
            <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                         
                             <AccountBox className="iconFixfield"/>
                          
                        </InputAdornment>
                      ),
                    }}
                  fullWidth={true}
                  required={true}
                  value={this.props.userdata.name}
                  placeholder="Your Name"
                  />
            </Grid>
            <Grid item xs={12} md={12}>
            <TextField
                     InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                        
                          <Phone className="iconFixfield"/>
                       
                        </InputAdornment>
                      ),
                    }}
                  fullWidth={true}
                  value={this.props.userdata.cellNo}
                  required={true}
                  placeholder="Phone Number"
                  />
            </Grid>
            <Grid item xs={12} md={12} className="paddingTop">
            <TextField
                     InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          >
                          <LocationOn className="iconFixfield" />
                          
                        </InputAdornment>
                      ),
                    }}
                  fullWidth={true}
                  value={this.props.userdata.address}
                  placeholder="address"
                  />
            </Grid>
            <Grid item xs={12} md={12} className="paddingTop">
            <TextField
                     InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                      
                          <Email className="iconFixfield"/> 
                         
                        </InputAdornment>
                      ),
                    }}
                  fullWidth={true}
                  value={this.props.userdata.email}
                  placeholder="email"
                  />
            </Grid>
          </Grid>
        );
      
      default:
        return 'Unknown step';
    }
  }

  componentWillReceiveProps(nextProps) {
    this.props.clearAdsPosting();
    this.setState({loading:false});
    if(nextProps.success){
    this.props.history.push(ACCOUNT);}
  }

  onSubmitHandle = () =>{
    this.setState({loading:true})
    const {images,category,condition,price,discriptions,tag} = this.state;
    var title = this.state.title;
    title = title.toLowerCase();
    let formData = new FormData();
    let i = 0;
    images.forEach((file)=>{
      i++;
    formData.append(`file${i}`, file);
    })
    formData.append('title',title);
    formData.append('category',category);
    formData.append('condition',condition);
    formData.append('price',price);
    formData.append('discriptions',discriptions);
    formData.append('tag',tag);
    formData.append('user',this.props.userdata._id);
    formData.append('username',this.props.userdata.name);
    formData.append('userphone',this.props.userdata.cellNo);
    formData.append('useremail',this.props.userdata.email);
    formData.append('userlocations',this.props.userdata.address);
    
    this.props.startAdsPosting(formData);
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
    let  imagedata = this.state.images;
    if(event.target.files[0]){
     imagedata.push(event.target.files[0])
    this.setState({
         [name]: URL.createObjectURL(event.target.files[0]),
         images:imagedata
    });
  }
   }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    var isValid;
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep, title,category,price,condition,discriptions,tag,image1,image2,image3,image4,image5,image6,loading } = this.state;
    if(activeStep === 0){
       isValid = title === '' || category === 'none';
    }
    else if(activeStep === 1)
    {
      isValid = price === '' || condition === 'none' || discriptions === '' || tag === '';
    }
    else {
       isValid = image1 === addImg && image2 === addImg && image3 === addImg && image4 === addImg && image5 === addImg && image6 === addImg;
    }
    

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
                        disabled={isValid}
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
            <Typography>All steps completed - you&quot;re finished! 
              if you are done submit the form otherwise you can reset the forms.
            </Typography>
            <Button 
            variant="outlined"
            color="primary"
            size="small"
            onClick={this.handleReset} 
            className={classes.button}>
              Reset
            </Button>

            <Button
              disabled={loading}
              variant="outlined"
              color="primary"
              size="small"
              onClick={this.onSubmitHandle}
              className={classes.button}
             >
                 {loading ?<CircularProgress size={20} />:"Submit"}
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

const mapStateToProps = state => ({
  userdata : state.user.user,
  success : state.ads.adsSuccess,
  error:state.ads.adsErr 
})

export default withRouter(compose(connect(mapStateToProps,{startAdsPosting,clearAdsPosting}),withStyles(styles))(VerticalLinearStepper));
