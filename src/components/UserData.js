import React from "react";
import { Card, Table } from "react-bootstrap";
import { UserContext } from "./Context";
import { Link } from "react-router-dom";


function UserData() {
    console.log('All Data page rendered')
    const ctx = React.useContext(UserContext);
    const users = ctx.users;
    
    return(
        <div
        style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Card className="text-center" style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title>User Registration Information</Card.Title>
                    <Table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.slice(1).map((user, index) => (
                                <tr>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Text>
                Need to make changes? Update your user information <Link className = "App-link" to="/UpdateProfile">here</Link>.
                </Card.Text>
            </Card>
        </div>      
    )
};

export default UserData;