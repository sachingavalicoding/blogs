import { useEffect, useState } from "react";
import { databases, storeage } from "../../server/appwrite";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from Appwrite when the component mounts
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      // Replace 'blogPostsCollectionId' with the actual ID of your blog posts collection
      const response = await databases.listDocuments(
        "65c550a5cf78fda2ccfe",
        "65c550b5bf7a160dfdce"
      );

      // Update the state with the fetched blog posts
      setBlogPosts(response.documents);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  // eslint-disable-next-line react/prop-types
  const BlogImage = ({ imageId }) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
      const loadImageUrl = async () => {
        try {
          const response = await storeage.getFilePreview(imageId);
          setImageUrl(response.href);
        } catch (error) {
          console.error(`Error fetching image with ID ${imageId}:`, error);
        }
      };

      loadImageUrl();
    }, [imageId]);

    return imageUrl ? (
      <img src={imageUrl} alt="Blog Post" />
    ) : (
      <p>Error loading image</p>
    );
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      {blogPosts.map(async (post) => (
        <div key={post.$id}>
          <h3>{post.title}</h3>
          <p>Author: {post.author}</p>
          <p>{post.content}</p>

          {post.image && <BlogImage imageId={post.image} />}
          <p>Public: {post.isPublic ? "Yes" : "No"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
