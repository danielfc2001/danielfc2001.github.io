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
      {icon === "code-slash" ? (
        <i className={`devicon-github-plain`}></i>
      ) : (
        <i className={`bi bi-${icon}`}></i>
      )}
      {title}
    </a>
  );
};

export default DescriptionPillBtn;
