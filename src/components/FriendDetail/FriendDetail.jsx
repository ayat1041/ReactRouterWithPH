import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    const phoneSplit = friend.phone.split(" x")[0];
    console.log(phoneSplit);
    return (
        <div>
            <h3>everything about this person is here</h3>
            <p>Name is: {friend.name}</p>
            <p>Phone is: {phoneSplit}</p>
        </div>
    );
};

export default FriendDetail;