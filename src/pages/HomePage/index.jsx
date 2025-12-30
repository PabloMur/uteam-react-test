import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a la Prueba Técnica.</h1>
      <p className={styles.description}>
        Aplicación desarrollada en React consumiendo una API REST pública.
      </p>
      <button className={styles.button} onClick={() => navigate("/test")}>
        Ir a la prueba
      </button>
    </div>
  );
}
