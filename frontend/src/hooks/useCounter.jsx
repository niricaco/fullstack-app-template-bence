import { useEffect } from "react";
import { useState } from "react";

export const useCounter = (componentName) => {
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    localStorage.setItem(componentName, counter);
  }, [counter, componentName]);

  useEffect(() => {
    const localCounter = parseInt(localStorage.getItem([componentName]));
    setCounter(localCounter || 0);
  }, [componentName]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return { counter, increment, decrement };
};
