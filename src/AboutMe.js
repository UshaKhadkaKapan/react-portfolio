import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./Layout";

const AboutMe = () => {
  return (
    <Layout>
      <Container id="about">
        <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
          About ME
        </div>
        <Row className="mt-5">
          <Col md="5" className="m-auto">
            <img src={require("./pic.jpg")} width="80%" alt="" />
          </Col>
          <Col md="7" className="py-5">
            <p>
              I am undergraduate student. I want to become software developer so
              I am learning as much as I can to grow myself.I am learning IT
              from last 3 years and I have deep interest on it. Expect studying,
              I love to watch horror movies and cartoons.I love to cook also but
              it never taste good😂.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AboutMe;
