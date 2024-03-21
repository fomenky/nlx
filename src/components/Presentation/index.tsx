import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import learnMore from "@/assets/learn-more.svg";
import ellipse from "@/assets/ellipse.svg";

const Presentation = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="content-section">
          <div className="custom-title">
            Empowering <span>Businesses</span> Through Transformative Cloud{" "}
            <span>Solutions</span>.
          </div>
          <div className="custom-description">
            Our team of seasoned experts specialize in providing comprehensive
            cloud consulting services, delivering tailored strategies and
            implementation plans to drive your digital transformation.
          </div>
          <a target="_blank" href="https://calendly.com/nebulalogix">
            <Image src={learnMore} alt="Learn more" width="160" height="160" />
          </a>
        </Col>

        <Col md={6} className="image-section">
          <Image src={ellipse} alt="Ellipse" width="358" height="700" />
        </Col>
      </Row>
    </Container>
  );
};

export default Presentation;
