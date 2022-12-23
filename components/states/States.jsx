import './States.css';
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
import dong from './A_resonant_trimmed_2.mp3'
import * as randomName from 'jquery-csv'
import fs from 'fs'
import Papa from 'papaparse';


import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CollectionsIcon from '@mui/icons-material/Collections';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import InventoryIcon from '@mui/icons-material/Inventory';

import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';

import Events from '../events/Events';
import About from '../about/About';
import Description from '../description/Description';
import Gallery from '../gallery/Gallery';
import Details from '../details/Details';
import Portal from '../portal/Portal';
import Inventory from '../inventory/Inventory';
import Contacts from '../contacts/Contacts';
import Example from '../../modelData/Example'



/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
constructor(props){
  super(props);
  
    this.state ={
        index: 1,
        done: false,
	
    };
  

   
}
  


  componentDidMount(){
    Papa.parse("https://giffordr.github.io/LabWebAPP/Chemical_Shelf_Inventory.csv",
                         {download: true,
                          header:true,
                          complete: function(results){window.chemicalInventory = results.data},
    	});
    Papa.parse("https://giffordr.github.io/LabWebAPP/lab.csv",
                         {download: true,
                          header:true,
                          complete: function(results){window.contacts = results.data},
    	});  
  }

  


handleButtonClick(buttonName, event) {
    this.setState({ buttonWasClicked: buttonName });
}


  render() {
  
  return (
    
    <div className="App"> 
      
      
      <header className="App-header-style">
        
        
        
          <img src='./Casual_Logo.png' className="App-logo-again"/>
        
       
        <a >
          Kosik Lab Web App
        </a>
  
      <Typography variant="h6" className = "subHeader"> 
        A place for inventory and management
      </Typography>
        
      </header> 

      <Box sx={{ width: 1 }}>
        <Paper elevation={3}>
      <BottomNavigation id="NavMenu" value={this.state.buttonWasClicked} onChange={(event, newValue) => this.handleButtonClick(newValue, event)}>
        <BottomNavigationAction label="Description" icon={<InfoIcon />} href='#description'> </BottomNavigationAction>
        <BottomNavigationAction label="Events" icon={<CalendarMonthIcon />} href='#events'/>
        <BottomNavigationAction label="Contacts" icon={<PeopleIcon />} href='#contacts' />
        <BottomNavigationAction label="Inventory" icon={<InventoryIcon />} href='#inventory' />
        <BottomNavigationAction label="Portal" icon={<SmartphoneIcon />} href='#portal' />
      </BottomNavigation>
        </Paper>   
    </Box>
<HashRouter>
    <Switch>
    <Route path="/description" component={Description} />
    <Route path="/events" component={Events} />
    <Route path="/about" component={About} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/details" component={Details} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/portal" component={Portal} /> 
    <Route exact path="/" component={Description} />
    <Route path="/inventory" component={Inventory} />
    </Switch>
</HashRouter>

      
    
    </div>
  );
  
}
}
export default States;
 //onClick={e => this.handleButtonClick(e.first_name + " " + e.last_name, e)}>{e.first_name + " " + e.last_name}