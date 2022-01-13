import React from "react";

const UserContext = React.createContext();

class Context extends React.Component {
    state = {users: [{
        name: 'user',
        email: 'user@mail.edu',
        password: 'secret',
        balance: 100
    }]}
    render(){
        return(
            <UserContext.Provider value={
                { state: this.state,
                setUsers: (value) => this.setState({
                    users: value })}}>
            {this.props.children})
            </UserContext.Provider>);
            
    }
}

export { UserContext };
export default Context;