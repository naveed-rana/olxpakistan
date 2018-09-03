import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import MediaSlider from '../adsSlider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {compose} from 'recompose';
import {startSendMessage} from '../redux/actions/messageActions';
import {connect} from 'react-redux';
 
const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  discriptions:{
    width:'580px'
  }
});

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


function dateFormate(time){
  var currentdate = new Date(time); 
  var datetime = monthNames[currentdate.getMonth()] + " "
          + currentdate.getDate() + ", "
          + currentdate.getFullYear() + "  "  
          + currentdate.getHours() + ":"  
          + currentdate.getMinutes() + ":" 
          + currentdate.getSeconds();
      return datetime;
 }


class MediaControlCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
      open: false,
      message:'',
    };
  }

onClickHandler = () =>{
  alert()
}

handleClickOpen = () => {
  this.setState({ open: true });
};

handleClose = () => {
  let data = {
    message:this.state.message,
    username: this.props.ad.username,
    userphone: this.props.ad.userphone,
    title:this.props.ad.title,
    adsid: this.props.ad._id,
    userid: this.props.userid,
  }
  this.props.startSendMessage(data);
  this.setState({ open: false,message:''});
};

close=()=>{
  this.setState({ open: false});
}

onChangeHandler = (e) =>{
  this.setState({message:e.target.value});
}

  handleChange = complaintid => (event, expanded) => {

    if(event.target.classList.contains("otherevent")){
      return null;
    }else{
    this.setState({
      expanded: expanded
        ? complaintid
        : false
    });
  
  }
  }


  render() {
    const { classes} = this.props;
    const {expanded,message} = this.state;
    return (
      <div>
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
            >
          <DialogTitle id="form-dialog-title">Message</DialogTitle>
          <DialogContent>
            <DialogContentText>
             Please send concise message to the saller and deal with.
            </DialogContentText>
            <Grid container spacing={8}> 
              <Grid item xs={12} md={12}>
              <TextField
              margin="dense"
              id="name"
              label="Name"
              value={this.props.ad.username}
              fullWidth
            />
              </Grid>
              <Grid item xs={12} md={12}>
              <TextField
              margin="dense"
              value={this.props.ad.userphone}
              label="Phone No"
              fullWidth
            />
              </Grid>
              <Grid item xs={12} md={12}>
              <TextField
              onChange={this.onChangeHandler}
              autoFocus
              multiline={true}
              margin="dense"
              label="Message"
              value={message}
              fullWidth
            />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.close} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>


        <ExpansionPanel
         expanded={expanded === this.props.ad._id}
         onChange={this.handleChange(this.props.ad._id)}
        >
<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
<Card className={classes.card} elevation={0}>
     <CardMedia
        className={classes.cover}
        image={`${baseURL}/static/media/${this.props.ad.media[0]}`}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
        <Grid container spacing={8}> 
            <Grid item xs={6} md={6}>
            <Typography variant="body2">{this.props.ad.title}</Typography>
            </Grid>
            <Grid item xs={6} md={6} >
            <Grid container spacing={8}> 
              <Grid item xs={6} md={6} align="right" className="otherevent">
              <i className="material-icons iconFix otherevent" onClick=      {this.onClickHandler}>
              favorite
                </i>
                <i className="material-icons iconFix otherevent" onClick={this.handleClickOpen}>
                message
                </i>
              </Grid>
              <Grid item xs={6} md={6}>
              <Typography component="p" className="price">
            <i class="material-icons iconFixpric">
              monetization_on
              </i>
          {this.props.ad.price} only
            </Typography>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
          
          <Typography variant="caption" color="textSecondary">
       
              Category:{this.props.ad.category} , {dateFormate(this.props.ad.timestamp)}
           
          </Typography>
          
          <Typography variant="body1" className={classes.discriptions}>
           {this.props.ad.discriptions}
          </Typography>
          <Grid container spacing={8}> 
            <Grid item  md={2}>
                     <Typography variant="caption" > 
                    <i class="material-icons iconFix">
                    account_circle
                     </i>
                     {this.props.ad.username}
                     </Typography>
                    
            </Grid>
            <Grid item  md={3}>
            <Typography variant="caption" > 
                    <i class="material-icons iconFix">
                        phone
                     </i>
                     {this.props.ad.userphone}
                     </Typography>
            </Grid>
            <Grid item  md={5} >
            <Typography variant="caption" > 
                    <i class="material-icons iconFix">
                        email
                     </i>
                     {this.props.ad.useremail}
                     </Typography>
            </Grid>
            <Grid item  md={2}>
            <Typography variant="caption" > 
                    <i class="material-icons iconFix">
                    location_on
                     </i>
                     {this.props.ad.userlocations}
                     </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </div>
     
    </Card>
</ExpansionPanelSummary>
<ExpansionPanelDetails>
<MediaSlider media={this.props.ad.media} />
</ExpansionPanelDetails>
</ExpansionPanel>
      </div>
    )
  }
}



MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  userid:state.user.user._id,
})

export default compose(connect(mapStateToProps,{startSendMessage}),withStyles(styles, { withTheme: true }))(MediaControlCard);
