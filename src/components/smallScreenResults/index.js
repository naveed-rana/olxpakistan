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
import MediaSlider from '../adsSlider';
import Icon from '@material-ui/core/Icon';
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

class SmallScreenResults extends React.Component {
  state = {
     expanded: false,
     open: false,
     message:'',
  };

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
    this.setState({ open: false, message:''});
  };
  
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  onChangeHandler=(e)=>{
    
    this.setState({message:e.target.value});
  }

  onClickHandler=()=>{
    let obj = {
      title:this.props.ad.title,
      category:this.props.ad.category,
      condition:this.props.ad.price,
      price:this.props.ad.price,
      discriptions:this.props.ad.discriptions,
      tag:this.props.ad.tag,
      user:this.props.ad.user,
      username:this.props.ad.username,
      userphone:this.props.ad.cellNo,
      useremail:this.props.ad.useremail,
      userlocations:this.props.ad.userlocations,
      media:this.props.ad.media,
      timestamp:this.props.ad.timestamp
    }
    toast.success("Saved successfully for later view!");
  }

  render() {
    const { classes,large } = this.props;
    const {message} = this.state;

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
            <Button onClick={this.handleClose} color="primary">
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
            <i class="material-icons iconFixpric">
              monetization_on
              </i>
          {this.props.ad.price} only &nbsp; &nbsp; &nbsp;  &nbsp;
            </Typography>
          }

         
          title={this.props.ad.title}
          subheader={dateFormate(this.props.ad.timestamp)}
        />
        <CardMedia
          className={classes.media}
          image={`${baseURL}/static/media/${this.props.ad.media[0]}`}
          title={this.props.ad.tag}
        />
        <CardContent>
          <Typography component="p">
            {this.props.ad.discriptions}
          </Typography>
         
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={this.onClickHandler}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Add to favorites" onClick={this.handleClickOpen}>
            <Icon >message</Icon>
          </IconButton>

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
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <MediaSlider media = {this.props.ad.media}/>
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
