function NoFavorite() {
  return (
    <div className="flex flex-col gap-2 h-[400px] my-10 mx-10 items-center justify-center text-center rounded-xl border-2 border-gray-300 border-dashed">
      <h1 className="text-2xl text-gray-950 font-bold ">Uh oh!</h1>
      <h3>Vous n'avez encore ajouté aucun post.</h3>
      <div className="p-3 w-[50%] rounded-md border-blue-600 text-blue-600 border-2  font-bold  cursor-pointer">
        Veuillez ajouter les posts que vous voulez garder à vos favoris
      </div>
    </div>
  );
}

export default NoFavorite;
