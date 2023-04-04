import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { email, name, id, phone } = friend;

//   const navigate = useNavigate();
//   const handleNavigation = () => {
//     navigate(-1);
//     // navigate(`/friend/${id}`);
//   }
  return (
    <div
      style={{
        border: "1px solid blue",
        background: "purple",
        marginBlock: "10px",
        marginInline: "10px",
        padding: "14px",
        borderRadius: "6px",
        width: "320px",
      }}
    >
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <p
        style={{
          width: "max-content",
          margin: "0 auto",
          background: "tomato",
          padding: "8px",
          borderRadius: "4px",
          boxShadow: "2px 2px 2px black",
        }}
      >
        <Link
          to={`/friend/${id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          Show details
        </Link>

      </p>
    </div>
  );
};
export default Friend;
