import React from "react";
// another way to import pic
import second from "./pic.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row className="row mt-md-5 py-3">
          <Col md="6" className="order-md-2 text-center ">
            <img
              id="img"
              src={second}
              alt="computer"
              width="80%"
              className="ml-auto"
            />
          </Col>
          <Col md="6" className="pt-5">
            <h4>Hi I am Usha Khadka</h4>
            <h1>Software Developer</h1>
            <p className="pt-4">
              I am undergraduate student. I want to become software developer so
              I am learning as much as I can to grow myself.I am learning IT
              from last 3 years and I have deep interest on it. Expect studying,
              I love to watch horror movies and cartoons.I love to cook also but
              it never taste good😂.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
