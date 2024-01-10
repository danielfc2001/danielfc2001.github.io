import { FC } from "react";
import { ContainerPillsObj } from "./Types";
import DescriptionPill from "./DescriptionPill";
import "./containerPills.css";
import ContainerPillEmpty from "./ContainerPillEmpty";
import DescriptionPillPr from "./DescriptionPillPr";

type ContainerPillTypes = {
  target: string;
  content: Array<ContainerPillsObj>;
};

const ContainerPills: FC<ContainerPillTypes> = ({ target, content }) => {
  return (
    <div className="row container-pill p-3 mx-0 shadow">
      {target === "projects" &&
        content.map((el, index) => {
          return (
            <DescriptionPillPr
              title={el.title}
              description={el.description}
              progress={el.progress}
              tecs={el.tecs}
              icon={el.img}
              code={el.link}
              demo={el.demo}
              key={index}
            />
          );
        })}
      {target === "learned" &&
        content.map((el, index) => {
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
      {target === "certificates" &&
        content.map((el, index) => {
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
