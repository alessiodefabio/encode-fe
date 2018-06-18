import React, {Component} from 'react';
import LoginForm from '../forms/LoginForm';
import '../../images/Encode_logo.png';
import '../../css/app.css';

class LoginPage extends Component{
    render(){
        return(
            <div className="div-login">
                <div id="div-logo">
                    <img id="encode-logo" src={require('../../images/Encode_logo.png')}/>
                </div>
                <LoginForm/>
            </div>
        );
    }
}

export default LoginPage;