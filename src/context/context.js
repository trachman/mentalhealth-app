import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from 'axios';

export const Context = createContext();

const ContextProvider = (props) => {
    const initialUsersState = JSON.parse(localStorage.getItem("users")) || [];
    const [users, setUsers] = useState(initialUsersState);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
      }, [users]);
    
    const addUser = (firstName, lastName, email) => {
        setUsers([
            ...users,
            {
                id: uuid(),
                firstName: firstName,
                lastName: lastName,
                email: email,
            },
        ]);
    };

    const sendToDatabase = () => {
        console.log(JSON.parse(localStorage.getItem("users")));
    };

    const removeUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <Context.Provider
            value={{
                //ARRAYS - OBJECTS
                users,
                //USER ACTIONS
                addUser,
                removeUser,
                sendToDatabase,
            }}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;