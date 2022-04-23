import React from "react";

const Contactme = () => {
  return (
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
  );
};

export default Contactme;
