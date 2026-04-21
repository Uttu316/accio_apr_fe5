import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1); //async function
    setCount(count + 1);
    setCount(count + 1); //
    setCount(count + 1); //1

    console.log("add", count);
  };
  const onMinus = () => {
    setCount((curr) => curr - 1);
    setCount((curr) => curr - 1);
    setCount((curr) => curr - 1);
    setCount((curr) => curr - 1); //-4

    console.log("minus", count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onAdd}>Add</button>
      <button onClick={onMinus}>Minus</button>
    </div>
  );
};
export default Counter;
