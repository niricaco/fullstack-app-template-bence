import React from "react";
import { useCounter } from "./CounterProvider";

const NumberPresenter = () => {
  const { value } = useCounter();
  return (
    <>
      <div>NumberPresenter</div>
      <p>Value: {value}</p>
    </>
  );
};

export default NumberPresenter;
