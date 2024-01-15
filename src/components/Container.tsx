import ContainerPills from "./ContainerPills";
import { LENGUAGES, PROJECTS } from "../data/data";
import { FC, useEffect, useState } from "react";
import { ContainerPillsObj } from "./Types";

type ContainerTypes = {
  title: string;
  target: string;
};

const Container: FC<ContainerTypes> = ({ title, target }) => {
  const [content, setContent] = useState<ContainerPillsObj[]>();
  useEffect(() => {
    switch (target) {
      case "learned":
        setContent(LENGUAGES);
        break;
      case "projects":
        setContent(PROJECTS);
        break;
    }
  }, []);
  return (
    <>
      <section id={target} className="section-container mt-5">
        <ContainerPills
          title={title}
          target={target}
          content={content ? content : []}
        />
      </section>
    </>
  );
};

export default Container;
