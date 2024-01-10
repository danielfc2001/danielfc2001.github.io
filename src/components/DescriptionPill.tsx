import { FC } from "react";
import { PillTitleType } from "./Types";
import DescriptionPillTitle from "./DescriptionPillTitle";
import DescriptionPillIcon from "./DescriptionPillIcon";
import DescriptionPillProgress from "./DescriptionPillProgress";
import "./descriptionPills.css";

const DescriptionPill: FC<PillTitleType> = ({ title, progress, icon }) => {
  return (
    <div className="col-12 col-md-4 p-3">
      <div className="lenguaje-pill shadow-lg py-2">
        <div className="d-flex align-items-stretch my-2">
          <DescriptionPillIcon className="ms-3" icon={icon} w="50px" h="50px" />
          <div className="d-block w-100 px-3">
            <DescriptionPillTitle className="w-100 text-center" title={title} />
            <DescriptionPillProgress valueNow={progress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPill;
