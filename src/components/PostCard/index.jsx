import styles from "./styles.module.css";

const PostCard = ({ post, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        <div className={styles.actions}>
          <button className={styles.editBtn} onClick={() => onEdit(post)}>Editar</button>
          <button className={styles.deleteBtn} onClick={() => onDelete(post.id)}>Eliminar</button>
        </div>
      </div>

      <p className={styles.cardBody}>{post.body}</p>
    </div>
  );
}

export {PostCard};
