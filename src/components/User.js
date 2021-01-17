import React from "react";
import Remove from "./Remove.js"

const User = (props) => {
    const firstName = props['userinfo'].firstName;
    const lastName = props['userinfo'].lastName;
    const email = props['userinfo'].email;
    const key = props['identity'];

    return (
        <>
            <div className="UserListItem">
                <div className="UserInfo">
                    <label>{lastName}, {firstName}</label>
                    <p>{email}</p>
                </div>
                <Remove id={key} />
            </div>
        </>
    );
}

export default User;