import { Button } from "react-bootstrap";
import AboutMe from "./AboutMe";
import "./App.css";
import Contactme from "./Contactme";
import Footer from "./Footer";
import Hero from "./Hero";
import Project from "./Project";
import Skill from "./Skill";
import TovNav from "./TovNav";

function App() {
  return (
    <div classNameName="App">
      <div className="wrapper">
        {/* <!-- ========= navbar=========== --> */}
        <div id="top-nav" className="top-nave">
          <TovNav />
          {/* hero */}
          <Hero />
        </div>
        {/* <!-- ============hero=========== --> */}
        <Skill />
        {/* <!-- ============hero-bg======== -->
      <!-- ============skill section======== --> */}
        <Project />
        {/* <!-- ============about me======== --> */}
        <AboutMe />
        {/* <!-- ============contact======== --> */}
        <Contactme />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
