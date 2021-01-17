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

    const updateDatabase = () => {
        axios.post('http://localhost:5000/update', {data: users})
            .then((response) => { console.log(response) })
            .catch((error) => {console.log(error) })
    };
    
    const clearDatabase = () => {
        axios.delete('http://localhost:5000/clear')
            .then((response) => { console.log(response) })
            .catch((error) => {console.log(error) })
        // clear the local storage
        setUsers([]);
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
                //DB ACTIONS
                updateDatabase,
                clearDatabase,
            }}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;