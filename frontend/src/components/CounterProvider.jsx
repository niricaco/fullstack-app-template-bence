import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const plus = () => setValue(value + 1);
  const minus = () => setValue(value - 1);

  const contextValue = { value, plus, minus };

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
