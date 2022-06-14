import React from "react";
import { useCounter } from "../hooks/useCounter";

const Profile = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <>
      <div>Profile</div>
      <p>Value: {counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Profile;
