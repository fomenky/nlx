import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import vector from "@/assets/vector.svg";
import circle from "@/assets/circle.svg";

const Vision = () => {
  return (
    <section className="bg-white">
      <Container className="mt-5 container-vision">
        <Row>
          <Col xs={12} md={6} className="d-none d-md-block">
            <Image
              src={vector}
              alt="Vector"
              layout="responsive"
              width={559}
              height={400}
            />
          </Col>

          <Col xs={12} md={6}>
            <Image
              src={circle}
              alt="Circle"
              layout="responsive"
              width={530}
              height={439}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Vision;
