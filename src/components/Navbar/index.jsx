import { Logo } from "../ui/Logo";
import CustomNavLink from "../ui/buttons/Navlinks";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.links}>
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/test">Test</CustomNavLink>
      </div>
    </nav>
  );
};

export default Navbar;
