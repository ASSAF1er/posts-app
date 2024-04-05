import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function Layout() {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
}

export default Layout;
