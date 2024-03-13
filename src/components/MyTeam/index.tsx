import React from "react";
import Team from "../Team";
import { Container, Row, Col } from "react-bootstrap";

import fomenky from "@/assets/teams/fomenky.png";
import ouboti from "@/assets/teams/ouboti.png";
import miriam from "@/assets/teams/miriam.png";
import georgia from "@/assets/teams/georgia.png";

const teams = [
  {
    id: 1,
    img: fomenky,
    title: "Ache Fomenky",
    description: "Partner",
  },
  {
    id: 2,
    img: ouboti,
    title: "Ouboti Djaneye",
    description: "Partner",
  },
  {
    id: 3,
    img: miriam,
    title: "Mirian Achonwa",
    description: "Partner",
  },
  {
    id: 4,
    img: georgia,
    title: "Georgia Clarence",
    description: "Partner",
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
