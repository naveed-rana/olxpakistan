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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MediaSlider from '../adsSlider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {compose} from 'recompose';
import moment from 'moment';
import {MonetizationOn,Delete} from '@material-ui/icons';
import {startUserAdDelete} from '../redux/actions/searchActions';
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
 };
}

  
 
  
  handleClickOpen = () => {
    
    this.setState({ open: true });
  };
  
  handleClose = () => {
      this.props.startUserAdDelete({id:this.props.ad._id});
      this.setState({ open: false});
  };

close=()=>{
  this.setState({ open: false});
}


  
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
 

  render() {
    const { classes } = this.props;

    return (
        <div>
         <Dialog
          fullScreen={true}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
            >
          <DialogTitle id="form-dialog-title">Confirmations</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Confirmations! after delete your ads permanently delete from your accounts,Are you sure you want to delete?
            </DialogContentText>
              
          </DialogContent>
          <DialogActions>
            <Button onClick={this.close} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Delete
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
          subheader={`Category:${this.props.ad.category}. ${moment(this.props.ad.timestamp).format('ll')}`}
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
         
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          
          <IconButton aria-label="Add to favorites" onClick={this.handleClickOpen}>
            <Delete />
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

export default compose(connect(mapStateToProps,{startUserAdDelete}),withStyles(styles))(SmallScreenResults);
