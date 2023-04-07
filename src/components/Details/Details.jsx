import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div>
      <h3>Friends Details!</h3>
      <h3>{details.id}</h3>
      <h3>{details.name}</h3>
      <h3>{details.username}</h3>
      <h3>{details.email}</h3>
    </div>
  );
};

export default Details;
