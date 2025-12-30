import styles from "./styles.module.css";

const PostCard = ({ post, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      
      <div className={styles.cardTop}>
        <p className={styles.badge}>Usuario #{post.userId}</p>

        <div className={styles.actions}>
          <button className={styles.editBtn} onClick={() => onEdit(post)}>
            Editar
          </button>
          <button className={styles.deleteBtn} onClick={() => onDelete(post.id)}>
            Eliminar
          </button>
        </div>
      </div>

      <h3 className={styles.cardTitle}>{post.title}</h3>

      <p className={styles.cardBody}>{post.body}</p>

    </div>
  );
};

export { PostCard };
