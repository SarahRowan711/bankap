import React from "react";
import {Card, Form, Button} from "react-bootstrap";

class Withdraw extends React.Component {
    render(){
        return(
            <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Card className="text-center" style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>Account Balance</Card.Title>
                        <Card.Text>BALANCE GOES HERE</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Make a withdrawal from your account</Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Control type="number" placeholder="Enter your withdrawal amount" />
                            </Form>
                        </Card.Text>
                        <Button className="btn-custom" type="submit">
                            Submit Withdrawal
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
};

function withdraw(){
    
}

//balance display
//deposit input
//submit button
//success message
//styled as a card
//display updated balance after deposit, success message 
//negative balance alert - disable submit button
//validate number and only number is entered, disable button if validation fails

export default Withdraw;