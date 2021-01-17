import React from "react";
import ScrollBox from "react-responsive-scrollbox";
import UserList from './UserList.js'

const Users = () => {
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