import React from "react";

const UserContext = React.createContext();

console.log("context invoked");

const ContextProvider = ({ children }) => {
    const user = {
        name: '',
        email: '',
        password: ''
    }

    return (
        <UserContext.Provider
            value={user}>
        {children}
        </UserContext.Provider>
    );    
};

export { UserContext };
export default ContextProvider;