import { FC } from "react";
import { PillProjectTypes } from "./Types";
import DescriptionPillTitle from "./DescriptionPillTitle";
import DescriptionPillBtn from "./DescriptionPillBtn";
import "./descriptionPills.css";

const DescriptionPillPr: FC<PillProjectTypes> = ({
  icon,
  title,
  tecs,
  description,
  code,
  demo,
}) => {
  return (
    <div className="project-pill-container col-12 col-md-4 p-3">
      <div className="project-pill shadow-lg">
        <DescriptionPillPrImage src={icon} />
        <div className="d-block w-100 px-3 my-2">
          <DescriptionPillTitle className="w-100" title={title} />
        </div>
        {tecs && tecs?.length > 0 && (
          <article className="pill-pr-tecs">
            {tecs.map((el, index) => (
              <DescriptionPillPrTecs
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${el}/${el}-original.svg`}
                key={index}
              />
            ))}
          </article>
        )}
        {description && <p className="pill-pr-description">{description}</p>}
        <div className="d-flex justify-content-between align-items-center px-3">
          {code && (
            <DescriptionPillBtn title="Code" icon="code-slash" to={code} />
          )}
          {demo && <DescriptionPillBtn title="Live" icon="display" to={demo} />}
        </div>
      </div>
    </div>
  );
};

type DescriptionPillPrImageTypes = {
  src: string | undefined;
};

const DescriptionPillPrImage: FC<DescriptionPillPrImageTypes> = ({ src }) => {
  return <img className="pill-pr-image" src={src}></img>;
};

type DescriptionPillPrTecsTypes = {
  src: string;
};

const DescriptionPillPrTecs: FC<DescriptionPillPrTecsTypes> = ({ src }) => {
  return (
    <img className="pill-pr-tec" src={src} width={"30px"} height={"30px"} />
  );
};

export default DescriptionPillPr;
