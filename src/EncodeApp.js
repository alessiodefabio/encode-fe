import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import HomePage from './components/pages/HomePage';
import './images/Encode_logo.png';
import './css/app.css';

class EncodeApp extends Component {
  render() {
    return (
        <div className="all-screen-div">
          <Route path="/" exact component={LoginPage} />
          <Route path="/sign-up" exact component={SignUpPage} />
          <Route path="/home" exact component = {HomePage}/>
        </div>

    );
  }
}


export default EncodeApp;
