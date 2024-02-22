import { IoSearchSharp } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import "./blog.css";
import { useState } from "react";
import { posts } from "../../data";
const BlogLayout = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="blog__container">
        <div className="blog__inputbox">
          <input
            type="text"
            placeholder="Which one You like to see....."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <IoSearchSharp />
        </div>
        <div className="blog__filter">
          <button className=" btn light-btn"> Computer Science </button>
          <button className=" btn light-btn"> Web Development </button>
          <button className=" btn light-btn"> App Development </button>
          <button className=" btn light-btn"> Mathematics </button>
          <button className=" btn light-btn"> Data Science </button>
        </div>

        <ul className="blog__wrapper">
          {posts.map(
            ({ id, heading, subheading, author, likes, comments, image }) => {
              return (
                <li key={id} className="post">
                  <img src={image} alt="post" />
                  <div className="post__content">
                    <h3> {author} </h3>
                    <h2> {heading} </h2>
                    <p> {subheading} </p>
                    <div className="btn__container">
                      <button className="btn"> Read More </button>
                      <div className="likes">
                        <p>
                          {" "}
                          <AiFillLike className="red" /> {likes}{" "}
                        </p>
                        <p>
                          {" "}
                          <FaComment /> {comments}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
};

export default BlogLayout;
