import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import imgValues from "@/assets/imgValues.svg";
import values from "../../data/values.json";
import Skills from "../Skills";
import hands from "@/assets/hands.svg";

const Values = () => {
  return (
    <section className="bg-white">
      <Container className="container-values">
        <h2 className="title-values">Our Values</h2>
        <Row>
          <Col xs={12} md={6} className="p-0">
            <div
              style={{
                width: "95%",
                height: "auto",
                borderRadius: "20px",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              <Image src={imgValues} alt="Our Values" layout="responsive" />
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            style={{
              position: "relative",
              top: "-35px",
              margin: "0 auto",
              width: "50%",
            }}
          >
            <div>
              <Row>
                {values.slice(0, 2).map((item) => (
                  <Col md={6} key={item.id} style={{ marginBottom: "-30px" }}>
                    <Skills
                      title={item.title}
                      description={item.description}
                      displayImgButton={false}
                    />
                  </Col>
                ))}
              </Row>
              <Row>
                {values.slice(2, 4).map((item) => (
                  <Col md={6} key={item.id}>
                    <Skills
                      title={item.title}
                      description={item.description}
                      displayImgButton={false}
                    />
                  </Col>
                ))}
              </Row>
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
                src={hands}
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

export default Values;
