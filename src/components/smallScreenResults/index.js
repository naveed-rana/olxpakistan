import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Message from '@material-ui/icons/Message';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import MediaSlider from '../adsSlider';
import {toast} from 'react-toastify';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {compose} from 'recompose';
import moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';
import {startSendMessage} from '../redux/actions/messageActions';
const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';

const styles = theme => ({
  card: {
    minWidth: 10,
    marginTop:2
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});



class SmallScreenResults extends React.Component {
   
constructor(props) {
  super(props)
  this.state = {
    expanded: false,
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
    this.setState({ open: false, message:''});
  };

close=()=>{
  this.setState({ open: false});
}


  
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  onChangeHandler=(e)=>{
    
    this.setState({message:e.target.value});
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
    const { classes,large } = this.props;
    const {message,viewlater} = this.state;

    return (
        <div>
         <Dialog
          fullScreen={large==='large'?false:true}
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



            <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.ad.username.charAt(0)}
            </Avatar>
          }

          action={
            <Typography component="p" className="price">
              <MonetizationOn className="iconFixpric"/>
          {this.props.ad.price} only &nbsp; &nbsp; &nbsp;  &nbsp;
            </Typography>
          }

         
          title={this.props.ad.title}
          subheader={`${moment(this.props.ad.timestamp).format('ll')}`}
        />
        <CardMedia
          className={classes.media}
          image={`${baseURL}/static/${this.props.ad.media[0]}`}
          title={this.props.ad.tag}
        />
        <CardContent>
          <Typography component="p">
            {this.props.ad.discriptions}
          </Typography>
          <Typography variant="caption" className={classes.marginTops} > 
         Category: <b> {this.props.ad.category} </b> &nbsp;&nbsp;&nbsp;&nbsp;
         Conditions:<b> {this.props.ad.condition} </b>&nbsp;&nbsp;&nbsp;&nbsp;
         Tags:<b> {this.props.ad.tag} </b>
         </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          
          {viewlater ? 
           <Tooltip title="Save for later View" placement="top">
           <IconButton aria-label="Add to favorites" onClick={this.onRemoveHandler}>
           <FavoriteIcon className="colorSet"/>
         </IconButton>
          </Tooltip>
          :
          <Tooltip title="Save for later View" placement="top">
          <IconButton aria-label="Add to favorites" onClick={this.onClickHandler}>
            <FavoriteIcon />
          </IconButton>
         </Tooltip>
        }
          <Tooltip title="Message" placement="right">
          <IconButton aria-label="Add to favorites" onClick={this.handleClickOpen}>
            <Message />
          </IconButton>
          </Tooltip>
          <Tooltip title="Expand and get more details" placement="left">
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          </Tooltip>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <MediaSlider media={this.props.ad.media} username={this.props.ad.username} userphone = {this.props.ad.userphone} useremail={this.props.ad.useremail} userlocations = {this.props.ad.userlocations}/>
          </CardContent>
        </Collapse>
      </Card>
        </div>
    );
  }
}

SmallScreenResults.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userid:state.user.user._id,
})

export default compose(connect(mapStateToProps,{startSendMessage}),withStyles(styles))(SmallScreenResults);
