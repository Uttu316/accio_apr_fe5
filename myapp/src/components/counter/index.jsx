import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log("add", count);
  };

  const onMinus = () => {
    setCount((curr) => curr - 1);
    setCount((curr) => curr - 1);
    setCount((curr) => curr - 1);
    setCount((curr) => curr - 1);
    console.log("minus", count);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.count}>{count}</h2>
      <div className={styles.buttons}>
        <button className={`${styles.btn} ${styles.btnAdd}`} onClick={onAdd}>
          Add
        </button>
        <button
          className={`${styles.btn} ${styles.btnMinus}`}
          onClick={onMinus}
        >
          Minus
        </button>
      </div>
    </div>
  );
};
export default Counter;
