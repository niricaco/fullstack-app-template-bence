import React from "react";
import { useCounter } from "./CounterProvider";
import NumberPresenter from "./NumberPresenter";

const NumberModifier = () => {
  const { plus, minus } = useCounter();

  return (
    <>
      <div>NumberModifier</div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>

      <NumberPresenter />
    </>
  );
};

export default NumberModifier;
