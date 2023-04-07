import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, id, email, username, phone } = friend;

  return (
    <div className="friend">
      <h1>{name}</h1>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <Link to={`/detail/${id}`}>Details</Link>
    </div>
  );
};

export default Friend;
