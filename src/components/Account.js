import React from "react";
import { Card, Form, Button} from "react-bootstrap";
import { UserContext } from "./Context";

//card with form for new account containing name email password
//validation on form fields
//button to submit - unavailable if validation of form fields fails
//button to add another after submission (clears form)

function CreateAccount(){
    console.log('create account invoked')
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState(''); 
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
   
    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }
    
    function handleCreate(){
        if (!validate(name, 'name')) {
            alert('Name is required')
            return;
        };
        if (!validate(email, 'email')) {
            alert('Email is required')
            return;
        };
        if (!validate(password, 'password')) {
            alert('Password is required')
            return;
        };
        console.log(name, email, password);
        ctx.state.users.push({name, email, password, balance:500})
        setShow(false);
        console.log("handle create invoked ")
    }

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
        console.log("clear form invoked")
    }

    return(
        <div
        style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Card className="text-left" style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>Credit Union of Eleusis</Card.Title>
                        <Card.Text>
                            Sign up to become a member today!
                        </Card.Text>
                        {show
                        ? 
                        (<Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={name}
                                placeholder="Enter first and last name separated by a space"
                                onChange={e => setName(e.currentTarget.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={email}
                                placeholder="Enter email address"
                                onChange={e => setEmail(e.currentTarget.value)} />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password}
                                placeholder="Enter password"
                                onChange={e => setPassword(e.currentTarget.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I agree to the Terms and Conditions" />
                            </Form.Group>
                           <Button className="btn-custom"
                            onClick={handleCreate}>
                                Submit
                            </Button>
                        </Form>    
                        )
                        : 
                        (<>
                        <p></p>
                        <h5><center>Your account has been created!</center></h5>
                        <Button className="btn-custom"
                        onClick={clearForm}>
                            Create Another Account
                        </Button>
                        </>)
                        }
                </Card.Body>
            </Card>
        </div>
    )
};

export default CreateAccount;