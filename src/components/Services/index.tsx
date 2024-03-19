import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import Skills from "../Skills";
import services from "../../data/services.json";
import { chunkCards, chunkCardDataType } from "@/utils/ChunkCards";

const Services = () => {
  const handleDisplayDetail = (id: number) => {
    console.log(`Detail for service ${id}`);
  };

  const serviceGroups = chunkCards(services, 3);

  return (
    <section className="bg-white">
      <Container className="custom-container-services">
        <div className="title-services">Our Services</div>
        <Carousel
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
          {serviceGroups.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {group.map((item: chunkCardDataType) => (
                  <Col key={item.id} sm={12} md={6} lg={4} xl={4}>
                    <Skills
                      title={item.title}
                      description={item.description}
                      displayImgButton={false}
                      onButtonClick={() => handleDisplayDetail(item.id)}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Services;
