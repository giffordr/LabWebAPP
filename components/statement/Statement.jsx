import './Statement.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ExpandMore from '../details/ExpandMore';
import {
  HashRouter, Route, Routes, Link,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';

class About extends React.Component {
  
componentDidMount(){
          const section = document.querySelector( '#Bio' );
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
}
 
render() {
  
  return (
  <div className="Body">
    <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>
      <Typography variant="h5" align="center" id="Bio"> 
            Artists' Statement
      </Typography>
    <p>
      <Typography variant="body2"> 
        TODO: Add artist statement
      </Typography>
    </p>
       
    </Box>
  </div>
  );
  
}
}
export default About;
