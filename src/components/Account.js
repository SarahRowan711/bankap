import React from "react";
import {Card, Button} from "react-bootstrap";

class Account extends React.Component {
    render(){
        return(
            <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Card classNameName="text-center" style={{ width: '30rem' }}>
                    <Card.Body>
                    <>
                    <form method="POST" id="signup-form" className="signup-form">
                        <h2 className="form-title">Create account</h2>
                        <div className="form-group">
                            <input type="text" className="form-input" name="name" id="name" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-input" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-input" name="password" id="password" placeholder="Password"/>
                            <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-input" name="re_password" id="re_password" placeholder="Repeat your password"/>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                            <label for="agree-term" className="label-agree-term"><span><span></span></span>I have read and agree to the <a href="#" className="term-service">Terms of service</a></label>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="submit" id="submit" className="form-submit" value="Sign up"/>
                        </div>
                    </form>
                        Already have an account? <a href="#" className="loginhere-link">Login here</a>
                    </>
                    </Card.Body>
                </Card>
            </div>
        )
    }
};

//card with form for new account containing name email password
//validation on form fields
//button to submit - unavailable if validation of form fields fails
//button to add another after submission (clears form)


function createNewAccount(){
    //this will contain the functionality to create a new account
};

export default Account;