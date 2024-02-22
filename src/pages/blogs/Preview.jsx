import HeadingCard from "../../components/ui/card/HeadingCard";
import "./blog.css";
const Preview = () => {
  return (
    <div className=" preview__container">
      <img src="./assets/coding/slide1.jpg" alt="" />
      <div className="preview__content">
        <HeadingCard
          heading={"Javascript Master "}
          subheading={" Computer Science "}
          content={
            "JavaScript, the backbone of modern web development, offers a powerful and versatile toolset. In this blog post, we explore advanced concepts to elevate your JavaScript skills. From closures and asynchronous programming to ES6 features like arrow functions and destructuring, discover the intricacies that make JavaScript a dynamic language. Delve into functional programming paradigms and design patterns for robust code architecture. With real-world examples and concise explanations, this guide empowers you to master JavaScript, enabling you to build scalable and efficient web applications. Unleash the full potential of this language and become a proficient JavaScript developer."
          }
        />
      </div>
    </div>
  );
};

export default Preview;
