import './Events.css';



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

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Skeleton from '@mui/material/Skeleton';

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ConstructionIcon from '@mui/icons-material/Construction';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

class Events extends React.Component {
constructor(props){
super(props);

this.state={
        model: [],
        change: false,
}
    this.pickData = this.pickData.bind(this);
    this.callBack = this.callBack.bind(this);
}

componentDidMount(){
          const element = document.getElementById("NavMenu");
          element.scrollIntoView({behavior:"smooth"});
          document.title = ("Kosik Lab- Events");
          window.kosikModels.presentationModel().then(process => this.setState({model: this.pickData(process.slice(1,process.length)), change: true}));                
};

callBack(change){
    this.setState({change: change})
}
   
pickData (model){
    console.log("entered");
    const result = [];
    
    model.filter(function(item) { 
        
        var [MM, DD, YYYY] = item[0].split('/');
       
        var myDate = new Date(YYYY, MM-1, DD);
        
        var currentDate = new Date();
        console.log(myDate);
        console.log(currentDate);
        
        if (myDate > currentDate){
            console.log(item[0])
            console.log("Winner")
            result.push(item);
        } 
    })
    
    if(result.length > 1){
        console.log(result[0])
        return result;
    }
    else{
        return new Array (['','','',''],['','','',''],['','','',''],['','','','']);
    }
        
    
}
    // set state to default values for Presenter name, Date, time, and Food Person. Load dataset, and update those parameters.
 
render() {
  
  return (
    <div className="Body">
    <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>
    <p>
    
        <Typography variant="h5" align="center">
            Lab Meetings
        </Typography>
        <Divider/>
        
    </p>
        
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize:'12px'}}
          align="right"
          variant="body2"
          color="text.secondary"
        >
            {this.state.change ? <div>{this.state.model[0][0]}, {this.state.model[0][1]}</div> : <Skeleton animation="wave" />}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="secondary">
            
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
              {this.state.change ? <div>{this.state.model[0][2]}</div> : <Skeleton animation="wave" />}
          </Typography>
          <Typography>{this.state.change ? <div>Food prepared by: {this.state.model[0][3]}</div> : <Skeleton animation="wave" />}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize:'12px' }}
          variant="body2"
          color="text.secondary"
        >
         {this.state.change ? <div>{this.state.model[1][0]}, {this.state.model[1][1]}</div> : <Skeleton animation="wave" />}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot >
            
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           {this.state.change ? <div>{this.state.model[1][2]}</div> : <Skeleton animation="wave" />}
          </Typography>
          <Typography>{this.state.change ? <div>Food prepared by: {this.state.model[1][3]}</div> : <Skeleton animation="wave" />}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
          <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize:'12px' }}
          variant="body2"
          color="text.secondary"
        >
          {this.state.change ? <div>{this.state.model[2][0]}, {this.state.model[2][1]}</div> : <Skeleton animation="wave" />}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot >
            
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           {this.state.change ? <div>{this.state.model[2][2]}</div> : <Skeleton animation="wave" />}
          </Typography>
          <Typography>{this.state.change ? <div>Food Prepared by: {this.state.model[2][3]}</div> : <Skeleton animation="wave" />}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
          <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize:'12px' }}
          variant="body2"
          color="text.secondary"
        >
          {this.state.change ? <div>{this.state.model[3][0]}, {this.state.model[3][1]}</div> : <Skeleton animation="wave" />}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot>
            
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           {this.state.change ? <div>{this.state.model[3][2]}</div> : <Skeleton animation="wave" />}
          </Typography>
          <Typography>{this.state.change ? <div>Food prepared by: {this.state.model[3][3]}</div> : <Skeleton animation="wave" />}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    <p>
    
        <Typography variant="h5" align="center">
            Special Events
        </Typography>
        <Divider/>
        
    </p>
    <p>
        <Typography variant="body2">
           Special colloquia, symposia, talks, etc., will be listed here as they come up.
        </Typography>
    </p>
    </Box>
    </div>
  );
  
}
}

export default Events;
