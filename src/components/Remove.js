import React, { useContext } from "react";
import RemoveIcon from "./images/removeicon.svg"
import { Context } from '../context/context.js';

const Remove = (key) => {
    const { removeUser } = useContext(Context);

    const handler = () => {
        removeUser(key.id);
    };
    
    return (
        <>
            <div className="close-container">
                <a href="javascript:void(0);"><img src={RemoveIcon} alt="remove" className="removeicon" onClick={handler}/></a>
            </div>
        </>
    );
}

export default Remove;