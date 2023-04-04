import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h3>everything about this person is here</h3>
            <p>Name is: {friend.name}</p>
        </div>
    );
};

export default FriendDetail;