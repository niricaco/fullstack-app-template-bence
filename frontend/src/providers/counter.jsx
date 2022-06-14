import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  const contextValue = { counter, increment, decrement };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  return useContext(CounterContext);
};

export { CounterProvider, useCounter };
