import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddBlog, HomeLayout, BlogDetails } from "./pages";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Saved from "./pages/saved/Saved";
import SmNav from "./components/nav/SmNav";
import Fev from "./pages/saved/Fev";
const App = () => {
  return (
    <BrowserRouter>
      <SmNav />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/fev" element={<Fev />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
