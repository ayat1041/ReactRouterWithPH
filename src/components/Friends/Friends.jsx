import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
  const data = useLoaderData();
//   console.log(data);
  return (
    <div>
      <h2>These are my {data.length} friends</h2>
      <div style={{display: "flex",flexWrap:"wrap",justifyContent: "center"}}>
        {data.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
