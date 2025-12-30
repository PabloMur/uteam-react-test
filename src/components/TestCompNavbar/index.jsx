import CustomNavLink from "../ui/buttons/Navlinks";
import styles from "./styles.module.css";

const TestCompNavbar = () => {
    
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <CustomNavLink to="/test">Posts</CustomNavLink>
        <CustomNavLink to="/users">Usuarios</CustomNavLink>
        <CustomNavLink to="/albums">Albums</CustomNavLink>
      </nav>
      ;
    </div>
  );
};

export { TestCompNavbar };
