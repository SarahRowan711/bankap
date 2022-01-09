import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render(){
        return(
            //navbar default bootstrap with href="#" replaced by to='' with component pages
            <nav className="navbar navbar-expand-lg navbar-light bg-custom-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img
                            src="icons8-bank-64-purple.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Credit Union of Eleusis"
                        />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/Account">Account</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/Deposit">Deposit</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/Withdraw">Withdraw</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/AllData">AllData</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};

export default NavBar;