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

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    

<ExpansionPanel>
<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
<Card className={classes.card} elevation={0}>
     <CardMedia
        className={classes.cover}
        image={img}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="body2">Live From Space</Typography>
          <Typography variant="caption" color="textSecondary">
            Mac Miller
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates, voluptate cumque pariatur aliquid quidem 
          </Typography>
          <Grid container spacing={8}> 
            <Grid item  md={4}>
                     <Typography variant="caption" > 
                    <i class="material-icons iconFix">
                    account_circle
                     </i>
                     Naveed Rana
                     </Typography>
                    
            </Grid>
            <Grid item  md={4}>
            <Typography variant="caption" > 
                    <i class="material-icons iconFix">
                        phone
                     </i>
                     03034766669
                     </Typography>
            </Grid>
            <Grid item  md={4}>
            <Typography variant="caption" > 
                    <i class="material-icons iconFix">
                        email
                     </i>
                     rana@gmail.com
                     </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </div>
     
    </Card>
</ExpansionPanelSummary>
<ExpansionPanelDetails>
<MediaSlider />
</ExpansionPanelDetails>
</ExpansionPanel>


  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
