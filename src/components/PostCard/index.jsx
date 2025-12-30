import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function PostCard({ post, onEdit, onDelete }) {
  return (
    <div className={styles.card}>
  <h3 className={styles.cardTitle}>{post.title}</h3>

  <p className={styles.cardBody}>{post.body}</p>

  <div className={styles.actions}>
    <button className={styles.editBtn} onClick={() => onEdit(post)}>Editar</button>
    <button className={styles.deleteBtn} onClick={() => onDelete(post.id)}>Eliminar</button>
    <a className={styles.viewBtn} href={`/post/${post.id}`}>Ver detalle →</a>
  </div>
</div>

  );
}
