import React from "react";
import '../css/Card.css';

export const Card = (props) => {
    const { name , email, username} = props;
    return (
        <div className="card tc br3 grow bg-lightest-blue">
            <h3>{username}</h3>
            <img src={`http://robohash.org/${username}?size=120x120`} alt="username" />
            <div className="foot-content">
                <h5>{name}</h5>
                <span className="f7">{email}</span>
            </div>
        </div>
    );
}

// export default 