import styles from "./styles.module.css";

export default function Toast({ message, type = "success" }) {
  return <div className={`${styles.toast} ${styles[type]}`}>{message}</div>;
}
