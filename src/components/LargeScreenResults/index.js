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
import {Favorite,MonetizationOn,Message} from '@material-ui/icons';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import MediaSlider from '../adsSlider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {compose} from 'recompose';
import Tooltip from '@material-ui/core/Tooltip';
import {startSendMessage} from '../redux/actions/messageActions';
import {connect} from 'react-redux';
import {toast} from 'react-toastify';
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
  },
  marginTops:{
    marginTop:10
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
      getItems:[],
      viewlater:false
    };
  }

   
  componentDidMount() {
    let data =JSON.parse(localStorage.getItem('savedads'));
    let view =false;
    if(data){
      data.forEach(element => {
      
       if(element._id === this.props.ad._id)
         {
           view = true;
         }
      });
    
    this.setState({getItems:data,viewlater:view});}
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
    userid: this.props.ad.user,
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

  onClickHandler=()=>{

    var {getItems} = this.state;
    let obj = {
      _id:this.props.ad._id,
      title:this.props.ad.title,
      category:this.props.ad.category,
      condition:this.props.ad.price,
      price:this.props.ad.price,
      discriptions:this.props.ad.discriptions,
      tag:this.props.ad.tag,
      user:this.props.ad.user,
      username:this.props.ad.username,
      userphone:this.props.ad.userphone,
      useremail:this.props.ad.useremail,
      userlocations:this.props.ad.userlocations,
      media:this.props.ad.media,
      timestamp:this.props.ad.timestamp
    }

    getItems.push(obj);
    localStorage.setItem('savedads',JSON.stringify(getItems));
    this.setState({getItems,viewlater:true});
    toast.success("Saved successfully for later view!");
  }

  onRemoveHandler = () => {
    let {getItems} = this.state;
    let newlist = getItems.filter((item) => item._id !== this.props.ad._id);
    localStorage.setItem('savedads', JSON.stringify(newlist));
    this.setState({getItems:newlist,viewlater: false});
    toast.success("Successfully remove from later view list!");
}

  render() {
    const { classes} = this.props;
    const {expanded,message,viewlater} = this.state;
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
        image={`${baseURL}/static/${this.props.ad.media[0]}`}
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
              {viewlater ?
              <Tooltip title="Save for later view" placement="top">
  
               <Favorite onClick={this.onRemoveHandler} className="iconFix otherevent colorSet"/>
                
              </Tooltip>
              :
              <Tooltip title="Save for later view" placement="top">
             
              <Favorite onClick={this.onClickHandler} className="iconFix otherevent"/>
                
                </Tooltip>
              }
              <Tooltip title="Send Message" placement="top">
                
                <Message className="iconFix otherevent" onClick={this.handleClickOpen}/>
               
             </Tooltip>
              </Grid>
              <Grid item xs={6} md={6}>
              <Typography component="p" className="price">
              <Tooltip title="Price" placement="top">
            
              <MonetizationOn className="iconFixpric"/>
             
              </Tooltip>
          {this.props.ad.price} only
            </Typography>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
          
          <Typography variant="caption" color="textSecondary">
       
              {dateFormate(this.props.ad.timestamp)}
           
          </Typography>
          
          <Typography variant="body1" className={classes.discriptions}>
           {this.props.ad.discriptions}
          </Typography>
         <Typography variant="caption" className={classes.marginTops} > 
         Category: <b> {this.props.ad.category} </b> &nbsp;&nbsp;&nbsp;&nbsp;
         Conditions:<b> {this.props.ad.condition} </b>&nbsp;&nbsp;&nbsp;&nbsp;
         Tags:<b> {this.props.ad.tag} </b>
         </Typography>
        </CardContent>
      </div>
     
    </Card>
</ExpansionPanelSummary>
<ExpansionPanelDetails>
<MediaSlider media={this.props.ad.media} username={this.props.ad.username} userphone = {this.props.ad.userphone} useremail={this.props.ad.useremail} userlocations = {this.props.ad.userlocations}/>
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
