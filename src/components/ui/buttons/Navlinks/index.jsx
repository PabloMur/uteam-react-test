import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export default function CustomNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles.customLink} ${isActive ? styles.active : ""}`
      }
    >
      {children}
    </NavLink>
  );
}
