import React from "react";
import {Card, Button} from "react-bootstrap";
import bankimg from "../images/icons8-bank-512.png";
import { Link } from "react-router-dom";

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
                        <Link to="/SignIn">
                        <Button className="btn-custom" type="submit">
                         Sign In
                        </Button>
                        </Link>
                        <Card.Text>
                        <Card.Title></Card.Title> {/* This is just for spacing until I find a better way*/}
                            New User? Register <Link className = "App-link" to="/CreateAccount">here</Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
};

export default Home;