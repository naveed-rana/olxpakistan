
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {AccountCircle,Dashboard,Home,NoteAdd,Message,YoutubeSearchedFor,Visibility,Lock} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import * as routes from '../../constants';


export const mailFolderListItems = (
  <div>
   
    <ListItem button component={Link} to={routes.ACCOUNT_HOME}>
      <ListItemIcon>
       <AccountCircle />
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItem>
    <ListItem button component={Link} to={routes.MYADS}>
      <ListItemIcon>
      <Dashboard />
      </ListItemIcon>
      <ListItemText primary="My ads" />
    </ListItem>
    <ListItem button component={Link} to={routes.MESSAGE}>
      <ListItemIcon>
      <Message />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button component={Link} to={routes.POSTING}>
      <ListItemIcon>
        <NoteAdd />
      </ListItemIcon>
      <ListItemText primary="Post an Ad" />
    </ListItem> 
  </div>
);

export const otherMailFolderListItems = (
  <div>
    
    <ListItem button component={Link} to={routes.HOME}>
      <ListItemIcon>
      <Home />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to={routes.SAVEDADS}>
      <ListItemIcon>
      <Visibility />
      </ListItemIcon>
      <ListItemText primary="View Later" />
    </ListItem>
    <ListItem button component={Link} to={routes.SEARCH}>
      <ListItemIcon>
        <YoutubeSearchedFor />
      </ListItemIcon>
      <ListItemText primary="Search An Ad" />
    </ListItem>
  
    <ListItem button component={Link} to={routes.LOGIN}>
      <ListItemIcon>
        <Lock />
      </ListItemIcon>
      <ListItemText primary="Login" />
    </ListItem>
    <ListItem button component={Link} to={routes.SIGNUP}>
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <ListItemText primary="Sign Up" />
    </ListItem>
  </div>
);