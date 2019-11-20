import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';

import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {
  Link
} from "react-router-dom";

export const mainListItems = (
  <div>


    <ListItem button
    component={Link} to="/dashboard"
    selected
    >
    <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    
      <ListItemText primary="Dashboard" />
    
    </ListItem>
  

    <ListItem button component={Link} to="/"
>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Market" />

    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Links</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Source Code" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Portfolio" />
    </ListItem>

  </div>
);
