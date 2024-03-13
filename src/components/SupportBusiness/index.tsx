import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import supportBusiness from "@/assets/supportBusiness.svg";
import learnMore from "@/assets/learn-more.svg";

const SupportBusiness = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Image
            src={supportBusiness}
            alt=""
            layout="responsive"
            width="609"
            height="421"
          />
        </Col>
        <Col xs={12} md={6} className="mt-5 mt-md-5">
          <div className="custom-title-support-business">
            We are here to support your business
          </div>
          <div className="custom-description-support-business">
            At Nebula Logix, we are passionate about leveraging technology to
            empower businesses and make sure it aligns your organizational
            goals, scalability needs, and cost considerations.
          </div>
          <Link href="#">
            <Image src={learnMore} alt="Learn more" width="150" height="150" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SupportBusiness;
