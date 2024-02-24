import { useState } from "react";
import { databases, storage } from "../../server/appwrite";
import { ID } from "appwrite";
import config from "../../config/config";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [is_public, setIsPublic] = useState(false);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fileResponse = await storage.createFile(
        config.buketId,
        ID.unique(),
        image
      );

      const result = storage.getFilePreview(
        "65c551d32bbbc22f5dab",
        fileResponse.$id
      );
      // Create blog post document
      const blogData = {
        title,
        author,
        content,
        image: result.href, // Use the file ID returned by Appwrite
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
      alert("Send Succufully");
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className="w-full bg-black text-red-800 px-3 py-4">
      <h2>Add Blog Post</h2>
      <form
        className="flex w-full gap-5 flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </label>
        <br />
        <label className="checkbox">
          Public:
          <input
            type="checkbox"
            checked={is_public}
            onChange={() => setIsPublic(!is_public)}
          />
        </label>
        <br />
        <button className="btn sm-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
