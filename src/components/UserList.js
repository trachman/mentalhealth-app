import React, { useContext } from "react";
import User from './User.js';
import { Context } from '../context/context.js';

const UserList = () => {
    const { users } = useContext(Context);
    
    return (
        <>
            {users.length ? (
                <ul className="user-list-wrap">
                    {users.map((user) => {
                        return <User userinfo={user} identity={user.id}/>;
                    })}
                </ul>) : (
                    <div><label>No Users 😢</label></div>
                )}
        </>
    );
}

export default UserList;