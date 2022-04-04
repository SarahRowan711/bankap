import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";
import { UserContext } from "./Context"; //will be used to display username

class NavBar extends React.Component {
    render(){
        return(
            <div>
                <Navbar className="navbar-custom bg-custom-gradient">
                    <Container className="container-fluid">
                    <Navbar.Brand>
                        <img
                            src="icons8-bank-64-teal.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Credit Union of Eleusis"
                        />{' '}
                    Credit Union of Eleusis    
                    </Navbar.Brand>
                    <Nav className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/Deposit">Deposit</Link>
                        <Link className="nav-link" to="/Withdraw">Withdraw</Link>
                        <Link className="nav-link" to="/UserData">Your Account</Link>
                    </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
};

export default NavBar;