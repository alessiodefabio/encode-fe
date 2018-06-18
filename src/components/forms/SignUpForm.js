import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react'
import {Link} from "react-router-dom";

class SignUpForm extends Component{
    render(){
        return(
            <div id="sign-up-form" className="login-form">
                <Form>
                    <Form.Field>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="sign-up-name"/>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               id="sign-up-email"
                               placeholder="example@domain.it"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               id="sign-up-password"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password">Re-Enter Password</label>
                        <input type="password"
                               id="confirm-sign-up-password"
                               placeholder="Re-Enter Password"
                        />
                    </Form.Field>
                    <Button inverted color='blue' fluid>Sign Up</Button>
                    <p>Already registered? <Link to="/"><u>Login here</u></Link></p>
                </Form>
            </div>
        )
    }
}

export default SignUpForm;