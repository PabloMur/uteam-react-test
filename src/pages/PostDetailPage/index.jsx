import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById, getPostComments } from "../../../ApiCalls";
import { TestCompNavbar } from "../../components/TestCompNavbar";
import styles from "./styles.module.css";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    const postData = await getPostById(id);
    const commentsData = await getPostComments(id);

    setPost(postData);
    setComments(commentsData);
    setLoading(false);
  };

  if (loading) return <p className={styles.loading}>Cargando...</p>;

  return (
    <div className={styles.container}>
      <TestCompNavbar />

      <div className={styles.postWrapper}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.body}>{post.body}</p>
      </div>

      <h3 className={styles.commentTitle}>Comentarios</h3>

      <div className={styles.commentList}>
        {comments.map((c) => (
          <div key={c.id} className={styles.commentCard}>
            <h4>{c.name}</h4>
            <p className={styles.email}>{c.email}</p>
            <p className={styles.comment}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
