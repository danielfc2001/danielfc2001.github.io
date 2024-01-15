import { FC, useEffect, useState } from "react";
import { ContainerPillTypes } from "./Types";
import DescriptionPill from "./DescriptionPill";
import "./containerPills.css";
import ContainerPillEmpty from "./ContainerPillEmpty";
import DescriptionPillPr from "./DescriptionPillPr";

const ContainerPills: FC<ContainerPillTypes> = ({ title, target, content }) => {
  const [active, setActive] = useState<boolean>(false);
  const intersectionObserver = new IntersectionObserver(fn, {
    threshold: 1,
  });

  function fn(entries: any, _observer: any) {
    entries.forEach((el: any) => {
      if (el.isIntersecting) {
        setActive(true);
      }
    });
  }

  useEffect(() => {
    const containerHeader = document.querySelector(".container-header");
    if (containerHeader) {
      intersectionObserver.observe(containerHeader);
    }
  }, [onscroll]);
  return (
    <section className="container-pill">
      <h3 className="container-header">
        <span className={`header-span-left ${active ? "visible" : ""}`}>
          {"<"}
        </span>
        {title}
        <span className={`header-span-right ${active ? "visible" : ""}`}>
          {"/>"}
        </span>
      </h3>
      <div className="row justify-content-center p-3 mx-0 shadow">
        {target === "projects" &&
          content.map((el, index) => {
            return (
              <DescriptionPillPr
                title={el.title}
                description={el.description}
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
                icon={el.img}
                link={el.link}
                key={index}
              />
            );
          })}
        {content.length === 0 && <ContainerPillEmpty />}
      </div>
    </section>
  );
};

export default ContainerPills;
