import React from "react";
import { Card, Table } from "react-bootstrap";
import { UserContext } from "./Context";

function AllData() {
    const user = React.useContext(UserContext);
    
    console.log('users: ' + user);
    
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>test</td>
                                <td>test</td>
                                <td>test</td>
                            </tr> 
                            </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
};

//styled and displayed on card

export default AllData;