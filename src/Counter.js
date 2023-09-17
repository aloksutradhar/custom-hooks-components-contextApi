import CustomButton from "./components/button/CustomButton";
import useCounter from "./hooks/useCounter";

const Counter = () => {
  const { count, incrementCounter, decrementCounter } = useCounter(2);

  return (
    <div>
      <h3>{count}</h3>
      <CustomButton title="Increment" handleClick={incrementCounter} />
      <CustomButton title="Decrement" handleClick={decrementCounter} />
      <CustomButton isDisable={true} title="Disabled" />
    </div>
  );
};
export default Counter;
