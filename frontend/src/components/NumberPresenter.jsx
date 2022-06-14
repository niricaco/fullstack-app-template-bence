import React from "react";
import { useCounter } from "./CounterProvider";

const NumberPresenter = () => {
  const { counter } = useCounter();
  return (
    <>
      <div>NumberPresenter</div>
      <p>Value: {counter}</p>
    </>
  );
};

export default NumberPresenter;
