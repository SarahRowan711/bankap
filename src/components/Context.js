import React from "react";

const UserContext = React.createContext();

console.log("context invoked");

const ContextProvider = ({ children }) => {
    const users = [
        {
            name: 'default',
            email: 'default',
            password: 'default',
            balance: 0
        }
    ]

    return (
        <UserContext.Provider
            value={{users}}>
            {children}
        </UserContext.Provider>
    );    
};

export { UserContext };
export default ContextProvider;