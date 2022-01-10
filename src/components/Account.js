import React from "react";
import { Card, Form, Button} from "react-bootstrap";

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
                        <Card.Title>Credit Union of Eleusis</Card.Title>
                            <Card.Text>
                                Sign up to become a member today!
                            </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I agree to the Terms and Conditions" />
                            </Form.Group>
                            <Button className="btn-custom" type="submit">
                                Submit
                            </Button>
                        </Form>
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