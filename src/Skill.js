import React from "react";

const Skill = () => {
  return (
    <section id="skill" className="skills container mt-5 py-5 text-center">
      <div className="sec-title fs-1 fw-bolder text-center m-auto">Skills</div>
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
  );
};

export default Skill;
