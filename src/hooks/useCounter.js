import { useState } from "react";

const useCounter = (value) => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + value);
  };
  const decrementCounter = () => {
    setCount(count - value);
  };
  return { count, incrementCounter, decrementCounter };
};

export default useCounter;
