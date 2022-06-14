import React from "react";
import { useCounter } from "./CounterProvider";
import NumberPresenter from "./NumberPresenter";

const NumberModifier = () => {
  const { increment, decrement } = useCounter();

  return (
    <>
      <div>NumberModifier</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <NumberPresenter />
    </>
  );
};

export default NumberModifier;
