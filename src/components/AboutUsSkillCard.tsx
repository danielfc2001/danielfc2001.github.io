import { FC } from "react";
import { AboutUsSkillCardTypes } from "./Types";

const AboutUsSkillCard: FC<AboutUsSkillCardTypes> = ({
  skill,
  usedLenguageIcon,
  useTecIcon,
}) => {
  return (
    <article className="about-us-skill-card">
      {skill}
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${usedLenguageIcon}/${usedLenguageIcon}-original.svg`}
      />
      {useTecIcon ? (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${useTecIcon}/${useTecIcon}-original.svg`}
        />
      ) : (
        <></>
      )}
    </article>
  );
};

export default AboutUsSkillCard;
