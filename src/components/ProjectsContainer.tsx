import ContainerHeader from "./ContainerHeader";
import { FC, useContext } from "react";
import ContainerNavigation from "./ContainerNavigation";
import ContainerNavigationTab from "./ContainerNavigationTab";
import { GlobalContext, IGlobal } from "../context/globalContext";
import ContainerPills from "./ContainerPills";

const PROJECTSPENDINGS = [
  {
    title: "Ad`Publisher",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quam!",
    progress: 50,
    img: "https://danielfc2001.github.io/dd-dev-profile/assets/JPG.jpg",
    tecs: ["react", "nodejs"],
    link: "#",
    demo: "#",
  },
  {
    title: "DD`Dev Profile",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quam!",
    progress: 50,
    img: "https://danielfc2001.github.io/dd-dev-profile/assets/JPG.jpg",
    link: "#",
    demo: "#",
  },
];

const PROJECTSFINISHED: [] = [];

const ProjectsContainer: FC = () => {
  const { projectActiveNav } = useContext(GlobalContext) as IGlobal;
  return (
    <section className="mt-5">
      <ContainerHeader title="Proyectos" />
      <ContainerNavigation>
        <ContainerNavigationTab
          name="En Desarrollo"
          tabName="projects"
          tabIndex={0}
        />
        <ContainerNavigationTab
          name="Finalizados"
          tabName="projects"
          tabIndex={1}
        />
      </ContainerNavigation>
      {projectActiveNav === 0 && (
        <ContainerPills target="projects" content={PROJECTSPENDINGS} />
      )}
      {projectActiveNav === 1 && (
        <ContainerPills target="projects" content={PROJECTSFINISHED} />
      )}
    </section>
  );
};

export default ProjectsContainer;
