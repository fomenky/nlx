import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import logoFooter from "../../assets/logoFooter.svg";

const Footer = () => {
  return (
    <footer className="py-4 bg-black text-white">
      <Container className="text-center">
        <Row>
          <Col>
            <Image src={logoFooter} alt="" width="100" height="51" />
            <div className="custom-copyrigt">
              Copyright &copy; 2024 NEBULA LOGIX
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
