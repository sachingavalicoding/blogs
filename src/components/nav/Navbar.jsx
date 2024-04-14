import { IoMdSearch } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { Link } from "react-router-dom";
import avatar from "/assets/avatar1.jpg";
const Navbar = () => {
  return (
    <nav className="w-full py-4 shadow-lg flex items-center justify-around">
      <h1 className="font-bold hidden md:text-2xl"> Coding HUB </h1>
      <div>
        <div className="w-64 relative flex items-center top-0 md:w-96 ">
          <input
            className="w-full px-10 py-2 rounded-lg bg-slate-50 "
            type="search"
            placeholder="Search Blogs ... "
          />
          <IoMdSearch className="text-xl absolute  left-2" />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-12">
        <FaRegCommentDots className="text-xl font-bold" />
        <GoBell className="text-xl font-bold" />
        <Link to="/signup">
          {" "}
          <img className="w-10 h-10 rounded-full" src={avatar} alt="avtar" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
