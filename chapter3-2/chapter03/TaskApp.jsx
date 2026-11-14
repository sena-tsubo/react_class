import { useReducer, useState } from "react";
import TaskItem from "./TaskItem.jsx";

const initialState = [{ id: Date.now(), title: "サンプルタスク" }];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((task) => task.id !== action.payload);
    case "EDIT":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title }
          : task,
      );
    default:
      return state;
  }
}

function TaskApp() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [inputText, setInputText] = useState("");

  const handleTaskCreate = () => {
    const title = inputText.trim();
    if (!title) return;

    dispatch({
      type: "CREATE",
      payload: { id: Date.now(), title },
    });
    setInputText("");
  };

  const handleTaskDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleTaskEdit = (id, title) => {
    dispatch({
      type: "EDIT",
      payload: { id, title },
    });
  };

  return (
    <section className="task-card">
      <h2 className="task-title">タスク管理システム</h2>
      <div className="task-form">
        <input
          className="task-input"
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleTaskCreate();
          }}
          placeholder="タスクタイトルを入力"
        />
        <button
          className="task-create"
          type="button"
          onClick={handleTaskCreate}
          disabled={!inputText.trim()}
        >
          作成
        </button>
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleTaskDelete}
              onEdit={handleTaskEdit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TaskApp;
