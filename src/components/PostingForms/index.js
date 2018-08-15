import React from 'react';
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


function getStepContent(step) {
  switch (step) {
    case 0:
      return (
    <Grid container spacing={8} alignItems="flex-end">
        <Grid
            item
            style={{
            textAlign: 'right'
        }}
            md={1}>
            <i className="material-icons">
            subtitles
            </i>
        </Grid>
        <Grid item md={11}>
            <TextField
                fullWidth={true}
                required={true}
                label="Branch Incharge"
                />
        </Grid>
    </Grid>
      )
          
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    case 3:
      return (
        <Grid container spacing={8}> 
          <Grid item xs={12} md={12} className="paddingTop">
          <Grid container spacing={8} alignItems="flex-end">
        <Grid
            item
            style={{
            textAlign: 'right'
             }}
            md={1}
            xs={2}
            >
            <i className="material-icons">
            subtitles
            </i>
        </Grid>
        <Grid item md={11} xs={10}>
            <TextField
                fullWidth={true}
                required={true}
                label="Your Name"
                />
        </Grid>
    </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
          <Grid container spacing={8} alignItems="flex-end">
        <Grid
            item
            style={{
            textAlign: 'right'
             }}
            md={1}
            xs={2}
            >
            <i className="material-icons">
            subtitles
            </i>
        </Grid>
        <Grid item md={11} xs={10}> 
            <TextField
                   InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i className="material-icons iconFixfield">
                        location_on
                        </i>
                      </InputAdornment>
                    ),
                  }}
                fullWidth={true}
                required={true}
                label="Phone"
                />
        </Grid>
    </Grid>
          </Grid>
          <Grid item xs={12} md={12} className="paddingTop">
            <Grid container spacing={8}> 
            <Grid
            item
            style={{
            textAlign: 'right'
             }}
            md={1}
            xs={2}
            >
            <i className="material-icons">
            subtitles
            </i>
        </Grid>
              <Grid item xs={10} md={11}>
              <Map />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

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
                  {getStepContent(index)}
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
