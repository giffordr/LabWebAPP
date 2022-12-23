import './About.css';
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
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Tooltip from '@mui/material/Tooltip';
import ExpandMore from '../details/ExpandMore';
import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';

import Ray from '../ray/Ray';
import Kathleen from '../kathleen/Kathleen';
import Statement from '../statement/Statement';


class About extends React.Component {

 
render() {
  
  return (
  <div className="Body">
    <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="center" m='auto'>
       
        <Card alignItems="center" justifyContent="center" style={{ border: "none", boxShadow: "none" }} onClick={this.handelBio}>
        <CardActionArea style={{borderRadius: '50%'}} sx={{'&:hover': {opacity: [0.8, 0.7, 0.6],},}} component={Link} to="/about/ray" >
          <Avatar
            alt="Ray Gifford"
            src="./components/about/Ray_pic.jpg"
            sx={{ width: 'calc(50px + 10vmin)', height: 'calc(50px + 10vmin)'}}
          />
          
        </CardActionArea>
        
          <Typography variant="body2" align="center" justifyContent="center"> Ray Gifford</Typography>
        </Card>
    
      <Card alignItems="center" justifyContent="center" style={{ border: "none", boxShadow: "none" }} >
        <CardActionArea style={{borderRadius: '50%'}} sx={{'&:hover': {opacity: [0.8, 0.7, 0.6],},}} component={Link} to="/about/kathleen" > 
     
        <Avatar
          alt="Kathleen Yuan"
          src="./components/kathleen/KathleenPic.PNG"
          sx={{ width: 'calc(50px + 10vmin)', height: 'calc(50px + 10vmin)' }}
        />
           </CardActionArea>
        
     
        <Typography variant="body2" align="center" justifyContent="center">Kathleen Yuan</Typography>
      </Card>
      </Stack>
    
      <p>
        <Divider />
      </p>
  </Box>
      <div>
        <HashRouter >
            <Switch >
            <Route path="/about/kathleen" component={Kathleen} />
            <Route path="/about/ray" component={Ray} />
            <Route path="/about" component={Statement} />
            </Switch>
        </HashRouter>
      </div>
    
  </div>
  );
  
}
}
export default About;
