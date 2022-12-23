import './Inventory.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Tooltip2 from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Grid';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EastIcon from '@mui/icons-material/East';
import Fade from '@mui/material/Fade';
import ScienceIcon from '@mui/icons-material/Science';
import BiotechIcon from '@mui/icons-material/Biotech';
import Papa from 'papaparse';
import CircularProgress from '@mui/material/CircularProgress';
import {
  HashRouter, Route, Routes, Link, NavLink,
} from 'react-router-dom';


import CloseIcon from '@mui/icons-material/Close';

class Inventory extends React.Component {

  
constructor(props){
    super(props);
  
    this.state ={
        index: 1,
        search: '',
        category: '',
        sortScore: false,
        sortTitle: false,
        sortTTP: false,
        sortCost: false,
        sortReach: false,
        sortDifficulty: false,
        sortProfit: false,
        transition: false,
        model: window.chemicalInventory,
	
    };
  this.listUnsorted = this.state.data;
  
  
  this.handleChangeBound = event => this.handleChange(event);
  this.handleSorting = this.handleSorting.bind(this);
  this.handleClickScore = this.handleClickScore.bind(this);
  this.handleClickTTP = this.handleClickTTP.bind(this);
  this.handleClickCost = this.handleClickCost.bind(this);
  this.handleClickProfit = this.handleClickProfit.bind(this);
  this.handleClickReach = this.handleClickReach.bind(this);
  this.handleClickDifficulty = this.handleClickDifficulty.bind(this);
  this.checkInView = this.checkInView.bind(this);
  this.handleLoading = this.handleLoading.bind(this);
  this.handleCompleteChemical = this.handleCompleteChemical.bind(this);
 
}
  
handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false});
  };
 handleCompleteChemical(results){
     window.chemicalInventory = results.data; 
     this.setState({done: true,
                   model: results.data});
     var element = document.getElementById("NavMenu");
          element.scrollIntoView({behavior:"smooth"});
  }

handleChange(event) {
  this.setState({search: event.target.value});
}

handleSorting(array) {

  const original = array.slice();
  let sortedArray = array.slice();
  const unsortedArray = this.listUnsorted;
  
  if(this.state.sortScore === true)
  {
       sortedArray = this.sortByScore(original)
  }
  if(this.state.sortTitle === true)
  {
       sortedArray = this.sortByTitle(original)
  }
  if(this.state.sortTTP === true)
  {
      sortedArray = this.sortByTTP(original)
  }
  if(this.state.sortCost === true)
  {
       sortedArray = this.sortByCost(original)
  }
  if(this.state.sortReach === true)
  {
       sortedArray = this.sortByReach(original)
  }
  if(this.state.sortDifficulty === true)
  {
       sortedArray = this.sortByDifficulty(original)
  }
  if(this.state.sortProfit === true)
  {
       sortedArray = this.sortByProfit(original)
  }
  else{
     sortedArray = original;
  }
  
  return sortedArray 
}
    
handleClickScore =(event) => {
    //this.props.changeIndex(this.state.index)
    //let nameOfButton = event.target.id;
    this.setState({sortScore: !this.state.sortScore})
    
}

handleClickTTP =(event) => {
    //this.props.changeIndex(this.state.index)
    this.setState({sortTTP: !this.state.sortTTP})
}
handleClickCost =(event) => {
    //this.props.changeIndex(this.state.index)
    this.setState({sortCost: !this.state.sortCost})
}
handleClickProfit =(event) => {
    //this.props.changeIndex(this.state.index)
    this.setState({sortProfit: !this.state.sortProfit})
}
handleClickDifficulty =(event) => {
    //this.props.changeIndex(this.state.index)
    this.setState({sortDifficulty: !this.state.sortDifficulty})
}
handleClickReach =(event) => {
    //this.props.changeIndex(this.state.index)
    this.setState({sortReach: !this.state.sortReach})
}

componentDidMount(){
          var element = document.getElementById("NavMenu");
          element.scrollIntoView({behavior:"smooth"});
          document.title = ("Kosik Lab- Inventory");
  Papa.parse("https://giffordr.github.io/LabWebAPP/Chemical_Shelf_Inventory.csv",
                         {download: true,
                          header:true,
                          complete: this.handleCompleteChemical,
    	});
               
};

checkInView(id){
  var myElement = document.getElementById(id);
  var bounding = myElement.getBoundingClientRect();
      
  if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
      console.log('Element is in the viewport!');
      return true
  } 
      
  else {
    console.log('Element is NOT in the viewport!');
      
  }
}

sortByScore(array){
  let sortedAr = array.sort((a,b) => b.score.toString().localeCompare(a.score, 'en', {numeric: true}));
  return sortedAr;
}
sortByTitle(array){
  let sortedAr = array.sort((a,b) => a.title.toString().localeCompare(b.title, 'en', {numeric: true}));
  return sortedAr;
}
sortByTTP(array){
  let sortedAr = array.sort((a,b) => b.TTP.toString().localeCompare(a.TTP, 'en', {numeric: true}));
  return sortedAr;
}
sortByCost(array){
  let sortedAr = array.sort((a,b) => b.cost.toString().localeCompare(a.cost, 'en', {numeric: true}));
  return sortedAr;
}
sortByReach(array){
  let sortedAr = array.sort((a,b) => b.reach.toString().localeCompare(a.reach, 'en', {numeric: true}));
  return sortedAr;
}
sortByDifficulty(array){
  let sortedAr = array.sort((a,b) => b.difficulty.toString().localeCompare(a.difficulty, 'en', {numeric: true}));
  return sortedAr;
}
sortByProfit(array){
  let sortedAr = array.sort((a,b) => b.profit.toString().localeCompare(a.profit, 'en', {numeric: true}));
  return sortedAr;
}

