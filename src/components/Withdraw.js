import React from "react";
import {Card, Form, Button} from "react-bootstrap";
import { UserContext } from "./Context";

function Withdraw() {
    const[withdrawal, setWithdrawal] = React.useState();
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const ctx = React.useContext(UserContext);
    
    //fetch balance from context
    //faking for now
    let balance = 500;
    
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

    //validate withdrawal won't cause negative balance

    function handleWithdraw() {
        //validate that input was entered
        if(!validate(withdrawal, 'withdrawal')) {
            alert('Withdrawal amount is required');
            return;
        }

        //validate that input is a number
        if(!validateNumber(withdrawal)) {
            alert('Withdrawal amount must be a number');
            return;
        }

        //validate that input is not negative
        if(!validatePositiveNumber(withdrawal)) {
            alert('Withdrawal amount cannot be negative');
            return;
        }
    
        //subtract withdrawal from existing balance
        let newBalance = balance - Number(withdrawal);
        
        console.log('new balance is ' + newBalance);
        setShow(false);
        return newBalance;
        }

    function clearForm(){
        setWithdrawal('');
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
                    <Card.Title>Make a withdrawal from your account</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Control type="text" value={withdrawal} 
                            placeholder="Enter your withdrawal amount" 
                            onChange={e => setWithdrawal(e.currentTarget.value)} />
                        </Form>
                    </Card.Text>
                    <Button className="btn-custom" type="submit" onClick={handleWithdraw}>
                        Submit Withdrawal
                    </Button>
                    </>
                    ):(
                    <>
                    <span>
                    <h5><center>Your withdrawal has been submitted successfully!</center></h5>
                        <Button className="btn-custom"
                        onClick={clearForm}>
                            Submit Another Withdrawal
                        </Button>
                    </span>
                    </>)
                    }
                </Card.Body>
            </Card>
        </div>
    )
};

function withdraw(){
    
}

//balance display
//withdrawal input
//submit button
//success message
//styled as a card
//display updated balance after withdrawal, success message 
//negative balance alert - disable submit button
//validate number and only number is entered, disable button if validation fails

export default Withdraw;