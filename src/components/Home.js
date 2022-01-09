import React from "react";
import {Card, Button, Container} from "react-bootstrap";
import bankimg from "../images/icons8-bank-256.png";

class Home extends React.Component {
    render(){
        return(
            <Container fluid="md">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={bankimg} className="img-fluid"/>
                    <Card.Body>
                        <Card.Title>Credit Union of Eleusis</Card.Title>
                        <Card.Text>
                            Welcome to the Credit Union of Eleusis! Become a member today!
                        </Card.Text>
                        <Button variant="primary">Sign Up</Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
};

export default Home;