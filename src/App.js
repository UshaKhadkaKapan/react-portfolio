import { Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div classNameName="App">
      <div className="wrapper">
        {/* <!-- ========= navbar=========== --> */}
        <div id="top-nav" className="top-nave">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                {" "}
                Usha{" "}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#skill"
                    >
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      Project
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact" tabindex="-1">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="hero">
            <div className="container">
              <div className="row mt-md-5 py-3">
                <div className="col-md-6 order-md-2 text-center ">
                  <img
                    id="img"
                    src={require("./pic.jpg")}
                    alt="computer"
                    width="80%"
                    className="ml-auto"
                  />
                </div>
                <div className="col pt-5">
                  <h4>Hi I am Usha Khadka😉</h4>
                  <h1>Software Developer</h1>
                  <p className="pt-4">
                    I am undergraduate student. I want to become software
                    developer so I am learning as much as I can to grow myself.I
                    am learning IT from last 3 years and I have deep interest on
                    it. Expect studying, I love to watch horror movies and
                    cartoons.I love to cook also but it never taste good😂.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============hero=========== --> */}
        <section id="skill" className="skills container mt-5 py-5 text-center">
          <div className="sec-title fs-1 fw-bolder text-center m-auto">
            Skills
          </div>
          <div className="sec-content fs-1 mt-5 d-flex justify-content-between">
            <span className="d-flex flex-column text-danger">
              <i className="fab fa-html5"></i>Html
            </span>
            <span className="d-flex flex-column text-primary">
              <i className="fab fa-css3-alt"></i>CSS
            </span>
            <span className="d-flex flex-column text-warning">
              <i className="fab fa-js"></i>JS
            </span>
          </div>
        </section>
        {/* <!-- ============hero-bg======== -->
      <!-- ============skill section======== --> */}
        <section id="projects" className="project">
          <div className="sec-title fs-1 fw-bolder text-center m-auto py-5">
            Projects
          </div>
          <div className="proj-content  mt-5">
            <div className="container">
              <div className="row  mt-5 py-5">
                <div className="col-md-6 ">
                  <img
                    src={require("./Project3.PNG")}
                    width="80%"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                  <h2>E-commerce Website</h2>
                  <div className="links">
                    <a href="github link" target="blank">
                      <i className="fab fa-github" aria-hidden="true"></i>
                    </a>

                    <a href="github link" target="blank">
                      <i className="fab fa-chrome" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="mt-3 fw-bold ">Tech: HTML and CSS</div>
                  <p className="mt-3">
                    This is my e-commerce website. I made this website by using
                    HTML and CSS only.While making this website, I learn many
                    things like flex-box, grid and many more. It have many
                    almost six pages. I tired to make real looking e-commerce
                    website. I made this for my University assignment.
                  </p>
                </div>
              </div>

              <div className="row mt-5 py-5">
                <div className="col-md-6 order-md-2 ">
                  <img
                    src={require("./Project2.PNG")}
                    width="80%"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                  <h2>Travel Blog</h2>
                  <div className="links">
                    <a href="github link" target="blank">
                      <i className="fab fa-github" aria-hidden="true"></i>
                    </a>

                    <a href="github link" target="blank">
                      <i className="fab fa-chrome" aria-hidden="true"></i>
                    </a>
                    <div className="mt-3 fw-bold ">Tech: HTML and CSS</div>
                  </div>
                  <p>
                    This is my Travel blog. I made this website by using HTML
                    and CSS only. While making this website, I search and learn
                    about flex-box. By using flex-box, i manage to make navbar,
                    visiting places, recommendation and many more.{" "}
                  </p>
                </div>
              </div>

              <div className="row  mt-5 py-5">
                <div className="col-md-6 ">
                  <img
                    src={require("./project1.PNG")}
                    width="80%"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                  <h2>Instagram Clone</h2>
                  <div className="links">
                    <a href="github link" target="blank">
                      <i className="fab fa-github" aria-hidden="true"></i>
                    </a>

                    <a href="github link" target="blank">
                      <i className="fab fa-chrome" aria-hidden="true"></i>
                    </a>
                    <div className="mt-3 fw-bold ">Tech: HTML and CSS</div>
                  </div>
                  <p>
                    This is my Instagram Clone. I made this website by using
                    HTML and CSS only. While making this website, I search and
                    learn about flex-box.By using flex-box, i manage to make
                    navbar, visiting places, recommendation and many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ============about me======== --> */}
        <section id="about" className="container">
          <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
            About ME
          </div>
          <div className="row mt-5">
            <div className="col-md-5 m-auto">
              <img src={require("./pic.jpg")} width="80%" alt="" />
            </div>
            <div className="col-md-7 py-5">
              <p>
                I am undergraduate student. I want to become software developer
                so I am learning as much as I can to grow myself.I am learning
                IT from last 3 years and I have deep interest on it. Expect
                studying, I love to watch horror movies and cartoons.I love to
                cook also but it never taste good😂.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- ============contact======== --> */}
        <section className="container mt-5" id="contact">
          <div className="contact-icons rounded py-3">
            <div className="sec-title fs-1 fw-bolder text-center m-auto">
              Contact Me
            </div>
            <div className="icons mt-4">
              <a href="telto:0404472121">
                {" "}
                <i className="fas fa-mobile-alt"></i>
              </a>
              <a href="mailto:khadkausha83@gmail.com" target="_blank">
                <i className="fas fa-envelope-open"></i>
              </a>
              <a href="" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" target="_blank">
                <i className="fab fa-facebook-messenger"></i>
              </a>
              <a href="" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
