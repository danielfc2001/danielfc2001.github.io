import { FC } from "react";
import { PillTitleType } from "./Types";
import DescriptionPillTitle from "./DescriptionPillTitle";
import "./descriptionPills.css";

const DescriptionPill: FC<PillTitleType> = ({ title, icon }) => {
  return (
    <div className="col-4 col-md-2 p-3">
      <div className="lenguaje-pill shadow-lg py-2">
        <div className="d-block text-center my-2">
          <i className={`devicon-${icon}-plain fs-1`} />
          <DescriptionPillTitle className="d-block text-center" title={title} />
        </div>
      </div>
    </div>
  );
};

export default DescriptionPill;
