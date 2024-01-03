import ContainerHeader from "./ContainerHeader";
import { FC, useContext } from "react";
import ContainerNavigation from "./ContainerNavigation";
import ContainerNavigationTab from "./ContainerNavigationTab";
import { GlobalContext, IGlobal } from "../context/globalContext";
import ContainerPills from "./ContainerPills";

const PROJECTSPENDINGS = [
  {
    title: "Ad`Publisher",
    progress: 50,
    img: "",
    link: "#",
  },
];

const PROJECTSFINISHED = [
  {
    title: "DD`Dev Profile",
    progress: 50,
    img: "",
    link: "#",
  },
];

const ProjectsContainer: FC = () => {
  const { projectActiveNav } = useContext(GlobalContext) as IGlobal;
  return (
    <section className="mt-5">
      <ContainerHeader title="Proyectos" />
      <ContainerNavigation>
        <ContainerNavigationTab
          name="Pendings"
          tabName="projects"
          tabIndex={0}
        />
        <ContainerNavigationTab
          name="Finished"
          tabName="projects"
          tabIndex={1}
        />
      </ContainerNavigation>
      {projectActiveNav === 0 && <ContainerPills content={PROJECTSPENDINGS} />}
      {projectActiveNav === 1 && <ContainerPills content={PROJECTSFINISHED} />}
    </section>
  );
};

export default ProjectsContainer;
