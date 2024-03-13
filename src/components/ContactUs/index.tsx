import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import stepBulding from "@/assets/stepBulding.svg";
import sendMessage from "@/assets/sendMessage.svg";
import { Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const formControlStyle = {
    border: "none",
    borderBottom: "1px solid #D5D5D5",
    borderRadius: "0",
    marginBottom: "2rem",
    boxShadow: "none",
  };

  return (
    <section className="bg-white" id="contactUsSection">
      <Container className="container-contact-us">
        <Row>
          <Col md={6}>
            <div className="custom-title-contact-us">Contact Us</div>
            <div className="custom-description-contact-us">
              Working something cool? Great, we want to help! <br /> Send a
              message.
            </div>
            <Image src={stepBulding} alt="" width="285" height="325" />
          </Col>

          <Col md={6}>
            <Form className="my-4 mt-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  style={formControlStyle}
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  style={formControlStyle}
                  type="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Control
                  style={formControlStyle}
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  required
                />
              </Form.Group>

              <Button className="button-contact-us" type="submit">
                <Image src={sendMessage} alt="" width="150" />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
