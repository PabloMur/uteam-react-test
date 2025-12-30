import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function UserCard({ user }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.userName}>{user.name}</h3>
      <p className={styles.userEmail}>{user.email}</p>
      <p className={styles.userCompany}>Empresa: {user.company.name}</p>
      <p className={styles.userCity}>Ciudad: {user.address.city}</p>

      <Link
        to={`/test?userId=${user.id}`}
        className={styles.viewPostsBtn}
      >
        Ver Posts
      </Link>
    </div>
  );
}
