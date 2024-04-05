import user_profile from "../assets/user_profile.png";
function Navbar() {
  return (
    <nav className="flex px-[5%] py-5 justify-between items-center ">
      <div className="text-3xl font-bold text-gray-950">Posts</div>
      <div>
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
