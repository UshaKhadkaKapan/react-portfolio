import { Button } from "react-bootstrap";
import AboutMe from "./AboutMe";
import "./App.css";
import Contactme from "./Contactme";
import Footer from "./Footer";
import Hero from "./Hero";
import Project from "./Project";
import Skill from "./Skill";
import TovNav from "./TovNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <TovNav />
          <Hero /> */}

          <Route path="/skills" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contactme />} />
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
