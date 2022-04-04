import React from "react";
import {Card, Form, Button} from "react-bootstrap";
import ContextProvider, { UserContext } from "./Context";

function Deposit() {
    const[deposit, setDeposit] = React.useState();
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const ctx = React.useContext(UserContext);
    const users = ctx.users;

    //fetch balance from most recently created user
    let balance = users[users.length-1].balance;
    console.log('begining balance', balance)

    //validate input fields
    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function validateNumber(field) {
        if (isNaN(parseFloat(field))) {
            setStatus('Error');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function validatePositiveNumber(field) {
        if (Number(field) < 0) {
            setStatus('Error');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleDeposit() {
        //validate that input was entered
        if(!validate(deposit, 'deposit')) {
            alert('Deposit amount is required');
            return;
        }

        //validate that input is a number
        if(!validateNumber(deposit)) {
            alert('Deposit amount must be a number');
            return;
        }

        //validate that input is not negative
        if(!validatePositiveNumber(deposit)) {
            alert('Deposit amount cannot be negative');
            return;
        }
   
        //add deposit to existing balance
        let newBalance = balance + Number(deposit);
        console.log('new balance is ' + newBalance);

        //update balance in user context
        users[users.length-1].balance = newBalance;
        console.log('balance fetched from object', users[users.length-1].balance)

        //add transaction to user history
        
        
        setShow(false);
        return newBalance;
        }

    function clearForm(){
        setDeposit('');
        setShow(true);
    }


    return(
        <div
        style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Card className="text-center" style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>Account Balance</Card.Title>
                    <Card.Text>{balance}</Card.Text>
                </Card.Body>
                <Card.Body>
                    {show
                    ?
                    (    
                    <>
                    <Card.Title>Make a deposit to your account</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Control type="text" value={deposit} 
                            placeholder="Enter your deposit amount" 
                            onChange={e => setDeposit(e.currentTarget.value)} />
                        </Form>
                    </Card.Text>
                    <Button className="btn-custom" type="submit" onClick={handleDeposit}>
                        Submit Deposit
                    </Button>
                    </>
                    ):(
                    <>
                    <span>
                    <h5><center>Your deposit has been submitted successfuly!</center></h5>
                        <Button className="btn-custom"
                        onClick={clearForm}>
                            Submit Another Deposit
                        </Button>
                    </span>
                    </>)
                    }
                </Card.Body>
            </Card>
        </div>
        )
    };

export default Deposit;