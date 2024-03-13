import React from "react";
import Image, { StaticImageData } from "next/image";

interface TeamProps {
  imageSrc: StaticImageData;
  altText: string;
  title: string;
  description: string;
}

const Team: React.FC<TeamProps> = ({
  imageSrc,
  altText,
  title,
  description,
}) => {
  return (
    <>
      <Image src={imageSrc} alt={altText} width={250} height={250} />
      <div className="title-team">{title}</div>
      <div className="description-team">{description}</div>
    </>
  );
};

export default Team;
