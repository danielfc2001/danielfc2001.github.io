import { FC } from "react";
import { ContainerPillsObj } from "./Types";
import DescriptionPill from "./DescriptionPill";
import "./containerPills.css";
import ContainerPillEmpty from "./ContainerPillEmpty";

type ContainerPillTypes = {
  content: Array<ContainerPillsObj>;
};

const ContainerPills: FC<ContainerPillTypes> = ({ content }) => {
  return (
    <div className="row container-pill gx-5 px-5 mx-0 shadow">
      {content?.map((el, index) => {
        return (
          <DescriptionPill
            title={el.title}
            progress={el.progress}
            icon={el.img}
            link={el.link}
            key={index}
          />
        );
      })}
      {content.length === 0 && <ContainerPillEmpty />}
    </div>
  );
};

export default ContainerPills;
