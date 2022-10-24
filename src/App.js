import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* <Route index path="/" element={<Home />} /> */}
      {/* <Home /> */}
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
