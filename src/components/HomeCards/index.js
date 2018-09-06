import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  card: {
    minWidth: 10,
    marginTop:2
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
    data:[]
  };

  componentDidMount() {
    this.setState({data:this.props.data})
    setInterval(this.handleNext, 3000);
  }

  handleNext = () => {
        const {activeStep} = this.state;
      if( activeStep === 4){
       this.setState({activeStep:0});
      }
      else{
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));}
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep ,data} = this.state;

    const maxSteps = data.length;

    return (
        data.length>0 ?
      <div className={classes.root}>
      
        <Paper square elevation={0} className={classes.header}>
          <Typography>{data[activeStep].title}</Typography>
        </Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {data.map((step,i) => (
            <div key={i}>

         <Card className={classes.card}>   
        <CardMedia
          className={classes.media}
          image={require(`../../uploads/${step.media[0]}`)}
          title={step.tag}
        />
        <CardContent>
          <Typography component="p">
            {step.discriptions}
          </Typography>
        </CardContent>
        </Card>
            </div>
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
      </div>
      :"loading...."
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);
