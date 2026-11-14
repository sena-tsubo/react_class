import { useState } from "react";

function TaskItem({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.title);

  const handleEdit = () => {
    setEditText(task.title);
    setIsEditing(true);
  };

  const handleSave = () => {
    const title = editText.trim();
    if (!title) return;

    onEdit(task.id, title);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(task.title);
    setIsEditing(false);
  };

  return (
    <div className="task-row">
      {isEditing ? (
        <input
          className="task-edit-input"
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleSave();
            if (event.key === "Escape") handleCancel();
          }}
        />
      ) : (
        <span className="task-row-title">{task.title}</span>
      )}

      <button
        className="task-edit"
        onClick={isEditing ? handleSave : handleEdit}
        type="button"
        disabled={isEditing && !editText.trim()}
      >
        {isEditing ? "保存" : "編集"}
      </button>
      {isEditing && (
        <button
          className="task-edit"
          onClick={handleCancel}
          type="button"
        >
          キャンセル
        </button>
      )}
      {!isEditing && (
        <button
          className="task-delete"
          type="button"
          onClick={() => onDelete(task.id)}
        >
          削除
        </button>
      )}
    </div>
  );
}

export default TaskItem;
