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
import InputAdornment from '@material-ui/core/InputAdornment';

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
        <Grid container spacing={8}> 
          <Grid item xs={12} md={12} className="paddingTop">
          <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i class="material-icons iconFixfield">
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
          
    case 1:
      return  (
        <Grid container spacing={8}> 
          <Grid item xs={12} md={12} className="paddingTop">
          <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i class="material-icons iconFixfield">
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
        <Grid container spacing={8}> 
          <Grid item xs={12} md={12} className="paddingTop">
          <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i class="material-icons iconFixfield">
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
    case 3:
      return (
        <Grid container spacing={8}> 
          <Grid item xs={12} md={12} className="paddingTop">
          <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i class="material-icons iconFixfield">
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
