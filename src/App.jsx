import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddBlog, HomeLayout, BlogDetails } from "./pages";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
