import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
  const data = useLoaderData();

  return (
    <div>
      <h3>These are my Friends!</h3>
      {data.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
