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
import {compose} from 'recompose';
import {startUserAdDelete} from '../redux/actions/searchActions';
import {connect} from 'react-redux';
import  {MonetizationOn,Delete} from '@material-ui/icons';
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
    const {expanded} = this.state;
    return (
      <div>
      <Dialog
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

          <Typography variant="body2">{this.props.ad.title}</Typography>
          <Typography variant="caption" color="textSecondary">
       
              Category:{this.props.ad.category} , {dateFormate(this.props.ad.timestamp)}
           
          </Typography>
          
          <Typography variant="body1" className={classes.discriptions}>
           {this.props.ad.discriptions}
          </Typography>
          <Grid container spacing={8}> 
          <Grid item xs={6} md={3}>
              <Typography component="p" className="price">
          
              <MonetizationOn className="iconFixpric"/>
            
          {this.props.ad.price} only
            </Typography>
              </Grid>

              <Grid item xs={6} md={9} className="otherevent">
              
                <Delete  className="iconFix otherevent" onClick={this.handleClickOpen}/>
             
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

export default compose(connect(mapStateToProps,{startUserAdDelete}),withStyles(styles, { withTheme: true }))(MediaControlCard);
