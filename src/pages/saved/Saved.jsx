import { useBlog } from "../../context/BlogContext";
import { IoBookmarksSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components";
const Saved = () => {
  const { blogs, loading } = useBlog();

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-72">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-14 w-14"></div>
        <p className="ml-2">Loading...</p>
      </div>
    );
  }

  return (
    <div className=" mx-auto w-full lg:w-[48rem] xl:w-[60rem] xl:ml-[20rem] lg:ml-[20rem]">
      <div className="w-full mt-8 flex items-center justify-items-center px-4 flex-wrap gap-4 py-4">
        <div className="flex items-center justify-items-center gap-4 flex-wrap ">
          <h2 className="text-3xl font-mono ml-4"> Saved Blog Posts </h2>
          <IoBookmarksSharp className=" hidden sm:flex text-3xl " />
        </div>
        <div className="w-64 relative flex items-center top-0 md:w-96 ">
          <input
            className="w-full px-10 py-2 rounded-lg bg-slate-50 "
            type="search"
            placeholder="Search Blogs ... "
          />
          <IoMdSearch className="text-xl absolute  left-2" />
        </div>
      </div>
      <Sidebar />
      <ul className="w-full  lg:px-8 py-2 bg-gray-100 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-5  rounded-lg">
        {blogs.map((blog) => (
          <li className="shadow-lg   px-4   py-2" key={blog.$id}>
            <Link className="" to={`/blogs/${blog.$id}`}>
              <img className="w-full rounded-lg " src={blog.image} alt="" />
              <h2 className="text-[1rem] font-semibold  py-2  ">
                {" "}
                {blog.title}{" "}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Saved;
