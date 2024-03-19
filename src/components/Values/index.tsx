import React from "react";
import Image from "next/image";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import imgValues from "@/assets/imgValues.svg";
import values from "../../data/values.json";
import Skills from "../Skills";
import hands from "@/assets/hands.svg";
import { chunkCards, chunkCardDataType } from "@/utils/ChunkCards";

const Values = () => {
  const valueGroups = chunkCards(values, 4);

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
          <Col xs={12} md={6}>
            <Carousel
              style={{ marginTop: "-30px" }}
              prevIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-prev-icon custom-prev-icon"
                />
              }
              nextIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-next-icon custom-next-icon"
                />
              }
            >
              {valueGroups.map((group, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    {group.map((item: chunkCardDataType) => (
                      <Col
                        md={6}
                        key={item.id}
                        className="d-flex justify-content-center"
                      >
                        <Skills
                          title={item.title}
                          description={item.description}
                          displayImgButton={false}
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
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
