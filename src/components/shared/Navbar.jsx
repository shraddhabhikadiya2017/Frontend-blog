import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="bg-[#a2ae9e] px-6 py-4">
      <div className="max-w-7xl flex justify-end mx-auto gap-6 text-white">
        <Link to="/" className="font-semibold hover:text-neutral-200">
          Home
        </Link>
        <Link to="/newPost" className="font-semibold hover:text-neutral-200">
          Add Post
        </Link>
      </div>
    </nav>
  );
};
