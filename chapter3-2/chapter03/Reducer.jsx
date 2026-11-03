import { useReducer } from "react";

// アプリの最初のstate
const initialState = "ボタンを押してください";

// actionを受け取り、次のstateを返す関数
function reducer(state, action) {
  switch (action.type) {
    case "showMessage":
      // actionに含まれるmessageを新しいstateにする
      return action.message;
    default:
      // 該当するactionがなければ、現在のstateをそのまま返す
      return state;
  }
}

function Reducer() {
  // messageは現在のstate、dispatchはreducerにactionを送る関数
  const [message, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <h1>Reducerの基本</h1>
      {/* stateの値が画面に表示される */}
      <p>{message}</p>
      <button
        onClick={() =>
          // actionをdispatchするとreducerが呼ばれ、stateが更新される
          dispatch({ type: "showMessage", message: "こんにちは" })
        }
      >
        こんにちは
      </button>{" "}
      <button
        onClick={() =>
          dispatch({ type: "showMessage", message: "さようなら" })
        }
      >
        さようなら
      </button>
    </main>
  );
}

export default Reducer;