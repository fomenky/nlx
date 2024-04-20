import React from "react";
import Team from "../Team";
import { Container, Row, Col } from "react-bootstrap";

import fomenky from "@/assets/teams/fomenky.png";
import irene from "@/assets/teams/irene.png";
import ouboti from "@/assets/teams/ouboti.png";
import timbet from "@/assets/teams/timbet.png";

const teams = [
  {
    id: 1,
    img: fomenky,
    title: "Ache Fomenky",
    description: "Founder/Consulting Partner",
  },
  {
    id: 2,
    img: irene,
    title: "Irene Ogutu",
    description: "Co-Founder/Consulting Partner",
  },
  {
    id: 3,
    img: ouboti,
    title: "Dr Ouboti Djaneye",
    description: "Consulting Partner",
  },
  {
    id: 4,
    img: timbet,
    title: "Timbet Ekanem",
    description: "Consulting Partner",
  },
];

const MyTeam = () => {
  return (
    <section className="bg-white">
      <Container className="container-my-team">
        <div className="title-my-team">Meet the team</div>

        <div className="team-divider my-4" />

        <Row className="mt-5">
          {teams.map((member) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              key={member.id}
              className="mb-4 text-center"
            >
              <Team
                imageSrc={member.img}
                altText={""}
                title={member.title}
                description={member.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MyTeam;
