import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useCounter as useGlobalCounter } from "../providers/counter";

const Home = () => {
  const { counter, increment, decrement } = useCounter();
  const {
    counter: globalCounter,
    increment: globalIncrement,
    decrement: globalDecrement,
  } = useGlobalCounter();

  return (
    <>
      <div>Home</div>
      <p>Value: {counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>Value: {globalCounter}</p>
      <button onClick={globalIncrement}>+</button>
      <button onClick={globalDecrement}>-</button>
    </>
  );
};

export default Home;
