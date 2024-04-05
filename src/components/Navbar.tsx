import user_profile from "../assets/user_profile.png";
function Navbar() {
  return (
    <nav className="flex px-[5%] py-4 justify-between items-center border-b border-gray-200">
      <div className="flex text-3xl font-bold text-gray-950">
        <div className="mr-1">
          <span className="px-2 rounded-md text-slate-50 bg-gray-950">P</span>
        </div>
        <h1>Posts</h1>
      </div>
      <div className="flex gap-4 items-center">
        <span className="material-icons text-gray-600">light_mode</span>
        <img
          src={user_profile}
          alt="user profile"
          className="size-9 rounded-full"
        />
      </div>
    </nav>
  );
}

export default Navbar;
