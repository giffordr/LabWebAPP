import './Gallery.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import {
  HashRouter, Route, Routes, Link,
} from 'react-router-dom';

class Gallery extends React.Component {
 
render() {
  
  return (
    <div className="App"> 
      <p>
       <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>
      <Typography variant="h5" align="center">As the project progresses, a gallery view of the installation, and participants interacting with it, will be posted here.</Typography>
       </Box>
      </p>
    </div>
  );
  
}
}
export default Gallery;

