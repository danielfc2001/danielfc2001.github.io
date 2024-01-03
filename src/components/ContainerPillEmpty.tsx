import { FC } from "react";
import "./containerPills.css";

const ContainerPillEmpty: FC = () => {
  return (
    <span className="container-pill-empty-text">
      No hay contenido para mostrar.
    </span>
  );
};

export default ContainerPillEmpty;
