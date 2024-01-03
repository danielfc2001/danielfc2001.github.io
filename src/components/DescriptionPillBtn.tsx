import { FC } from "react";

type DescriptionPillBtnTypes = {
  to: string;
};

const DescriptionPillBtn: FC<DescriptionPillBtnTypes> = ({ to }) => {
  return (
    <a className="description-pill-btn" href={to} role="button">
      <i className="bi bi-github me-1"></i>
      View on GitHub
    </a>
  );
};

export default DescriptionPillBtn;
