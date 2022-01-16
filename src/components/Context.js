import React from "react";

const UserContext = React.createContext(null);

console.log("context invoked");
console.log("Context.js" + Context.state.users.name);

class Context extends React.Component {
        state = {users: [{
        name: '',
        email: '',
        password: '',
        balance: 0
    }]}
    render(){
        return(
            <UserContext.Provider value={
                { state: this.state,
                setUsers: (value) => this.setState({
                    users: value })}}>
            {this.props.children}
            </UserContext.Provider>);
    }
}

export { UserContext };
export default Context;