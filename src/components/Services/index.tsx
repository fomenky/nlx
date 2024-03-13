import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skills from "../Skills";
import services from "../../data/services.json";

const Services = () => {
  const handleDisplayDetail = (id: number) => {
    console.log(`Detail for service ${id}`);
  };
  return (
    <section className="bg-white">
      <Container className=" custom-container-services">
        <div className="title-services"> Our Services </div>
        <Row className="justify-content-center">
          {services.map((item) => (
            <Col
              className="custom-skill-col"
              key={item.id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Skills
                title={item.title}
                description={item.description}
                displayImgButton={true}
                onButtonClick={() => handleDisplayDetail(item.id)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
