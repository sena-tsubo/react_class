import { useState } from "react";

function Calc() {
  const [value, setValue] = useState(0);

  function doubleValue() {
    setValue((prev) => prev * 2);
  }

  function incrementValue() {
    setValue((prev) => prev + 1);
  }

  function decrementValue() {
    setValue((prev) => prev - 1);
  }

  return (
    <main>
      <h1>計算</h1>
      <p>{value}</p>
      <button onClick={doubleValue}>×2</button>{" "}
      <button onClick={incrementValue}>+1</button>{" "}
      <button onClick={decrementValue}>-1</button>
    </main>
  );
}

export default Calc;
