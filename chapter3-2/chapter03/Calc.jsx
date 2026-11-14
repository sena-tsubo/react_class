import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "double":
      return state * 2;
    case "devide":
      return state / 2;
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function Calc() {
  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="calc-card">
      <h1>計算</h1>
      <p className="calc-value">{value}</p>
      <div className="calc-actions">
        <button onClick={() => dispatch({ type: "double" })}>×2</button>
        <button onClick={() => dispatch({ type: "devide" })}>÷2</button>
        <button onClick={() => dispatch({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
        <button
          className="calc-reset"
          onClick={() => dispatch({ type: "reset" })}
        >
          リセット
        </button>
      </div>
    </main>
  );
}

export default Calc;