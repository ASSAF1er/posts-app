import classNames from "classnames";
import { useLocation, Link } from "react-router-dom";
function Menu() {
  const location = useLocation();

  return (
    <div className="w-screen flex justify-center">
      <div className="relative w-[60%] flex items-center  justify-center gap-2 p-1 rounded-full border border-gray-300 my-7 shadow-sm   ">
        <Link
          to="/"
          className={classNames(
            location.pathname === "/"
              ? "text-white font-bold "
              : "text-gray-500 hover:bg-blue-100",
            "flex-1 z-20 rounded-full   text-center text-xl py-2 cursor-pointer",
          )}
        >
          Accueil
        </Link>
        <Link
          to="/favorites"
          className={classNames(
            location.pathname === "/favorites"
              ? "text-white font-bold hover:bg-transparent"
              : "text-gray-500 hover:bg-blue-100",
            "flex-1 z-20 rounded-full   text-center text-xl py-2 cursor-pointer",
          )}
        >
          Favoris
        </Link>
        <div
          className={classNames(
            location.pathname === "/" ? " left-1" : "left-[49.5%]",
            "absolute z-10 h-[85%]  ease-in-out duration-500 w-1/2 rounded-full bg-blue-600",
          )}
        ></div>
      </div>
    </div>
  );
}

export default Menu;
