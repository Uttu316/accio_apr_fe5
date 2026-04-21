import { USERS } from "../../data/usersData";
import StudentCard from "./studentCard";
import styles from "./students.module.css";

const Students = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Students</h2>
      <div className={styles.list}>
        {USERS.map((item) => (
          <StudentCard key={item.id} user={item} />
        ))}
      </div>
    </div>
  );
};
export default Students;
