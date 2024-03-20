import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import supportBusiness from "@/assets/supportBusiness.svg";
// import learnMore from "@/assets/learn-more.svg";

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
        <Col xs={12} md={6} className="mt-5 mt-md-2">
          <div className="custom-title-support-business">
            We are here to support your business
          </div>
          <p className="custom-p-support-business">
            Expertise in Serverless Cloud Solutions:{" "}
            <span>
              We specialize in serverless technologies, offering unparalleled
              expertise in architecting and implementing cloud-native solutions
              tailored to your business needs.
            </span>
          </p>

          <p className="custom-p-support-business">
            Proven Track Record:{" "}
            <span>
              With a track record of successful projects and satisfied clients,
              we bring experience and reliability to every engagement, ensuring
              the best outcomes for your organization.
            </span>
          </p>

          <p className="custom-p-support-business">
            Client-Centric:{" "}
            <span>
              We prioritize understanding your unique challenges and goals,
              working closely with you to develop customized solutions that
              deliver tangible value and drive business growth.
            </span>
          </p>

          <p className="custom-p-support-business">
            Innovation and Excellence:{" "}
            <span>
              Our team stays ahead of the curve with the latest advancements in
              serverless technology, ensuring that your solutions are built with
              cutting-edge tools and methodologies.
            </span>
          </p>

          <p className="custom-p-support-business">
            Global Reach:{" "}
            <span>
              Operating worldwide, we are equipped to serve clients across
              diverse industries and geographical locations, providing
              consistent quality and support wherever you are located.
            </span>
          </p>

          {/* <Link href="#">
            <Image src={learnMore} alt="Learn more" width="150" height="150" />
          </Link> */}
        </Col>
      </Row>
    </Container>
  );
};

export default SupportBusiness;
