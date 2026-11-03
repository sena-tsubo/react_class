import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "double":
      return state * 2;
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function Calc() {
  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <h1>計算</h1>
      <p>{value}</p>
      <button onClick={() => dispatch({ type: "double" })}>×2</button>{" "}
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>{" "}
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </main>
  );
}

export default Calc;