import React from "react";
import { Card, Form, Button} from "react-bootstrap";
import ContextProvider, { UserContext } from "./Context";

function UpdateProfile(){
    console.log('Update profile page rendered');
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
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
    
    function handleUpdateProfile(){
        console.log("update profile invoked ");

        //update these so that at least one is populated
        if (!validate(name, 'name')) {
            alert('Name is required');
            return;
        };
        if (!validate(email, 'email')) {
            alert('Email is required');
            return;
        };
        if (!validate(username, 'username')) {
            alert('Username is required');
            return;
        };
        if (!validate(password, 'password')) {
            alert('Password is required');
            return;
        };
        
        //update this so that only what is updated gets pushed
        console.log("attempting to push to context");
        ctx.users.push({name, email, username, password, balance:500});        
        setShow(false);
    }

    function clearForm(){
        console.log("clear form invoked")
        setName('');
        setEmail('');
        setUsername('');
        setPassword('');
        setShow(true);
    }

    return(
        <div
        style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Card className="text-left" style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>Update User Profile</Card.Title>
                        <Card.Text>
                            Enter the data you would like to update below.
                        </Card.Text>
                        {show
                        ? 
                        (
                        <Form>
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
                            </Form.Group>
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
                            onClick={handleUpdateProfile}>
                                Submit
                            </Button>
                        </Form>
                        ):(
                            <>
                            <span>
                            <h5><center>Your profile has been updated!</center></h5>
                            <Button className="btn-custom"
                            onClick={clearForm}>
                                Make another update.
                            </Button>
                            </span>
                            </>)
                            }
                </Card.Body>
            </Card>
        </div>
    )
};

export default UpdateProfile;