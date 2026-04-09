
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Weather from "./pages/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/weather">Weather</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

