import React, { Component } from 'react';
import 'material-design-icons/iconfont/material-icons.css';
import Footer from './Footer';
import './resource/css/index.css';
import OlxPakistan from './Navigation';

class App extends Component {
  render() {
    return (
      <div>
      <OlxPakistan />  
      <Footer/>
      </div>
    );
  }
}

export default App;
