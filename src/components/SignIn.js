import React from "react";
import { Card, Form, Button} from "react-bootstrap";
import ContextProvider, { UserContext } from "./Context";

function SignIn(){
    console.log('Sign In page rendered');
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [username, setUsername] = React.useState(''); 
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    console.log("context", ctx);
   
    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }
    
    function handleSignIn(){
        console.log("handle signin invoked ");
        if (!validate(username, 'username')) {
            alert('Username is required');
            return;
        };
        if (!validate(password, 'password')) {
            alert('Password is required');
            return;
        };
        
        //auth stuff here?

        //once signed in, push username to navbar here?
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
                            Sign in to your account.
                        </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={username}
                                placeholder="Enter your username"
                                onChange={e => setUsername(e.currentTarget.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password}
                                placeholder="Enter your password"
                                onChange={e => setPassword(e.currentTarget.value)} />
                            </Form.Group>
                           <Button className="btn-custom"
                            onClick={handleSignIn}>
                                Sign In
                            </Button>
                        </Form>    
                </Card.Body>
            </Card>
        </div>
    )
};

export default SignIn;