import { useEffect, useState } from "react";
import { getUsers } from "../../../ApiCalls";
import { TestCompNavbar } from "../../components/TestCompNavbar";
import UserCard from "../../components/UserCard";
import styles from "./styles.module.css";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    } catch (e) {
      setError("Error al cargar usuarios");
      setLoading(false);
    }
  };

  if (loading) return <p className={styles.loading}>Cargando usuarios...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <TestCompNavbar />

      <div className={styles.header}>
        <h2 className={styles.title}>Usuarios</h2>
      </div>

      <div className={styles.userList}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
