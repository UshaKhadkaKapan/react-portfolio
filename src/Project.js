import React from "react";

const Project = () => {
  return (
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
                This is my e-commerce website. I made this website by using HTML
                and CSS only.While making this website, I learn many things like
                flex-box, grid and many more. It have many almost six pages. I
                tired to make real looking e-commerce website. I made this for
                my University assignment.
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
                This is my Travel blog. I made this website by using HTML and
                CSS only. While making this website, I search and learn about
                flex-box. By using flex-box, i manage to make navbar, visiting
                places, recommendation and many more.{" "}
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
                This is my Instagram Clone. I made this website by using HTML
                and CSS only. While making this website, I search and learn
                about flex-box.By using flex-box, i manage to make navbar,
                visiting places, recommendation and many more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
