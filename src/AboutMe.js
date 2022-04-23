import React from "react";

const AboutMe = () => {
  return (
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
            I am undergraduate student. I want to become software developer so I
            am learning as much as I can to grow myself.I am learning IT from
            last 3 years and I have deep interest on it. Expect studying, I love
            to watch horror movies and cartoons.I love to cook also but it never
            taste good😂.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
