import React, { useContext, useEffect } from "react";
import ScrollBox from "react-responsive-scrollbox";
import User from './User.js'
import UserList from './UserList.js'
import styled from 'styled-components';
import { Context } from '../context/context.js';

const Users = () => {
    // this is where we want to populate the users

    // useEffect(() => {
    //     let users = JSON.parse(localStorage.getItem("users"));
    //     for (let item in users) {
    //         console.log(users[item])
    //     }
    //   }, []);

    return (
        <>
            <ScrollBox className="Scrollbox">
                <div className="UserListWrapper">
                    <UserList />
                </div>
            </ScrollBox>
        </>
    );
}

export default Users;