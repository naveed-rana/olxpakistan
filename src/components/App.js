import React, { Component } from 'react';
import 'material-design-icons/iconfont/material-icons.css';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import './resource/css/index.css';
import 'react-toastify/dist/ReactToastify.css';
import OlxPakistan from './Navigation';
import {startGetUser} from './redux/actions/userAction';
import {startGetSuggestions,startGetAds} from './redux/actions/searchActions';
import { connect } from 'react-redux';


class App extends Component {
  componentDidMount() {
    this.props.startGetUser();
    this.props.startGetSuggestions();
    this.props.startGetAds({category:"all"});
  }
  render() {
    return (
      <div>
        <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    />
      <OlxPakistan />  
      <Footer/>

      
      </div>
    );
  }
}

export default connect(null,{startGetUser,startGetSuggestions,startGetAds})(App);
