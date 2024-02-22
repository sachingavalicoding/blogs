import { BrowserRouter, Route, Routes } from "react-router-dom";
import conf from "./conf/conf";
import Home from "./pages/Home/Home";
const App = () => {
  console.log(conf.appWriteUrl);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
