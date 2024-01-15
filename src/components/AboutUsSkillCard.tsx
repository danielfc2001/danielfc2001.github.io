import { FC } from "react";
import { AboutUsSkillCardTypes } from "./Types";

const AboutUsSkillCard: FC<AboutUsSkillCardTypes> = ({
  skill,
  usedLenguageIcon,
  useTecIcon,
  useSecondTecIcon,
}) => {
  return (
    <article className="about-us-skill-card">
      {skill}
      <img src={usedLenguageIcon} style={{ borderRadius: ".3rem" }} />
      {useTecIcon ? (
        <img src={useTecIcon} style={{ borderRadius: ".3rem" }} />
      ) : (
        <></>
      )}
      {useSecondTecIcon ? (
        <img src={useSecondTecIcon} style={{ borderRadius: ".3rem" }} />
      ) : (
        <></>
      )}
    </article>
  );
};

export default AboutUsSkillCard;
