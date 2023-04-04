import React from 'react';
import {Link} from 'react-router-dom';

const Friend = ({friend}) => {
    const {email, name, id, phone} = friend;
    return (
        <div style={{border: "1px solid blue", marginBlock: "10px",marginInline: "10px"}}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p><Link to={`/friend/${id}`}>Show details</Link></p>
        </div>
    );
};
export default Friend;