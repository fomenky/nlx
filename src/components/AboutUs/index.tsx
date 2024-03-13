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
              We leverage our profound expertise and champion innovation to
              intricately design bespoke solutions that address your business
              challenges. Our seasoned consultants adeptly navigate intricate
              complexities, guiding you towards achieving unparalleled success
              within your industry.
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
