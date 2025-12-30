import { useEffect, useState } from "react";
import { getPosts, createPost, updatePost } from "../../../ApiCalls";
import PostCard from "../../components/PostCard";
import CreatePostModal from "../../components/CreatePostModal";
import Toast from "../../components/ui/Toast";
import { TestCompNavbar } from "../../components/TestCompNavbar";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export default function TestPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const [toastMsg, setToastMsg] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filterUserId = searchParams.get("userId");

  useEffect(() => {
    loadPosts();
  }, [filterUserId]);

  const loadPosts = async () => {
    try {
      let data = await getPosts();

      // Filtrar por usuario si viene desde UsersPage
      if (filterUserId) {
        data = data.filter(p => p.userId == filterUserId);
      }

      setPosts(data);
      setLoading(false);
    } catch (err) {
      setError("Error al cargar los posts");
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
    setToastMsg("Post eliminado correctamente");
    setTimeout(() => setToastMsg(null), 2500);
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setShowModal(true);
  };

  const handleSave = async (data, id) => {
    if (id) {
      const updated = await updatePost(id, data);
      setPosts(prev => prev.map(p => (p.id === id ? updated : p)));
      setToastMsg("Post actualizado con éxito");
    } else {
      const created = await createPost(data);
      setPosts(prev => [created, ...prev]);
      setToastMsg("Post creado correctamente");
    }

    setShowModal(false);
    setEditingPost(null);

    setTimeout(() => setToastMsg(null), 3000);
  };

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
        <h2 className={styles.title}>
          {filterUserId ? `Posts del Usuario ID ${filterUserId}` : "Listado de Posts"}
        </h2>
        <button className={styles.addBtn} onClick={() => setShowModal(true)}>
          Nuevo Post
        </button>
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

      {showModal && (
        <CreatePostModal
          onClose={() => { setShowModal(false); setEditingPost(null); }}
          onSave={handleSave}
          initialData={editingPost}
        />
      )}

      {/* Toast UI */}
      {toastMsg && <Toast message={toastMsg} />}
    </div>
  );
}
