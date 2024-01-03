import { FC } from "react";
import { PillTitleType } from "./Types";
import "./descriptionPills.css";

const DescriptionPillTitle: FC<PillTitleType> = ({ className, title }) => {
  return <span className={className}>{title}</span>;
};

export default DescriptionPillTitle;
