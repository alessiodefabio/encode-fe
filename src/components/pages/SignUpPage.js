import React, {Component} from 'react';
import SignUpForm from "../forms/SignUpForm";


class SignUpPage extends Component{
    render(){
        return (
            <div className="all-screen-div">
                <div id="div-logo">
                    <img id="encode-logo" src={require('../../images/Encode_logo.png')}/>
                </div>
                <SignUpForm/>
            </div>
        );
    }
}

export default SignUpPage;