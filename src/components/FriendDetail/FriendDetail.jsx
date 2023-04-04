import React from "react";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FriendDetail = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(-1);
  };
  const friend = useLoaderData();
  const phoneSplit = friend.phone.split(" x")[0];
  console.log(phoneSplit);
  return (
    <div>
      <h3>everything about this person is here</h3>
      <p>Name is: {friend.name}</p>
      <p>Phone is: {phoneSplit}</p>
      <button onClick={handleNavigation}>Back</button>
    </div>
  );
};

export default FriendDetail;
