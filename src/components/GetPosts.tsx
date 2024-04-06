function GetPosts({ getPosts }: getPostsProps) {
  return (
    <div className="flex flex-col gap-2 h-[400px] my-10  mx-3 md:mx-10 items-center justify-center text-center rounded-xl border-2 border-gray-300 border-dashed">
      <h1 className="text-2xl text-gray-950 font-bold ">Uh oh!</h1>
      <h3>Aucun post n'a encore été recupéré</h3>
      <div
        onClick={getPosts}
        className="p-3 w-[80%] md:w-[50%] rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-md cursor-pointer"
      >
        Récupérer les derniers post
      </div>
    </div>
  );
}

export default GetPosts;
