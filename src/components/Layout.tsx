import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Menu from "./Menu";
function Layout() {
  return (
    <section>
      <Navbar />
      <Menu />
      <Outlet />
    </section>
  );
}

export default Layout;
