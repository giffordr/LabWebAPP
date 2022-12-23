'use strict';

import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Unity, { UnityContext } from "react-unity-webgl";

class Game extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      fullscreen: false,
      topMargin: window.innerHeight+50,
      widthMargin: window.innerWidth};

    // This binding is necessary to make `this` work in the callback
    this.handleResize = this.handleResize.bind(this);
    this.handleOnClickFullscreen = this.handleOnClickFullscreen.bind(this);
  }

unityContext = new UnityContext({
    loaderUrl: "./build/CenteringVisualizer_WebGL_7.loader.js",
    dataUrl: "./build/CenteringVisualizer_WebGL_7.data",
    frameworkUrl: "./build/CenteringVisualizer_WebGL_7.framework.js",
    codeUrl: "./build/CenteringVisualizer_WebGL_7.wasm",
    productName: "Centering App",
    productVersion: "1.0.0",
    companyName: "Blue Hole Games",
    webGLContextAttributes: {
      alpha: true,
      antialias: true,
      depth: true,
      failIfMajorPerformanceCaveat: true,
      powerPreference: "high-performance",
      premultipliedAlpha: true,
      preserveDrawingBuffer: true,
      stencil: true,
      desynchronized: true,
      xrCompatible: true,
      },
    })

handleOnClickFullscreen() {
    this.unityContext.setFullscreen(true);
    this.setState(prevState => ({fullscreen: !prevState.fullscreen}));
    console.log(this.state.fullscreen);
    
  }

handleResize() {
   
    this.setState({
          topMargin: window.innerHeight + 50,
          widthMargin: window.innerWidth
    })
  
}


  
render(){
   window.addEventListener('resize', this.handleResize)
  return (
    <div> 
       
    <Unity
      className={"centering-canvas"}
      unityContext={this.unityContext}
      style={{
        height: "100%",
        width: "100%",       
        background: "grey",
      }}
    />
      <Box m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="contained" onClick={this.handleOnClickFullscreen}>Fullscreen</Button>
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
