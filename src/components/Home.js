import React from "react";
import {Card, Button} from "react-bootstrap";
import bankimg from "../images/icons8-bank-512.png";

class Home extends React.Component {
    render(){
        return(
            <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Card className="text-center" style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={bankimg} className="img-fluid"/>
                    <Card.Body>
                        <Card.Title>Credit Union of Eleusis</Card.Title>
                        <Card.Text>
                            Welcome to the Credit Union of Eleusis! Become a member today!
                        </Card.Text>
                        <Button className="btn-custom" type="submit">
                         Sign In
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
};

export default Home;