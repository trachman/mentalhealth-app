import React, { useState, useEffect, useRef} from "react";
import Remove from "./Remove.js"

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    // find out what this is doing
    useEffect(() => {
        const node = domRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        
        observer.observe(node);
        return () => observer.unobserve(node);
    },[]);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

const User = (props) => {
    const firstName = props['userinfo'].firstName;
    const lastName = props['userinfo'].lastName;
    const email = props['userinfo'].email;
    const key = props['identity'];

    return (
        <>
            <FadeInSection>
                <div className="UserListItem">
                    <div className="UserInfo">
                        <label>{lastName}, {firstName}</label>
                        <p>{email}</p>
                    </div>
                    <Remove id={key} />
                </div>
            </FadeInSection>
        </>
    );
}

export default User;