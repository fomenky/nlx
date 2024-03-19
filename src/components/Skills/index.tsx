import React from "react";
import { Button, Card } from "react-bootstrap";
import Image from "next/image";
import showMore from "@/assets/showMore.svg";
import circleSkills from "@/assets/circleSkills.svg";

interface SkillsProps {
  title: string;
  description: string;
  displayImgButton: boolean;
  onButtonClick?: () => void;
}

const Skills: React.FC<SkillsProps> = ({
  title,
  description,
  displayImgButton,
  onButtonClick,
}) => {
  return (
    <Card
      style={{ maxWidth: "21rem", height: "15rem", marginTop: 50 }}
      className="shadow-sm d-flex flex-column custom-card-skills"
    >
      <Card.Body className="d-flex flex-grow-1 flex-column">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Card.Title className="custom-title-skills">{title}</Card.Title>
          <Image
            src={circleSkills}
            alt="Circle Skills"
            width="10"
            height="10"
            layout="fixed"
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Card.Text className="mb-1 custom-description-skills">
            {description}
          </Card.Text>
          <Button className="custom-button-show-more" onClick={onButtonClick}>
            {displayImgButton && (
              <Image
                src={showMore}
                alt="Show more"
                width="30"
                height="30"
                layout="fixed"
              />
            )}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Skills;
