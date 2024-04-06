import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";

function Layout() {
  return (
    <section>
      <Navbar />

      <Menu />
      <Outlet />
      <Footer />
    </section>
  );
}

export default Layout;
