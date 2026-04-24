import styles from "./todolist.module.css";

const Taskform = ({ task, editIndex, onUpdate, onSave, setTask }) => {
  const onInput = (e) => {
    const { value, id } = e.target;
    setTask((curr) => ({ ...curr, [id]: value }));
  };

  const isEditing = editIndex !== null;

  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Task Form</h2>
      <form className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="title">
            Title
          </label>
          <input
            className={styles.input}
            onChange={onInput}
            value={task.title}
            id="title"
            name="title"
            placeholder="Enter task Title"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="priority">
            Priority
          </label>
          <select
            className={styles.select}
            value={task.priority}
            onChange={onInput}
            id="priority"
          >
            <option disabled value="">
              choose priority
            </option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="description">
            Description
          </label>
          <textarea
            className={styles.textarea}
            onChange={onInput}
            value={task.description}
            id="description"
            placeholder="Enter task description..."
          />
        </div>
        {!isEditing && (
          <button className={styles.saveBtn} onClick={onSave}>
            Save
          </button>
        )}
        {isEditing && (
          <button className={styles.saveBtn} onClick={onUpdate}>
            Update
          </button>
        )}
      </form>
    </div>
  );
};
export default Taskform;
