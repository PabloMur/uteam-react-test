import { useEffect, useState } from "react";
import { getPosts, createPost, updatePost } from "../../../ApiCalls";
import { PostCard } from "../../components/PostCard";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filterUserId = searchParams.get("userId");

  // Actualiza automáticamente los posts por página según el ancho
  useEffect(() => {
    const updatePostsPerPage = () => {
      if (window.innerWidth <= 768) setPostsPerPage(5);
      else setPostsPerPage(9);
    };

    updatePostsPerPage();
    window.addEventListener("resize", updatePostsPerPage);
    return () => window.removeEventListener("resize", updatePostsPerPage);
  }, []);

  useEffect(() => {
    loadPosts();
  }, [filterUserId]);

  const loadPosts = async () => {
    try {
      let data = await getPosts();
      if (filterUserId) data = data.filter((p) => p.userId == filterUserId);
      setPosts(data);
      setCurrentPage(1);
      setLoading(false);
    } catch (err) {
      setError("Error al cargar los posts");
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
    showToast("Post eliminado correctamente");
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setShowModal(true);
  };

  const handleSave = async (data, id) => {
    if (id) {
      const updated = await updatePost(id, data);
      setPosts((prev) => prev.map((p) => (p.id === id ? updated : p)));
      showToast("Post actualizado con éxito");
    } else {
      const created = await createPost(data);
      setPosts((prev) => [created, ...prev]);
      showToast("Post creado correctamente");
    }

    setShowModal(false);
    setEditingPost(null);
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  if (loading) return <p className={styles.loading}>Cargando posts...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <TestCompNavbar />

      <div className={styles.header}>
        <h2 className={styles.title}>
          {filterUserId
            ? `Posts del Usuario ID ${filterUserId}`
            : "Listado de Posts"}
        </h2>
        <button className={styles.addBtn} onClick={() => setShowModal(true)}>
          Nuevo Post
        </button>
      </div>

      <div className={styles.postList}>
        {currentPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {/* PAGINACIÓN */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>

          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`${styles.pageBtn} ${
                  currentPage === page ? styles.activePage : ""
                }`}
                onClick={() => changePage(page)}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}

      {showModal && (
        <CreatePostModal
          onClose={() => {
            setShowModal(false);
            setEditingPost(null);
          }}
          onSave={handleSave}
          initialData={editingPost}
        />
      )}

      {toastMsg && <Toast message={toastMsg} />}
    </div>
  );
}
