import { useState } from "react";
import Taskform from "./taskform";
import TaskList from "./taskList";
import styles from "./todolist.module.css";

const TodoList = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const [tasks, setTasks] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const onSave = (e) => {
    e.preventDefault();
    if (
      task.title.length > 3 &&
      task.priority &&
      task.description.length > 10
    ) {
      const newTask = {
        title: task.title,
        priority: task.priority,
        description: task.description,
        id: Date.now(),
      };
      setTasks((curr) => [...curr, newTask]);
      setTask({ title: "", description: "", priority: "" });
    } else {
      alert("Enter all values");
    }
  };

  const onDelete = (id) => {
    setTasks((curr) => curr.filter((i) => i.id !== id)); // return remaining items as new state
  };

  const onEdit = (item, index) => {
    setTask({
      title: item.title,
      description: item.description,
      priority: item.priority,
    });
    setEditIndex(index);
  };

  const onUpdate = (e) => {
    e.preventDefault();

    if (
      task.title.length > 3 &&
      task.priority &&
      task.description.length > 10
    ) {
      setTasks((curr) => {
        curr[editIndex] = {
          title: task.title,
          description: task.description,
          priority: task.priority,
          id: curr[editIndex].id,
        }; // updating the same index with latest values

        return curr;
      });

      setEditIndex(null);
      setTask({
        title: "",
        description: "",
        priority: "",
      }); // reset the edit index and form
    } else {
      alert("Enter all details");
    }
  };
  return (
    <div className={styles.container}>
      <Taskform
        editIndex={editIndex}
        onSave={onSave}
        task={task}
        setTask={setTask}
        onUpdate={onUpdate}
      />
      <TaskList
        editIndex={editIndex}
        onEdit={onEdit}
        onDelete={onDelete}
        tasks={tasks}
      />
    </div>
  );
};
export default TodoList;
