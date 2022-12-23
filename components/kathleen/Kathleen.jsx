import './Kathleen.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';

class About extends React.Component {
      state = {
    expanded1: false,
    expanded2: false,
    expanded3: false,
};
  
handleExpandClick1 = () => {   
  this.setState(prevState => ({expanded1: !prevState.expanded1}));  
};
handleExpandClick2 = () => {    
  this.setState(prevState => ({expanded2: !prevState.expanded2})); 
};
handleExpandClick3 = () => {    
  this.setState(prevState => ({expanded3: !prevState.expanded3})); 
};
  
componentDidMount(){
          const section = document.querySelector( '#Bio' );
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
}

domes = (
    <React.Fragment> 
      <ImageList
                  sx={{ maxWidth: 500, margin: 0, padding:0 }}
                  variant="quilted"
                  cols={2}
                  rowHeight={100}
                >
                    <ImageListItem sx={{ maxWidth: 500}} cols={2}>
                      <img
                        src='./components/ray/domes-together.jpg'
                        alt='domes together'
                        loading="lazy"
                      />
                    </ImageListItem>
                  <ImageListItem >
                      <img
                        src='./components/ray/dome-1.jpg'
                        alt='dome 1'
                        loading="lazy"
                      />
                    </ImageListItem>
                  <ImageListItem >
                      <img
                        src='./components/ray/dome-2.jpg'
                        alt='dome 2'
                        loading="lazy"
                      />
                    </ImageListItem>
                  
                </ImageList>
        
    </React.Fragment>);

 
render() {
  
  return (
      <div>
  <div className="Body">
    <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>
      <Typography variant="h5" align="center" id="Bio"> 
            Biography
      </Typography>
    <p>
      <Typography variant="body2"> 
        Kathleen Yuan (they/them) is a new media sound artist and design researcher from the San Francisco Bay Area. 
        Their work takes the forms of participatory VR music platforms, audiovisual installations, and new musical interfaces 
        for group performance and reflection. Currently, they are completing their M.A. in Music, Science, and Technology at 
        Stanford University's Center for Computer Research in Music and Acoustics (CCRMA). Prior to Stanford, they received a B.M. 
        Violin Performance, B.S. Journalism, and Segal Design Certificate from Northwestern University.

      </Typography>
    </p>
      <Typography variant="h5" align="center" id="Bio"> 
            Selected Works
      </Typography>
    </Box>
  </div>
    <p>
      <Box sx={{ flexGrow: 1, maxWidth: 1150 }} display="flex" alignItems="center" justifyContent="center" m="auto">      
        <Grid container spacing={2} display="flex" alignItems="center" justifyContent="center" >
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 370}}>
              <CardMedia
                component="img"
                height="200"
                image="./components/kathleen/DLVR.png"
                alt="DLVR"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  "DLVR"
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded1}
                  onClick={this.handleExpandClick1}
                  aria-expanded={this.state.expanded1}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              
              <Collapse in={this.state.expanded1} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                    <span className="Title">Deep Listening in Virtual Reality</span> is a social VR music-making platform that fosters connection and reflection 
                    through group improvisation in the form of accumulated sonic meditation recordings.
                  </Typography>
                  <Button variant="contained" href='https://youtu.be/1nK0W4FuoNY' align="center">Video</Button>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 370}}>
              <CardMedia
                component="img"
                height="200"
                image="./components/kathleen/Inbox.jpg"
                alt="Inbox"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  "Inbox"
                </Typography>     
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded2}
                  onClick={this.handleExpandClick2}
                  aria-expanded={this.state.expanded2}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                     <span className="Title">Inbox</span> is a physical musical installation in which audiences submit anonymous messages that will never be 
                    delivered to their intended recipients to a reflective, soundscape-producing box. 
                  </Typography>
                   <Button variant="contained" href='https://www.youtube.com/watch?v=9yhjOnkkY2Y' align="center">Video</Button>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 370}}>
             <CardMedia
                component="img"
                height="200"
                image="./components/kathleen/RAM.png"
                alt="Inbox"
              />
                
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  "Random Access Memories"
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded3}
                  onClick={this.handleExpandClick3}
                  aria-expanded={this.state.expanded3}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              <Collapse in={this.state.expanded3} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                     <span className="Title">Random Access Memories</span> is an audiovisual exploration of unreliable, 
                    uncontrollable, and traumatic memories represented as intrusive thoughts, 
                    in which the audience progresses the nonlinear narrative by keypress.
                  </Typography>
                  <Button variant="contained" href='https://youtu.be/1oVARq0e0hE' align="center">Video</Button>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Box>
      </p>
  </div>
  );
  
}
}
export default About;
