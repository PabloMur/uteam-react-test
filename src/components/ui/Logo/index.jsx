import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Logo = () => (
  <Link to="/" className={styles.logo}>
    Prueba Técnica Uteam
  </Link>
);

export { Logo };
