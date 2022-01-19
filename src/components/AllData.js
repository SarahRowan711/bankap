import React from "react";
import { Card, Table } from "react-bootstrap";
import { UserContext } from "./Context";

function AllData() {
    const ctx = React.useContext(UserContext);
    const users = ctx.users;
    
    return(
        <div
        style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Card className="text-center" style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>User History</Card.Title>
                    <Table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Password</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.slice(1).map((user, index) => (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
};

//styled and displayed on card

export default AllData;