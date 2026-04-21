import { FaMale, FaPhone, FaFemale } from "react-icons/fa";
import styles from "./students.module.css";

const StudentCard = ({ user }) => {
  const { image, name, city, phone, gender } = user;
  return (
    <div className={styles.card}>
      <img src={image} className={styles.img} />
      <p className={styles.name}>{name}</p>
      <p className={styles.city}>{city}</p>
      <p className={styles.gender}>
        {gender === "m" ? "Male" : "Female"}
        {gender === "m" ? <FaMale /> : <FaFemale />}
      </p>
      <p className={styles.phone}>
        <FaPhone />
        {phone}
      </p>
    </div>
  );
};
export default StudentCard;
