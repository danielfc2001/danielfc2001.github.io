import { FC } from "react";

type DescriptionPillBtnTypes = {
  title: string;
  icon: string;
  to: string;
};

const DescriptionPillBtn: FC<DescriptionPillBtnTypes> = ({
  title,
  icon,
  to,
}) => {
  return (
    <a className="description-pill-btn" href={to} role="button">
      <i className={`bi bi-${icon}`}></i>
      {title}
    </a>
  );
};

export default DescriptionPillBtn;
