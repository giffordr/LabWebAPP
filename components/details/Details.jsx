import './Details.css';
import * as React from 'react';
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

class Details extends React.Component {
  // Create state
state = {
    expanded1: false,
    expanded2: false,
    expanded3: false,
    expanded4: false,
    expanded5: false,
    expanded6: false,
    expanded7: false,
    expanded8: false,
    expanded9: false,
};

componentDidMount(){
          const section = document.querySelector( '#Title' );
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
}
  
handleExpandClick1 = () => {   
  this.setState(prevState => ({expanded1: !prevState.expanded1}));  
};
handleExpandClick2 = () => {    
  this.setState(prevState => ({expanded2: !prevState.expanded2})); 
};
handleExpandClick3 = () => {    
  this.setState(prevState => ({expanded3: !prevState.expanded3})); 
};
handleExpandClick4 = () => {    
  this.setState(prevState => ({expanded4: !prevState.expanded4}));  
};
handleExpandClick5 = () => {    
  this.setState(prevState => ({expanded5: !prevState.expanded5}));  
};
handleExpandClick6 = () => {    
  this.setState(prevState => ({expanded6: !prevState.expanded6})); 
};
handleExpandClick7 = () => {    
  this.setState(prevState => ({expanded7: !prevState.expanded7}));  
};
handleExpandClick8 = () => {    
  this.setState(prevState => ({expanded8: !prevState.expanded8})); 
};
handleExpandClick9 = () => {   
  this.setState(prevState => ({expanded9: !prevState.expanded9}));  
};
  
render() {
  
  return (
    <div className="Body" id ="Title">
    
    <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>
      <p> 
        <div className = "Description" >
          <Typography variant="h5" align="center"> 
             Detailed Software Desciption
          </Typography>
        </div>
      </p>
      
      <Divider/>
      
      <p> 
        <div className = "Description">
          <Typography variant="Body"> 
             All computation for <span className="Title">Centering</span> takes place on a small Linux embedded system (RaspberryPi 4+). We found that while it's compact, it's limited CPU didn't allow for realtime interactions. However, with the addition of a <a href="https://en.wikipedia.org/wiki/Tensor_Processing_Unit">Tensor Processing Unit (TPU)</a> accelerator, we were able to achieve an object detection model inference speed below the frame rate of the camera, and implement the algorithm detailed below, to provide realtime interaction with the space.  
          </Typography>
        </div>
      </p>
      <Divider/>
    </Box>
              
      <p> 
        <div className = "Description">
          <Typography variant="h6" align="center"> 
               A series of pictures to help conceptualize the object dection and tracking algorithm:
          </Typography>
        </div>
      </p>
      
      <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center" justifyContent="center" m="auto">      
        <Grid container spacing={2} display="flex" alignItems="center" justifyContent="center">
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 310}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/SimplifiedSetup.png"
                alt="Paella dish"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  1. Simplified Setup
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
                    Pictured here are two participants exploring the space with 5.1 (5 speakers, 1 subwoofer) speaker array, and overhead camera.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 310}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/TopDownView.png"
                alt="Paella dish"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  2. Overhead Camera
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
                    We chose an overhead camera, to simplify our tracking setup. Our algorithm, in this case, will not have to estimate depth. Instead it only has to determine position on a 2D plane.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 310}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/DetectionModel.png"
                alt="Paella dish"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  3. Object Detection
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
                    We use a tensorflow based <a href="https://en.wikipedia.org/wiki/Convolutional_neural_network">convolutional neural network</a> for mobile applications (mobilenet), pretrained to detect people. With our TPU acclerator, the inference speed of our mobilenet is ~20 ms. This falls well below the framerate of the camera, allowing for realtime tracking and interactive sound synthesis. Our algorithm will only proceed with predictions >80% certainty.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 310}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/ComputeCentroids.png"
                alt="Paella dish"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  4. Compute Centroids
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded4}
                  onClick={this.handleExpandClick4}
                  aria-expanded={this.state.expanded4}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              <Collapse in={this.state.expanded4} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                    From the corners of the 2D bounding boxes, the object centroids are computed.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 310}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/UniqueLables.png"
                alt="Paella dish"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  5. Labeling
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded5}
                  onClick={this.handleExpandClick5}
                  aria-expanded={this.state.expanded5}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              <Collapse in={this.state.expanded5} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                    Unique lables are assigned to every detected individual in the space, in the current frame.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 310}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/KNN.png"
                alt="Paella dish"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  6. Euclidean Distance
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded6}
                  onClick={this.handleExpandClick6}
                  aria-expanded={this.state.expanded6}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              <Collapse in={this.state.expanded6} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                      The next frame is grabbed from the frame buffer, and repeats steps 3 and 4. Here the object detector finds that a third individual has entered the space. 
                    The algorithm computes the euclidean distance between all centroids on the current frame, and all centroids on the previous frame.  
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 310}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/NextFrame.png"
                alt="Paella dish"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  7. <a href="https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm">K-Nearest Neighbors</a>
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded7}
                  onClick={this.handleExpandClick7}
                  aria-expanded={this.state.expanded7}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              <Collapse in={this.state.expanded7} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                    Centroids in the current frame, with the smallest computed euclidean distance from centroids in the previous frame, are passed their respective unique label. With an inference speed of ~20ms, it's expected that very little movement has taken place between frames. The third centroid is given a new unique label. Similarly, if a centroid dissappears (i.e. an individual leaves the space) their unique label will be pruned, so long as the centroid has not been found within 20 frames. This gives the label pruning a small window to find the individual again, in the event that the object detector briefly loses its >80% confidence.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 310}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/ComputeCoordinates.png"
                alt="Paella dish"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  8. UDP Messages
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded8}
                  onClick={this.handleExpandClick8}
                  aria-expanded={this.state.expanded8}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              <Collapse in={this.state.expanded8} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                    Along with computed euclidean distance between centroids in the current frame, polar coordinates are computed and sent via <a href="https://en.wikipedia.org/wiki/User_Datagram_Protocol">User Datagram Protocol (UDP)</a> messages to PureData, for sound synthesis.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{ maxWidth: 370, minWidth: 310}}>
              <CardMedia
                component="img"
                height="194"
                image="./components/details/SpatializeAudio.png"
                alt="Paella dish"
              />
            <Stack direction="row" justifyContent="space-between">
              <CardContent sx={{ display: 'inline' }}>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline' }}>
                  9. Sound Generation
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'inline' }}>
                <ExpandMore
                  expand={this.state.expanded9}
                  onClick={this.handleExpandClick9}
                  aria-expanded={this.state.expanded9}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Stack>
              <Collapse in={this.state.expanded9} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography paragraph>
                    Once in PureData, sounds are synthesized and <a href="https://en.wikipedia.org/wiki/Ambisonics">Ambisonically encoded</a>. The encoding process, uses polar coordinates to each individual, and outputs weights for sound source localization. To make the sound as if it were emanating from each individuals location. The encoded weighted signals, are then decoded for the specific speaker array, generating a sound field which captilaizes on constuctive interference patterns, to achieve percieved sound sources at any angle around the speaker ring. 
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Box>
       <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>    
      <p>
      
        <Divider/>
        
        <div className = "Description">
          <Typography variant="h6" align="center"> 
               As the project progresses, more detailed scripts will be uploaded to a public Github page, and linked here.
          </Typography>
        </div> 
      </p> 
      </Box>
    </div>

    
  );
  
}
}
export default Details;

