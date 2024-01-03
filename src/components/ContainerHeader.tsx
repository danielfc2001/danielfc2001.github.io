import { FC } from "react";

type HeaderTypes = {
  title: string;
};

const ContainerHeader: FC<HeaderTypes> = ({ title }) => {
  return (
    <div className="container-header mb-4" style={{ borderRadius: "1rem" }}>
      <h3 className="text-white text-center mb-0">{title}</h3>
    </div>
  );
};

export default ContainerHeader;
