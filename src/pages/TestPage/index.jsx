import { useEffect, useState } from "react";
import { getPosts } from "../../../ApiCalls";
import { PostCard } from "../../components/PostCard";
import { TestCompNavbar } from "../../components/TestCompNavbar";
import styles from "./styles.module.css";

export default function TestPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setError("Error al cargar los posts");
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
    console.log("DELETE (simulado) post:", id);
  }

  const handleEdit = (post) => {
    console.log("Editar post (pendiente):", post);
    // Aquí luego se implementará el EDIT real
  }

  if (loading) {
    return <p className={styles.loading}>Cargando posts...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <TestCompNavbar />
      <div className={styles.header}>
        <h2 className={styles.title}>Listado de Posts</h2>
        <button className={styles.addBtn}>Nuevo Post</button>
      </div>

      <div className={styles.postList}>
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
