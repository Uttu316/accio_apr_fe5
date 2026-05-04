import { FiHome, FiAlertTriangle } from "react-icons/fi";
import styles from "./notfound.module.css";
import PageWrapper from "../../components/pageWrapper";

const NotFoundPage = () => {
  return (
    <PageWrapper className={styles.page} title="Wrong Page">
      <div className={styles.wrapper}>
        <img
          className={styles.lostImg}
          src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=600&q=80"
          alt="Lost in space"
        />
        <div className={styles.illustration}>
          <p className={styles.code}>404</p>
        </div>
        <div className={styles.icon}>
          <FiAlertTriangle />
        </div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.text}>
          Oops — looks like this page went on a shopping spree and never came
          back. Let's get you back to somewhere familiar.
        </p>
        <a href="/" className={styles.btn}>
          <FiHome /> Back to Home
        </a>
      </div>
    </PageWrapper>
  );
};
export default NotFoundPage;
