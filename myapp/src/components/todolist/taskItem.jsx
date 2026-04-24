import { FaRegEdit as EditIcon } from "react-icons/fa";
import { MdDelete as DeleteIcon } from "react-icons/md";
import styles from "./todolist.module.css";

const TaskItem = ({ task, editIndex, onEdit, index, onDelete }) => {
  const priorityClass = styles[task.priority] || "";

  const isEditing = editIndex === index;
  return (
    <div className={`${styles.taskCard} ${isEditing ? styles.isEditing : ""}`}>
      <div className={styles.taskInfo}>
        <span className={`${styles.badge} ${priorityClass}`}>
          {task.priority}
        </span>
        <p className={styles.taskTitle}>{task.title}</p>
        <p className={styles.taskDesc}>{task.description}</p>
      </div>
      <div className={styles.actions}>
        <button
          onClick={() => onEdit(task, index)}
          className={styles.iconBtn}
          aria-label="Edit task"
        >
          <EditIcon />
        </button>
        <button
          className={`${styles.iconBtn} ${styles.deleteBtn}`}
          aria-label="Delete task"
          onClick={() => onDelete(task.id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
export default TaskItem;
