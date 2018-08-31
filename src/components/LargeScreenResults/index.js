import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../resource/images/images.jpg';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import MediaSlider from '../adsSlider';
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

function MediaControlCard(props) {
  
  

  const { classes, theme } = props;

  return (
    

<ExpansionPanel>
<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
<Card className={classes.card} elevation={0}>
     <CardMedia
        className={classes.cover}
        image={`${baseURL}/static/media/${props.ad.media[0]}`}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="body2">{props.ad.title}</Typography>
          <Typography variant="caption" color="textSecondary">
       
              Category:{props.ad.category} , {dateFormate(props.ad.timestamp)}
           
          </Typography>
          <Typography variant="body1">
           {props.ad.discriptions}
          </Typography>
          <Grid container spacing={8}> 
            <Grid item  md={2}>
                     <Typography variant="caption" > 
                    <i class="material-icons iconFix">
                    account_circle
                     </i>
                     {props.ad.username}
                     </Typography>
                    
            </Grid>
            <Grid item  md={3}>
            <Typography variant="caption" > 
                    <i class="material-icons iconFix">
                        phone
                     </i>
                     {props.ad.userphone}
                     </Typography>
            </Grid>
            <Grid item  md={5} noWrap>
            <Typography variant="caption" > 
                    <i class="material-icons iconFix">
                        email
                     </i>
                     {props.ad.useremail}
                     </Typography>
            </Grid>
            <Grid item  md={2}>
            <Typography variant="caption" noWrap > 
                    <i class="material-icons iconFix">
                    location_on
                     </i>
                     {props.ad.userlocations}
                     </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </div>
     
    </Card>
</ExpansionPanelSummary>
<ExpansionPanelDetails>
<MediaSlider media={props.ad.media} />
</ExpansionPanelDetails>
</ExpansionPanel>


  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
