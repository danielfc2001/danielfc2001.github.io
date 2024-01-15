import { FC } from "react";

type HeaderTypes = {
  title: string;
};

const ContainerHeader: FC<HeaderTypes> = ({ title }) => {
  return <h3 className="text-center mb-0">{title}</h3>;
};

export default ContainerHeader;
