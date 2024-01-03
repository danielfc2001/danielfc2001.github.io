import { FC } from "react";
import { PillProgressTypes } from "./Types";
import "./descriptionPills.css";

const DescriptionPillProgress: FC<PillProgressTypes> = ({ valueNow }) => {
  return (
    <>
      <div
        className="progress position-relative progress-skill mt-2 mx-auto"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={valueNow}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar bg-success"
          style={{ width: `${valueNow}%` }}
        ></div>
        <span className="position-absolute top-50 start-50 translate-middle">
          {`${valueNow}%`}
        </span>
      </div>
    </>
  );
};

export default DescriptionPillProgress;
