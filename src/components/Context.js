import React from "react";

const UserContext = React.createContext();

console.log("context invoked");

class ContextProvider extends React.Component {
    state = {users: [{
      name: '', 
      email: '', 
      password: '', 
      balance: 0,
    }]}
    render() {
      return (
        <UserContext.Provider value={
          { state: this.state,
            setUsers: (value) => this.setState({
                        users: value })}}>
        {this.props.children})
        </UserContext.Provider>)    
    }
  }

export { UserContext };
export default ContextProvider;