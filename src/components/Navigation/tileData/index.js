
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';
import * as routes from '../../constants';


export const mailFolderListItems = (
  <div>
   
    <ListItem button component={Link} to={routes.ACCOUNT_HOME}>
      <ListItemIcon>
        <Icon>account_circle</Icon>
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItem>
    <ListItem button component={Link} to={routes.MYADS}>
      <ListItemIcon>
      <Icon>dashboard</Icon>
      </ListItemIcon>
      <ListItemText primary="My ads" />
    </ListItem>
    <ListItem button component={Link} to={routes.MESSAGE}>
      <ListItemIcon>
      <Icon>message</Icon>
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button component={Link} to={routes.POSTING}>
      <ListItemIcon>
        <Icon>note_add</Icon>
      </ListItemIcon>
      <ListItemText primary="Post an Ad" />
    </ListItem> 
  </div>
);

export const otherMailFolderListItems = (
  <div>
    
    <ListItem button component={Link} to={routes.HOME}>
      <ListItemIcon>
      <Icon>home</Icon>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to={routes.SAVEDADS}>
      <ListItemIcon>
      <Icon>visibility</Icon>
      </ListItemIcon>
      <ListItemText primary="View Later" />
    </ListItem>
    <ListItem button component={Link} to={routes.SEARCH}>
      <ListItemIcon>
        <Icon>youtube_searched_for</Icon>
      </ListItemIcon>
      <ListItemText primary="Search An Ad" />
    </ListItem>
  
    <ListItem button component={Link} to={routes.LOGIN}>
      <ListItemIcon>
        <Icon>lock</Icon>
      </ListItemIcon>
      <ListItemText primary="Login" />
    </ListItem>
    <ListItem button component={Link} to={routes.SIGNUP}>
      <ListItemIcon>
        <Icon>account_circle</Icon>
      </ListItemIcon>
      <ListItemText primary="Sign Up" />
    </ListItem>
  </div>
);