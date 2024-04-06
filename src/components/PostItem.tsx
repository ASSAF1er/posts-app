import classNames from "classnames";
import { Link } from "react-router-dom";
import { useState } from "react";
function PostItem({ title, id }: Partial<Post>) {
  const [favorite, setFavorite] = useState<boolean>(false);
  const handleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <div className="relative group/post w-full md:w-[350px]  flex flex-col gap-3 p-2 md:p-3 border border-gray-200 rounded-xl overflow-hidden hover:border-2 hover:border-blue-600 shadow-sm md:shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img
            src="https://source.unsplash.com/40x40?face"
            alt="photo de profile"
            className="size-12 rounded-full object-cover bg-gray-200"
          />
          <div className="flex flex-col  ">
            <h3 className="font-bold text-[18px] text-gray-800">Assaf</h3>
            <h4 className="text-[12px] text-gray-400">06 Avril</h4>
          </div>
        </div>
        <div className="group/favorite size-[40px] flex justify-center items-center rounded-full border border-gray-200 hover:border-gray-400 cursor-pointer">
          {" "}
          <span
            onClick={handleFavorite}
            className={classNames(
              favorite ? "material-icons" : "material-symbols-outlined",
              favorite && "text-red-500",
              " text-[30px] text-gray-400 ",
            )}
          >
            favorite
          </span>
        </div>
      </div>
      <div className="font-medium h-[50px] text-[16px] md:text-xl ">
        {title && title.length > 70 ? title?.slice(0, 60) + "..." : title}
      </div>
      <img
        src={`https://source.unsplash.com/300x300?image-nature`}
        alt=""
        className="w-full h-[300px] rounded-xl object-cover bg-gray-200"
      />
      <div className="w-full flex justify-between">
        <div className="flex items-center">
          <div className="flex">
            <img
              src="https://source.unsplash.com/24x24?face"
              alt="face"
              className="size-8 rounded-full border-2 border-blue-300"
            />
            <img
              src="https://source.unsplash.com/24x24?face"
              alt="face"
              className="size-8 rounded-full z-20 -translate-x-1/2 border-2 border-blue-300"
            />
            <img
              src="https://source.unsplash.com/24x24?face"
              alt="face"
              className="size-8 rounded-full z-30 -translate-x-full border-2 border-blue-300"
            />
          </div>
          <div className=" -translate-x-7 text-[12px]  text-gray-700">
            Assaf et 23 autres aiment ceci
          </div>
        </div>{" "}
        <div className="group flex items-center justify-center size-9 rounded-full border border-gray-200 hover:border-gray-400 cursor-pointer">
          <span className="material-symbols-outlined text-xl text-gray-500 group-hover:text-gray-600">
            thumb_up
          </span>
        </div>
      </div>

      <div
        className={classNames(
          "absolute w-[calc(100%)] z-50 left-0 bottom-0 translate-y-full group-hover/post:translate-y-0 duration-300 ease-in-out",
        )}
      >
        <div className=" relative w-full h-[180px] flex justify-center items-center px-3 rounded-t-2xl rounded-b-[10px] bg-blue-600">
          <div className="absolute top-2 min-h-1 md:min-h-1.5 w-[40%] bg-white rounded-full"></div>
          <Link
            to={`/post/${id}`}
            className="  w-full rounded-md bg-white hover:bg-blue-50 py-3 text-center text-[18px] md:text-xl font-bold text-gray-900 shadow-md"
          >
            Voir le post
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
