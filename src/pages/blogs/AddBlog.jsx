import { useState } from "react";
import { databases, storage } from "../../server/appwrite";
import { ID } from "appwrite";
import config from "../../config/config";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [is_public, setIsPublic] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const fileResponse = await storage.createFile(
        config.buketId,
        ID.unique(),
        image
      );

      const result = storage.getFilePreview(config.buketId, fileResponse.$id);

      const blogData = {
        title,
        author,
        content: `<div>${content}</div>`,
        image: result.href,
        is_public,
        slug: "coding",
      };

      const documentResponse = await databases.createDocument(
        config.databaseId,
        config.collectionId,
        ID.unique(),
        blogData
      );

      console.log("Blog post created:", documentResponse);
      setTitle("");
      setAuthor("");
      setContent("");
      setImage(null);
      setIsPublic(false);
      setIsSubmitting(false);
      alert("Post submitted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating blog post:", error);
      setIsSubmitting(false);
      alert("Error submitting post. Please try again later.");
    }
  };

  const navigate = useNavigate();
  return (
    <div className="w-full px-2 flex items-center justify-center  bg-gradient-to-r from-sky-500 to-indigo-500 h-screen">
      <animated.div
        style={formAnimation}
        className="w-full  md:w-96  mx-auto bg-sky-200 text-gray-800 px-6  py-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-black via-indigo-500 to-indigo-400  text-transparent bg-clip-text uppercase">
          Add Blog Post
        </h2>
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            required
            className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
            className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <label className="flex items-center text-gray-800">
            <input
              type="checkbox"
              checked={is_public}
              onChange={() => setIsPublic(!is_public)}
              className="mr-2"
            />
            Public
          </label>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-indigo-500 uppercase text-white font-bold rounded-lg focus:outline-none focus:ring focus:ring-blue-500 hover:bg-blue-600 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </animated.div>
    </div>
  );
};

export default BlogForm;
