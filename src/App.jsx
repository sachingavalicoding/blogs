import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeLayout } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
