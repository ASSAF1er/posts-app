import classNames from "classnames";
import { useLocation, Link } from "react-router-dom";
function Menu() {
  const location = useLocation();

  return (
    <div className="w-full flex justify-center">
      {location.pathname === "/" || location.pathname === "/favorites" ? (
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
            Tous
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
      ) : (
        <div className="w-full flex pl-[15%]">
          <Link
            to="/"
            className="flex gap-2 my-3 items-center  bg-blue-600 px-7 py-2 rounded-md text-xl  text-white"
          >
            <span className="material-icons">arrow_back </span> Retour
          </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
