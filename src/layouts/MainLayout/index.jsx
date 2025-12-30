import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./styles.module.css";

export default function MainLayout() {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
