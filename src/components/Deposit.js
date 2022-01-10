import React from "react";
import {Card, Form, Button} from "react-bootstrap";

class Deposit extends React.Component {
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
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Make a deposit to your account</Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Control type="number" placeholder="Enter your deposit amount" onChange={onChange} />
                            </Form>
                        </Card.Text>
                        <Button className="btn-custom" type="submit" onClick={submitDeposit}>
                            Submit Deposit
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
};

const onChange = (onChange) => {
    return (console.log('onChangeblah'));
}
const submitDeposit = (submitDeposit) => {
    return (console.log('submitDepositblah'));
}



//balance display
//deposit input
//submit button
//success message
//styled as a card
//display updated balance after deposit, success message
//validate number and only number is entered, disable button is validation fails

export default Deposit;