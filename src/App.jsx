// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Categories from "./pages/Categories";
import About from "./pages/About"; // ✅ Imported About page
import Home from "./pages/Home"; // ✅ Imported Home page
import Policy from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<Policy />} />
        {/* Add more routes as needed */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
