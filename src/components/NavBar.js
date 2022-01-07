import React from "react";

class NavBar extends React.Component {
    render(){
        return(
            //navbar default bootstrap with href="#" replaced by to='' with component pages
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" to="./App">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" to="/components/Account">Account</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" to="/components/Deposit">Deposit</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" to="/components/Withdraw">Withdraw</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" to="/components/AllData">AllData</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};

export default NavBar;