handleLoading(){

if(this.state.model){
  console.log("all Clear!");
  return( 
  <div>
    {this.state.model.find(element => element[ 'Chemical Name' ].toLowerCase().includes(this.state.search.toLowerCase())) ?
  
    <div style={{ width:"100%", margin: "0 auto", alignItems:"center"}} >
        
      {this.handleSorting(this.state.model).filter(element => element[ 'Chemical Name' ].toLowerCase().includes(this.state.search.toLowerCase())).map((item,idx) => (   
        //{window.articleModels.articleListModel().map((item,idx) => (
          
        
      <span>
        <Grid container spacing={0} direction="column" justifyContent="center" p="5px" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Fade in={true}>     
          <Card sx={{ minWidth: 350, width:"100%", maxHeight: 400, "&:hover": { transform: 'scale(1.01)', transition: 'transform .4s'} }} >
            <CardActionArea >
              <CardContent >
                  <Grid p="10px" container item spacing={3} justifyContent="center" alignItems="center" direction="column" style={{ display: "flex"}}>
                         
                        <Grid container item justifyContent="space-between">
                             <Grid item>
                                <Typography fontSize="11px">{item.Company}: {item['Product#']}</Typography>
                              </Grid>
                             <Grid item>
                                <Typography fontSize="11px">{item.Quantity}</Typography>
                              </Grid>
                        </Grid>
                        <Grid item>
                              <Typography fontSize="28px">{item['Chemical Name']}</Typography>
                        </Grid>
                        <Grid container item justifyContent="space-between" >
                            <Grid item>
                              <ScienceIcon sx={{color:"gray"}}/>
                            </Grid>
                          <Grid item sx={{color:"purple"}}>
                              <Typography fontSize="24px" color="purple" fontWeight="bold">{item['Letter Code']}</Typography>
                            </Grid>
                        </Grid>
     
                     </Grid>
                 </CardContent> 
                
             </CardActionArea>
            </Card>
          </Fade>
  
       </Grid>
     
      
      
      
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" p="5px" sx={{ display: { xs: 'flex', md: 'none' } }}>
            
          <Card justifyContent="center" alignItems="center" sx={{ minWidth: 350, minHeight: 50, width:"100%", maxHeight: 450, "&:hover": { transform: 'scale(1.01)', transition: 'transform .4s'} }} >
            <CardActionArea justifyContent="center" alignItems="center">
            <CardContent justifyContent="center" alignItems="center">
   
                     <Grid p="10px" container item spacing={3} justifyContent="center" alignItems="center" direction="column" style={{ display: "flex"}}>
                         
                        <Grid container item justifyContent="space-between">
                             <Grid item>
                                <Typography fontSize="11px">{item.Company}: {item['Product#']}</Typography>
                              </Grid>
                             <Grid item>
                                <Typography fontSize="11px">{item.Quantity}</Typography>
                              </Grid>
                        </Grid>
                        <Grid item>
                              <Typography fontSize="24px">{item['Chemical Name']}</Typography>
                        </Grid>
                        <Grid container item justifyContent="space-between" >
                            <Grid item>
                              <ScienceIcon sx={{color:"gray"}}/>
                            </Grid>
                          <Grid item sx={{color:"purple"}}>
                              <Typography fontSize="18px" color="purple" fontWeight="bold">{item['Letter Code']}</Typography>
                            </Grid>
                        </Grid>
     
                     </Grid>
              
                </CardContent>
              </CardActionArea> 
            </Card>
          </Grid>
      </span>
     
        ))}
      
    </div> : <div align="center" alignItem="center" justifyContent="center"> <Typography fontSize="24px">Sorry! We didn't find record of this reagent, in the lab. </Typography></div>}
  </div>)
  }
  else{console.log("not good yet");
  return(<Box m="auto" display="flex" alignItems="center" justifyContent="center">
    <CircularProgress />
</Box> )
  }
}


   
render() {
  
  
  return (
      
    
<Box sx={{maxWidth:1100}} alignItems="center" justifyContent="center" m="auto" pt="5px" >
  {console.log(this.state.model)}
  <Accordion style={{ background: 'transparent'}} elevation={0}>

    
        <AccordionSummary id="list"
          expandIcon={<ExpandMoreIcon />}
          sx={{
          '& .MuiAccordionSummary-content': {
          justifyContent: 'center'}
          }}
          >
          
           <TextField id="standard-basic" sx={{width: "60%"}} label="Search Inventory" variant="standard" value={this.state.search} onChange={this.handleChangeBound}/>
          
        </AccordionSummary>
    
        <AccordionDetails >
          
          <Stack justifyContent="center" m="20" direction="row">
            <Typography variant="body" fontFamily="Arial" sx={{mr:2}}> Filter: </Typography>
           
             <FormGroup row>
               <FormControlLabel control={<Switch size="small" onChange={this.handleClickScore} color="primary"/>} label="Antibodies" />
               <FormControlLabel control={<Switch size="small" onChange={this.handleClickTTP} />} label="Reagents" />
               <FormControlLabel control={<Switch size="small" onChange={this.handleClickProfit} />} label="Cells" />
             </FormGroup>
            
          </Stack>
          
        </AccordionDetails>
  </Accordion>

  
  {this.handleLoading()}

       
</Box>
    
    );
  }
}
export default Inventory;
//<Typography sx={{ fontFamily: 'Georgia', weight:'bold'}} style={{color: "black"}} variant="h5" alignItems="left" align = "left">{item.name}</Typography>
//<RatingBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
//<Typography style={{color:"black"}} sx={{ fontFamily: 'Georgia'}} variant="h3" align="right" alignItems="right" justifyContent="right" display='flex' m='auto'> 
 //               {item.title}
 //             </Typography>
