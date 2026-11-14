import {useState} from 'react';
import TaskItem from './TaskItem';

const initialState = [{id : Date.now(), title: 'サンプルタスク'}];
const TaskApp = () => {
    const [tasks , setTasks] = useState(initialState);
    const [inputText , setInputText] = useState('');
    //作成
    const handleTaskCreate = () => {
        setTasks((prev) =>
        [...prev, {id : Date.now(), title: inputText}]);
        setInputText('');
    }

    //削除
    const handleTaskDelete = (id) => {
        setTasks((prev) =>
            prev.filter((task) => task.id !== id),
        ); 
    }

    return (
        <>
         <section className="task-card">
          <h2 className="task-title">タスク管理システム</h2>
          <div className="task-form">
            <input
                className="task-input"
                type="text"
                value = {inputText}
                onChange = {(e) => setInputText(e.target.value)}
                placeholder = "タスクタイトルを入力"
            />
            <button
                className="task-create"
                onClick={handleTaskCreate}
                disabled={!inputText}>
                作成
            </button>

            <div className="task-list">
                {tasks.map((task) => (
                    <TaskItem
                        task={task}
                        onDelete={handleTaskDelete}
                    />
                ))}
            </div>
          </div>

            
         </section>
        </>
    )
}

export default TaskApp;
