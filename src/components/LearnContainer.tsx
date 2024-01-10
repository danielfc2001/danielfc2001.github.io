import { FC, useContext } from "react";
import "./learnContainer.css";
import ContainerHeader from "./ContainerHeader";
import ContainerNavigation from "./ContainerNavigation";
import ContainerNavigationTab from "./ContainerNavigationTab";
import { GlobalContext, IGlobal } from "../context/globalContext";
import ContainerPills from "./ContainerPills";

const lenguagesLearned = [
  {
    title: "Javascript",
    progress: 75,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Typescript",
    progress: 40,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "Python",
    progress: 30,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    title: "Golang",
    progress: 10,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
  },
];

const tecsLearned = [
  {
    title: "React",
    progress: 70,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NodeJs",
    progress: 70,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Express",
    progress: 80,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    title: "GitHub",
    progress: 60,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

const skillsLearned: [] = [];

const LearnContainer: FC = () => {
  const { learnActiveNav } = useContext(GlobalContext) as IGlobal;
  return (
    <section className="mt-5">
      <ContainerHeader title="Habilidades" />
      <ContainerNavigation>
        <ContainerNavigationTab name="Lenguages" tabName="learn" tabIndex={0} />
        <ContainerNavigationTab
          name="Tecnologies"
          tabName="learn"
          tabIndex={1}
        />
        <ContainerNavigationTab name="Skills" tabName="learn" tabIndex={2} />
      </ContainerNavigation>
      {learnActiveNav === 0 && (
        <ContainerPills target="learned" content={lenguagesLearned} />
      )}
      {learnActiveNav === 1 && (
        <ContainerPills target="learned" content={tecsLearned} />
      )}
      {learnActiveNav === 2 && (
        <ContainerPills target="learned" content={skillsLearned} />
      )}
    </section>
  );
};

export default LearnContainer;
