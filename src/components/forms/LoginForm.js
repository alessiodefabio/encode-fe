import  React, {Component} from 'react';
import {Form, Button, Divider, Segment} from 'semantic-ui-react';
import '../../css/app.css';
import {Link} from "react-router-dom";

class LoginForm extends Component{
    render(){
        return (
            <div className='login-form'>
                <Form >
                    <Form.Field fluid>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               id="login_email"
                               placeholder="example@domain.it"
                        />
                    </Form.Field >
                    <Form.Field fluid>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="login_password"
                            placeholder="Digit a password"
                        />
                    </Form.Field>
                    <Button.Group widths='6' size='large'>
                        <Button as={Link}
                                to="/home"
                                className='login-button'>
                            Login
                        </Button>
                        <Button.Or />
                        <Button as={Link}
                                to="/sign-up"
                                style={{"color":"white", "height": '100%'}}
                                color="green">
                            Sign Up
                        </Button>
                    </Button.Group>
                    <p><Link to="/"><u>Forget Email or Password? </u></Link></p>
                </Form>
            </div>
        );
    }
}

export default LoginForm;