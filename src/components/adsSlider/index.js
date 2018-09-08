import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Grid from '@material-ui/core/Grid';
const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';



const styles = theme => ({
  root: {
    minWidth: 10,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 50,
    paddingBottom:10,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxHeight: 500,
    minWidth: 10,
    overflow: 'hidden',
    width: '100%',
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
    tutorialSteps:[],
    photoIndex: 0,
    isOpen: false,
    images:[]
  };

  componentWillMount() {
   let tutorialStep = [];
   let image = [];
    this.props.media.forEach(item => {
      tutorialStep.push({imgPath:item});
      image.push(`${baseURL}/static/${item}`);
    });
    this.setState({tutorialSteps:tutorialStep,images:image});
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };
  onClickHandler = () => {
    this.setState({isOpen:true});
  }

  render() {
    const { classes, theme } = this.props;
    const { activeStep ,tutorialSteps,photoIndex, isOpen,images} = this.state;
 


    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
   
          <Grid container spacing={8}> 
            <Grid item  >
                     <Typography variant="caption" > 
                    <i className="material-icons iconFix">
                    account_circle
                     </i>
                     {this.props.username}
                     </Typography>
                    
            </Grid>
            <Grid item  >
            <Typography variant="caption" > 
                    <i className="material-icons iconFix">
                        phone
                     </i>
                     {this.props.userphone}
                     </Typography>
            </Grid>
            <Grid item  >
            <Typography variant="caption" > 
                    <i className="material-icons iconFix">
                        email
                     </i>
                     {this.props.useremail}
                     </Typography>
            </Grid>
            <Grid item >
            <Typography variant="caption" > 
                    <i className="material-icons iconFix">
                    location_on
                     </i>
                     {this.props.userlocations}
                     </Typography>
            </Grid>
          </Grid>
        
        </Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step,i) => (
            <img  key={i} className={classes.img} onClick={this.onClickHandler} src={`${baseURL}/static/${step.imgPath}`} alt={step.label} />
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
        <div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
          </div>
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};



export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);
