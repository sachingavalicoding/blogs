// Import necessary dependencies
import { useState, useEffect } from "react";
import { databases } from "../../server/appwrite";
const Blogs = () => {
  // State to store blog data
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  // Function to fetch blog data from Appwrite
  const fetchBlogs = async () => {
    try {
      // Replace 'YOUR_COLLECTION_ID' with the actual collection ID where your blogs are stored in Appwrite
      const documents = await databases.listDocuments(
        "65c550a5cf78fda2ccfe",
        "65c550b5bf7a160dfdce"
      );

      setBlogs(documents.documents);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // useEffect to fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.$id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            {/* Assuming 'image' is the field in your blog document containing the image URL */}
            <img src={blog.image} alt={blog.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
