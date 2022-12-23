'use strict';

import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import QrReader from 'modern-react-qr-reader'
import QRCode from "react-qr-code";
import TextField from '@mui/material/TextField';
//import QrReader from 'react-qr-scanner'
//import { QrReader } from 'react-qr-reader';
import './Game.css';


class Game extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      fullscreen: false,
      topMargin: window.innerHeight+50,
      widthMargin: window.innerWidth,
      delay: 100,
      result: 'No result',
      buttonClick: false,
      result: '',
      search:'',
      createQRClick: false,
    }

    // This binding is necessary to make `this` work in the callback
    this.handleResize = this.handleResize.bind(this);
    this.handleScan = this.handleScan.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleResult = this.handleResult.bind(this);
  this.handleChangeBound = this.handleChange.bind(this);
  this.downloadQRCode = this.downloadQRCode.bind(this);
  this.handleCreateQRClick = this.handleCreateQRClick.bind(this);
  
  }
  
handleScan(data){
  if(data){
    this.setState({
      result: data,
      buttonClick:false,
      
    })
  }

  }
  
handleError(err){
    console.error(err)
  }
  
handleClick(err){
    this.setState({
      buttonClick: true,
    })
  }
handleCreateQRClick(){
  
    this.setState({
      createQRClick: true
    });
  }
componentDidMount(){
  
}  
handleChange(event) {
  this.setState({search: event.target.value});
}



handleResize() {
   
    this.setState({
          topMargin: window.innerHeight + 50,
          widthMargin: window.innerWidth
    })
  
}

handleResult(){
  if(this.state.result){
    return(
      <React.Fragment>
        <Button onClick={this.handleClick} variant="contained"> Add New Reagent</Button>
        <p>{this.state.result}</p>
      </React.Fragment>
      
    );
  }
  else{
      return(
        <React.Fragment>
      <Button onClick={this.handleClick} variant="contained"> Add New Reagent</Button>
        </React.Fragment>);
    };
  }
downloadQRCode() {
    // Generate download with use canvas and stream
    
  };


  
render(){
   window.addEventListener('resize', this.handleResize)
  const previewStyle = {
      height: "150vh",
      width: "150vw",
    }
  return (
    <div > 
      <Box sx={{minWidth:"100vw", minHeight:"100vh"}} className="Body-again" textAlign="center" justifyContent="center">
        
    
        {this.state.buttonClick ? <QrReader
          delay={this.state.delay}
          style={{minWidth:"100vw", minHeight:"100vh"}}
          onError={this.handleError}
          onScan={this.handleScan}
          facingMode={"environment"}                    
        /> : <React.Fragment>
        <Button sx={{width: 200}} onClick={this.handleClick} variant="contained"> Add New Reagent</Button>
        <p>{this.state.result}</p>
      </React.Fragment>}

        {this.state.createQRClick ? <React.Fragment> <QRCode
          id="qr-gen"
          size={256}
          style={{ height: "auto", maxWidth: 100, width: 100 }}
          value={this.state.search}
          viewBox={`0 0 256 256`}
        />
      
        <TextField id="standard-basic" sx={{width: 200}} label="Create Label" variant="standard" value={this.state.search} onChange={this.handleChangeBound}/>
        <Button onClick={this.downloadQRCode}>
          Download QR Code
        </Button>
        </React.Fragment>
          : <Button sx={{width: 200}} onClick={this.handleCreateQRClick} variant="contained"> Create QR Code</Button>}
          
    </Box>
    </div>

  );
}
}
//style={{
      //  height: calc(window.innerHeight + env(safe-area-inset-top)),
       // width: window.innerWidth,
      //  background: "grey",
      //}}

export default Game;
