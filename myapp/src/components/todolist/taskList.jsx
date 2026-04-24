import TaskItem from "./taskItem";
import styles from "./todolist.module.css";

const TaskList = ({ tasks, editIndex, onEdit, onDelete }) => {
  const isEmpty = tasks.length === 0;
  return (
    <div className={styles.listSection}>
      <h2 className={styles.listTitle}>Tasks</h2>
      {isEmpty && <p className={styles.emptyMsg}>No task available</p>}
      {!isEmpty && (
        <div className={styles.taskList}>
          {tasks.map((item, index) => (
            <TaskItem
              editIndex={editIndex}
              onEdit={onEdit}
              onDelete={onDelete}
              task={item}
              key={item.id}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default TaskList;
