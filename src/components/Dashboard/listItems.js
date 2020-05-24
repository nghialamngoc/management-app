import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GestureIcon from '@material-ui/icons/Gesture';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import EqualizerIcon from '@material-ui/icons/Equalizer';

export const mainListItems = (
  <div>
    <NavLink to="/" exact className="navLink">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Api Management" />
      </ListItem>
    </NavLink>
    <NavLink to="/css-practice" exact className="navLink">
      <ListItem button>
        <ListItemIcon>
          <GestureIcon />
        </ListItemIcon>
        <ListItemText primary="CSS Practice" />
      </ListItem>
    </NavLink>
    <NavLink to="/multiple-chart-demo" exact className="navLink">
      <ListItem button>
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="Chart Demo" />
      </ListItem>
    </NavLink>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <NavLink to="/about" exact className="navLink">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </NavLink>
  </div>
);
