import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import supportBusiness from "@/assets/supportBusiness.png";

const AboutUs = () => {
  return (
    <section className="bg-white">
      <Container className="container-about-us">
        <Row>
          <Col md={6}>
            <div className="title-about-us">
              About <span>Us</span>
            </div>
          </Col>
          <Col md={6}>
            <div className="description-about-us">
              At Nebula Logix, we are more than just a software consulting
              company - we are your serverless partners in innovation and
              growth. With a focus on end-to-end serverless solutions and cloud
              consulting, we collaborate with clients globally to bring their
              ideas to life and scale their businesses through innovative
              software products.
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div
              className="image-container"
              style={{ position: "relative", width: "100%", height: "auto" }}
            >
              <Image
                src={supportBusiness}
                alt="Support Business"
                layout="responsive"
                width={900}
                height={600}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
