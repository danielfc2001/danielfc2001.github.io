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
        <div className="project-pill-content">
          <div className="d-block w-100 my-2">
            <DescriptionPillTitle
              className="project-pill-title w-100"
              title={title}
            />
          </div>
          {tecs && tecs?.length > 0 && (
            <article className="pill-pr-tecs">
              {tecs.map((el, index) => (
                <DescriptionPillPrTecs src={el} key={index} />
              ))}
            </article>
          )}
          {description && <p className="pill-pr-description">{description}</p>}
          <div className="d-flex justify-content-between align-items-center">
            {code && (
              <DescriptionPillBtn title="Code" icon="code-slash" to={code} />
            )}
            {demo && (
              <DescriptionPillBtn title="Live" icon="display" to={demo} />
            )}
          </div>
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
  return <i className={`devicon-${src}-plain pill-pr-tec`}></i>;
};

export default DescriptionPillPr;
