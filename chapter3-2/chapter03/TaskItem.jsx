function TaskItem({ task, onDelete }) {
  return (
    <div className="task-row">
      <span className="task-row-title">{task.title}</span>
      <button
        className="task-delete"
        type="button"
        onClick={() => onDelete(task.id)}
      >
        削除
      </button>
    </div>
  );
}

export default TaskItem;
